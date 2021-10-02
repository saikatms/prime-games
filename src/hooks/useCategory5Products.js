import { useDidMount } from "hooks";
import { useEffect, useState } from "react";
import firebase from "../services/firebase";

const useCategory5Products = (itemsCount) => {
  const [category5Products, setCategory5Products] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const didMount = useDidMount(true);

  const fetchcategory5Products = async () => {
    try {
      setLoading(true);
      setError("");

      const docs = await firebase.getCategory5Products(itemsCount);

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
          setCategory5Products(items);
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
    if (category5Products.length === 0 && didMount) {
      fetchcategory5Products();
    }
  }, []);

  return {
    category5Products,
    fetchcategory5Products,
    isLoading,
    error,
  };
};

export default useCategory5Products;
