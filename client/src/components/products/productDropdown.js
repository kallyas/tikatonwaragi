import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

const ProductDropdown = () => {
  //                                                                                                                                              const [productOption, setProductOption] = useState("");
  const [PRODUCTS, setproductData] = useState([]);
  const [productName, setproductName] = useState("product");
useEffect(() => {

    const productEndPoint = "http://localhost:8000/tkproduct/products";
    return () => {
      fetch(productEndPoint)
      .then((res) => res.json())
      .then((productList) => {
        setproductData(productList);
        console.log(productList);
      });
    };
  }, [])
//Destructure the object returned from database
  // const products = PRODUCTS.map((item) => {
  //   // <option 
  //   // key={item.id}
  //   // value={item.product_name}
  //   // >{item.product_name}</option>;
  //   // console.log(item.product_name)
    
  //         item.PRODUCT.map((product_name) => {
  //           <option key={product_name} value={product_name}>
  //             {product_name}
  //           </option>
  //         })
        
  // });
  return (
    
    <Form.Select
    size="sm"
    defaultValue="Select Products"
    name="productName"
    value={productName}
    onChange={(event) =>
      setproductName(event.target.value)
    }
  >
                 {PRODUCTS.map((item ) => (
                    <option key={item.id}>{item.product_name}</option>
                  ))}
                 </Form.Select>
  );
};

export default ProductDropdown;
