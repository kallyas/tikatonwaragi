import React, { useState } from "react";
import { Card, Form, Col, Row, Button } from "react-bootstrap";

import {useHistory,} from "react-router-dom";

const AddProductForm = () => {
  // Dropdown menu items
  const SUPPLIERS = ["white", "red", "blue", "black", "cream"];
  const totalAmount=[];
  // Handle Adding an item on the form

  const [productName, setProductName] = useState("");
  
  const [category, setCategory] = useState("");
  
  const [quantity, setQuantity] = useState("");
  const [batchNo, setBatchNo] = useState("");
  const [rate, setRate] = useState("");
  const [amount,setAmount]=useState(totalAmount);
  

  let history = useHistory();

  // const [Details, setUserDetails] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault()
  
    // setUserDetails({...userDetails})
    console.log(productForm);
    const productEndPoint='http://localhost:8000/tkProduct/products'
    
    fetch(productEndPoint, {
      method: 'post',
      headers:{
          'Content-Type': 'application/json',
          // 'Content-Type':'application/x-www-form-urlencoded'
      },
      body: JSON.stringify(productForm),
    })
    .then(res=>{
      return res.json()
    })

.then(data=> {
console.log(data)

})

history.push("/admin/addproduct");
}   
 
    const productForm={
      productName:productName,
      category: category,
      quantity:quantity,
      rate:rate ,
      batchNo: batchNo,
      amount:amount
    }

  return (
    <div>
      <Card className="addCard">
        <Card.Title>Add Products Form</Card.Title>
        <Card.Body>
          <Form onSubmit={handleSubmit} method="POST" action="/admin/addproduct">
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Control
                
                  type="text"
                  placeholder="Product Name"
                  name="productName"
                  value={productName}
                  onChange={(event) => setProductName(event.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Select
               
                  defaultValue="Product Category"
                  name="productCategory"
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                >
                  <option value="">Select a Category</option>
                  {SUPPLIERS.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Row>
            <hr />
            <Row className="mb-3">         
           
              <Form.Group as={Col}>
                <Form.Control
               
                  placeholder="Quantity"
                  name="quantity"
                  value={quantity}
                  onChange={(event) => setQuantity(event.target.value)}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Control
               
                  placeholder="Batch Number"
                  name="batchNo"
                  value={batchNo}
                  onChange={(event) =>setBatchNo(event.target.value)}
                />
              </Form.Group>
              </Row>
            <hr />
            
          
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Control
                  placeholder="Rate"
                  name="rate"
                  value={rate}
                  onChange={(event) =>setRate(event.target.value)}
                />
              </Form.Group>
              
              <Form.Group as={Col}>
                <Form.Control
                  placeholder="Amount"
                  name="amount"
                  value={amount}
                  onChange={(event) =>setAmount(event.target.value)}
                />
              </Form.Group>
            </Row>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AddProductForm ;
