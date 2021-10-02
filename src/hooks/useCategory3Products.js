import { useDidMount } from "hooks";
import { useEffect, useState } from "react";
import firebase from "../services/firebase";

const useCategory3Products = (itemsCount) => {
  const [category3Products, setCategory3Products] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const didMount = useDidMount(true);

  const fetchcategory3Products = async () => {
    try {
      setLoading(true);
      setError("");

      const docs = await firebase.getCategory3Products(itemsCount);

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
          setCategory3Products(items);
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
    if (category3Products.length === 0 && didMount) {
      fetchcategory3Products();
    }
  }, []);

  return {
    category3Products,
    fetchcategory3Products,
    isLoading,
    error,
  };
};

export default useCategory3Products;
