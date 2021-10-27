import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

const ProductDropdown = () => {
  //                                                                                                                                              const [productOption, setProductOption] = useState("");
  const [PRODUCTS, setproductData] = useState([]);
  const [selectedProduct, setSelectedProduct]= useState("");
  useEffect(() => {

    const productEndPoint = "http://localhost:8000/tkproduct/products";
  
    fetch(productEndPoint)
      .then((res) => res.json())

      .then((productList) => {
        setproductData(productList);

        console.log(productList);
      });
  }, []);

  const products = PRODUCTS.map((item) => {
    <option 
    key={item.id}
    value={item.product_name}
    >{item.product_name}</option>;
    console.log(item.product_name)
  });

  
  return (
    <div>
      
      <Form.Select
        size="sm"
        defaultValue="Select Products"
        name="product"
        value={selectedProduct}
        onChange={(event) => setSelectedProduct(event.target.value)}
      >
        <option value="">Select Products</option>
     
      
                  {products.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
      </Form.Select>
    </div>
  );
};

export default ProductDropdown;
