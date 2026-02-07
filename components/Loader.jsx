import { useEffect, useRef } from "react";

export default function Loader({ onVisible, loading, hasMore }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting && !loading && hasMore) {
          onVisible();
        }
      },
      {
        root: null,
        rootMargin: "200px",   
        threshold: 0           
      }
    );

    if (hasMore) observer.observe(el);


    return () => observer.unobserve(el);
  }, [onVisible, loading, hasMore]);

  return (
    <div
      ref={ref}
      style={{
        padding: 24,
        marginTop: 12,
        textAlign: "center",
        border: "1px solid black"
      }}
    >
      {loading ? "Loading more..." : hasMore ? "Scroll down" : "No more data"}
    </div>
  );
}
