import React, { useState, useEffect } from "react";
import axios from "axios";

export default function SinglePost() {
  const [product, setProduct] = useState({});
  const [id, setId] = useState();
  const [idButtonClick, setIdButtonClick] = useState();

const handleClick = () =>{
    setIdButtonClick(id);
}

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${idButtonClick}`)
      .then((res) => {
        console.log(res);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idButtonClick]);

  return (
    <>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={handleClick}>Click me</button>
      <p>{product.title}</p>
    </>
  );
}
