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

  const products = PRODUCTS.map((item) => {
    <option 
    key={item.value}
    value={item.value}
    >{item.product_name}</option>;
  });

  return (
    <div>
      <Form.Select
        size="sm"
        defaultValue="Select Supplier"
        name="product"
        value={productOption}
        onChange={(event) => setProductOption(event.target.value)}
      >
        <option value="">Select Products</option>
        {products}
      </Form.Select>
    </div>
  );
};

export default ProductDropdown;
