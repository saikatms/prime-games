import { useDidMount } from "hooks";
import { useEffect, useState } from "react";
import firebase from "../services/firebase";

const useCOVIDEssentialProducts = (itemsCount) => {
  const [COVIDEssentialProducts, setCOVIDEssentialProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const didMount = useDidMount(true);

  const fetchCovidEssentialProducts = async () => {
    try {
      setLoading(true);
      setError("");

      const docs = await firebase.getRecommendedProducts(itemsCount);

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
          setCOVIDEssentialProducts(items);
          setLoading(false);
        }
      }
    } catch (e) {
      if (didMount) {
        setError("Failed to fetch COVID products");
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    if (recommendedProducts.length === 0 && didMount) {
      fetchCovidEssentialProducts();
    }
  }, []);

  return {
    COVIDEssentialProducts,
    fetchCovidEssentialProducts,
    isLoading,
    error,
  };
};

export default useCOVIDEssentialProducts;
