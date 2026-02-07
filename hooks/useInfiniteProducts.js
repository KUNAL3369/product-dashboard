import { useState, useEffect, useCallback } from "react";

export default function useInfiniteProducts() {
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const LIMIT = 10;

  const fetchProducts = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);

    try {
      const res = await fetch(
        `https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`
      );

      const data = await res.json();

      if (data.products.length === 0) {
        setHasMore(false);
      } else {
        setProducts(prev => [...prev, ...data.products]);
        setSkip(prev => prev + LIMIT);
      }
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  }, [skip, loading, hasMore]);

  // ✔ Proper effect pattern
  useEffect(() => {
    const loadInitial = async () => {
      await fetchProducts();
    };

    loadInitial();
  }, [fetchProducts]);

  return {
    products,
    loading,
    hasMore,
    fetchProducts,
    setProducts
  };
}
