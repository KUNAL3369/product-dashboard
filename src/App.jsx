import useInfiniteProducts from "../hooks/useInfiniteProducts";
import ProductTable from "../components/ProductTable";
import Loader from "../components/Loader";

function App() {
  const {
    products,
    setProducts,
    loading,
    hasMore,
    fetchProducts
  } = useInfiniteProducts();

  return (
    <div
      style={{
      width: "92%",
      maxWidth: 900,        
      margin: "20px auto",   
      padding: 30,
      background: "#e9ecef",
      boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
      borderRadius: 8
      }}
      >

      <h1 style={{ marginBottom: 20, fontWeight: 600, textAlign:"center"}}>
        Product Dashboard
      </h1>

      <ProductTable
        products={products}
        setProducts={setProducts}
      />

      <Loader
        onVisible={fetchProducts}
        loading={loading}
        hasMore={hasMore}
      />
    </div>
  );
}

export default App;
