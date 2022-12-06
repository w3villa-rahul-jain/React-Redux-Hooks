import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchData() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        let test = res.data.map((filterItem) => {
          // let test = filterItem.price > 50;
          if (filterItem.price > 50) {
            return filterItem;
          }
        });
        console.log(test);
        setProduct(test);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // console.log("All ", all);

  return (
    <>
      {/* {product.map((pro) => (
        <h1 key={pro.id}>{pro.title}</h1>
      ))}

      {product.map((pro) => (
        <h1 key={pro.id}>{pro.title}</h1>
      ))} */}
      {/* {console.log("new ", product)} */}
      <div>
        {/* {
          product.map((item) => {
            item === undefined
              ? console.log("error")
              : <li>hello</li>
          })
        } */}
        {product.map((item) => {
          return (
          item === undefined ?  console.log("undefined")
          :  <li key={item.id}>{item.title}</li>
          )
        })}
      </div>
    </>
  );
}

export default FetchData;
