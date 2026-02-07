import { useState } from "react";

export default function ProductRow({ product, onTitleChange }) {
  const cell = {
  padding: 8,
  borderBottom: "1px solid #eee"
  };

  const numericCell = {
  ...cell,
  textAlign: "center"
  };
  const [hover, setHover] = useState(false);
  const titleCell = {...cell,paddingRight: 20};

  return (
    <tr style={{
    background: hover ? "#fafafa" : "white",
    transition: "background 0.15s ease"
    }}
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
    >
    <td style={cell}>
      <input
       value={product.title}
       onChange={(e) =>
        onTitleChange(product.id, e.target.value)
       }
      style={{ width: "85%", padding: 6, cursor: "text" ,minWidth: 180,}}
    />
    </td>
    <td style={titleCell}>{product.brand}</td>
    <td style={titleCell}>{product.category}</td>
    <td style={numericCell}>{product.price}</td>
    <td style={numericCell}>{product.rating}</td>
    </tr>

  );
}
