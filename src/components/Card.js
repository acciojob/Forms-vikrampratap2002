import React from "react";

function Card({ children }) {
  return (
    <div
      style={{
        width: "400px",
        margin: "50px auto",
        padding: "30px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      {children}
    </div>
  );
}

export default Card;