import { useDidMount } from "hooks";
import { useEffect, useState } from "react";
import firebase from "../services/firebase";

const useCategory7Products = (itemsCount) => {
  const [category7Products, setCategory7Products] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const didMount = useDidMount(true);

  const fetchcategory7Products = async () => {
    try {
      setLoading(true);
      setError("");

      const docs = await firebase.getCategory7Products(itemsCount);

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
          setCategory7Products(items);
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
    if (category7Products.length === 0 && didMount) {
      fetchcategory7Products();
    }
  }, []);

  return {
    category7Products,
    fetchcategory7Products,
    isLoading,
    error,
  };
};

export default useCategory7Products;
