import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchData() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {product.map((pro) => (
        <h1 key={pro.id}>{pro.title}</h1>
      ))}
    </>
  );
}

export default FetchData;
