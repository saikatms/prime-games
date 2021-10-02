import { useDidMount } from "hooks";
import { useEffect, useState } from "react";
import firebase from "../services/firebase";

const useCategory4Products = (itemsCount) => {
  const [category4Products, setCategory4Products] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const didMount = useDidMount(true);

  const fetchcategory4Products = async () => {
    try {
      setLoading(true);
      setError("");

      const docs = await firebase.getCategory4Products(itemsCount);

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
          setCategory4Products(items);
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
    if (category4Products.length === 0 && didMount) {
      fetchcategory4Products();
    }
  }, []);

  return {
    category4Products,
    fetchcategory4Products,
    isLoading,
    error,
  };
};

export default useCategory4Products;
