import { useDidMount } from "hooks";
import { useEffect, useState } from "react";
import firebase from "services/firebase";

const useFeaturedProducts = (itemsCount) => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const didMount = useDidMount(true);

  const fetchFeaturedProducts = async () => {
    try {
      setLoading(true);
      setError("");

      const docs = await firebase.getFeaturedProducts(itemsCount);
      if (docs.empty) {
        if (didMount) {
          setError("No Category1 games found.");
          setLoading(false);
        }
      } else {
        const items = [];

        docs.forEach((snap) => {
          const data = snap.data();
          // console.log(snap.ref.id);
          items.push({ id: snap.ref.id, ...data });
        });
        console.log(items);

        if (didMount) {
          setFeaturedProducts(items);
          setLoading(false);
        }
      }
    } catch (e) {
      if (didMount) {
        setError("Failed to fetch featured products");
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    if (featuredProducts.length === 0 && didMount) {
      fetchFeaturedProducts();
    }
  }, []);

  return {
    featuredProducts,
    fetchFeaturedProducts,
    isLoading,
    error,
  };
};

export default useFeaturedProducts;
