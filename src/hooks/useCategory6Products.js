import { useDidMount } from "hooks";
import { useEffect, useState } from "react";
import firebase from "../services/firebase";

const useCategory6Products = (itemsCount) => {
  const [category6Products, setCategory6Products] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const didMount = useDidMount(true);

  const fetchcategory6Products = async () => {
    try {
      setLoading(true);
      setError("");

      const docs = await firebase.getCategory6Products(itemsCount);

      if (docs.empty) {
        if (didMount) {
          setError("No category2 games found.");
          setLoading(false);
        }
      } else {
        const items = [];

        docs.forEach((snap) => {
          const data = snap.data();
          items.push({ id: snap.ref.id, ...data });
        });

        if (didMount) {
          setCategory6Products(items);
          setLoading(false);
        }
      }
    } catch (e) {
      if (didMount) {
        setError("Failed to fetch recommended products");
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    if (category6Products.length === 0 && didMount) {
      fetchcategory6Products();
    }
  }, []);

  return {
    category6Products,
    fetchcategory6Products,
    isLoading,
    error,
  };
};

export default useCategory6Products;
