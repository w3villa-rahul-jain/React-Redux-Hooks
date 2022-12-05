import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Products.scss";

export default function Products() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="card">
      {product.map((item) => (
        <div className="inner-card" key={item.key}>
          <h1>{item.id}</h1>
          <h1>{item.category}</h1>
          <p className="description">{item.description}</p>
          <h1>{item.price}</h1>
        </div>
      ))}
    </div>
  );
}
