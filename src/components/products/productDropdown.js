import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

const ProductDropdown = () => {
  const [productOption, setProductOption] = useState("");
  const [PRODUCTS, setproductData] = useState([]);

  useEffect(() => {
    const productEndPoint = "http://localhost:8000/tkproduct/products";
    fetch(productEndPoint)
      .then((res) => res.json())

      .then((productList) => {
        setproductData(productList);

        console.log(productList);
      });
  }, []);

  const products = PRODUCTS.map((PRODUCTS) => {
    <option 
    key={PRODUCTS.value}
    value={PRODUCTS.value}
    >{PRODUCTS.product_name}</option>;
  });

  return (
    <div>
      <Form.Select
        size="sm"
        defaultValue="Select Supplier"
        name="product"
        value={products}
        onChange={(event) => setproductData(event.target.value)}
      >
        <option value="">Select Products</option>
        {products}
      </Form.Select>
    </div>
  );
};

export default ProductDropdown;
