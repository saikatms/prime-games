import { useDidMount } from "hooks";
import { useEffect, useState } from "react";
import firebase from "../services/firebase";

const useCategory10Products = (itemsCount) => {
  const [category10Products, setCategory10Products] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const didMount = useDidMount(true);

  const fetchcategory10Products = async () => {
    try {
      setLoading(true);
      setError("");

      const docs = await firebase.getCategory10Products(itemsCount);

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
          setCategory10Products(items);
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
    if (category10Products.length === 0 && didMount) {
      fetchcategory10Products();
    }
  }, []);

  return {
    category10Products,
    fetchcategory10Products,
    isLoading,
    error,
  };
};

export default useCategory10Products;
