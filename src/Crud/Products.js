import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Products.scss";

const API = "https://fakestoreapi.com/products";

function Products() {
  const [products, setProducts] = useState([]);
  const [value, setValue] = useState();

  useEffect(() => {
    axios
      .get(API)
      .then((res) => {
        setProducts(res.data);
      })
      .then((err) => {
        console.log(err);
      });
  }, []);

  function filterPrice() {
    let value1 = value;
    const filterData = products.filter((item) =>
      item.price < value1 ? item : ""
    );
    setProducts(filterData);
  }

  function decOrder() {
    console.log(products.length);
    console.log(products[0]);
    let decending = [];
    for (let i = products.length - 1; i >= 0; i--) {
      console.log("loop", i, products[i]);
      decending.push(products[i]);
    }
    console.log({ decending });
      setProducts(decending);
    
  }

  console.log(value);

  return (
    <>
      <div className="input-buttons">
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter Price Filter"
        />
        <button onClick={filterPrice}>Filter By Price</button>
        <button onClick={decOrder}>Dec Order</button>
      </div>
      <div className="grid-cutter">
        {products?.map((pro) => (
          <div className="single-product-card" key={pro.id}>
            <span>{pro.id}</span>
            <h3 className="title">{pro.title}</h3>
            <h3 className="price">{pro.price}</h3>
            <p className="description">{pro.description}</p>
            <h4 className="category">{pro.category}</h4>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const API = "https://fakestoreapi.com/products";

// export default function Products() {
//   const [product, setProduct] = useState([]);

//   useEffect(() => {
//     axios
//       .get(API)
//       .then((res) => {
//         setProduct(res.data)
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   return (
//     <>
//     {
//       product.map((pro) =>{
//       return(
//         <p>{pro.title}</p>
//       )})
//     }
//     </>
//   );
// }
