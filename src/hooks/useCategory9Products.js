import { useDidMount } from "hooks";
import { useEffect, useState } from "react";
import firebase from "../services/firebase";

const useCategory9Products = (itemsCount) => {
  const [category9Products, setCategory9Products] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const didMount = useDidMount(true);

  const fetchcategory9Products = async () => {
    try {
      setLoading(true);
      setError("");

      const docs = await firebase.getCategory9Products(itemsCount);

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
          setCategory9Products(items);
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
    if (category9Products.length === 0 && didMount) {
      fetchcategory9Products();
    }
  }, []);

  return {
    category9Products,
    fetchcategory9Products,
    isLoading,
    error,
  };
};

export default useCategory9Products;
