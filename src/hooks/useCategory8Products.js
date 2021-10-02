import { useDidMount } from "hooks";
import { useEffect, useState } from "react";
import firebase from "../services/firebase";

const useCategory8Products = (itemsCount) => {
  const [category8Products, setCategory8Products] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const didMount = useDidMount(true);

  const fetchcategory8Products = async () => {
    try {
      setLoading(true);
      setError("");

      const docs = await firebase.getCategory8Products(itemsCount);

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
          setCategory8Products(items);
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
    if (category8Products.length === 0 && didMount) {
      fetchcategory8Products();
    }
  }, []);

  return {
    category8Products,
    fetchcategory8Products,
    isLoading,
    error,
  };
};

export default useCategory8Products;
