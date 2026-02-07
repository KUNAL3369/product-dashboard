import ProductRow from "./ProductRow";

export default function ProductTable({ products, setProducts }) {

  const handleTitleChange = (id, newTitle) => {
    setProducts(prev =>
      prev.map(p =>
        p.id === id ? { ...p, title: newTitle } : p
      )
    );
  };

  const headerStyle = {
  borderBottom: "2px solid #999",
  padding: 10,
  textAlign: "left",
  fontWeight: 600,
  background: "#f7f7f7"
  };


  return (
    <table style={{ width: "100%", borderCollapse: "collapse",marginTop: 16 }}>
    <thead>
      <tr>
       <th style={headerStyle}>Title</th>
       <th style={headerStyle}>Brand</th>
       <th style={headerStyle}>Category</th>
       <th style={headerStyle}>Price</th>
       <th style={headerStyle}>Rating</th>
     </tr>
    </thead>


      <tbody>
        {products.map(product => (
          <ProductRow
            key={product.id}
            product={product}
            onTitleChange={handleTitleChange}
          />
        ))}
      </tbody>
    </table>
  );
}
