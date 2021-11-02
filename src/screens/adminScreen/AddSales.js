import React, { useState } from "react";
import { Card, Form, Col, Row, Button, Table } from "react-bootstrap";
import MaterialTable from "../../components/material/MaterialTable";
import { useHistory } from "react-router-dom";
import Sidebar2 from "../../components/sidebar";
import ProductDropdown from "../../components/products/productDropdown";
function AddSales() {

  // Handle Adding an item on the form

  const [customerName, setcustomerName] = useState("");
  const [customer_location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [productName, setproductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [paymentMode, setpaymentMode] = useState("");

  let history = useHistory();

  // adding sales object
  const salesForm={
    product_name: productName,
    category: category,
    quantity:quantity,
    unit_price:unitPrice ,
    amount: amount,
    payment_mode:paymentMode
  }
  // customer object
  const customerForm={
    customer_name:customerName,
    customer_location:customer_location
  }

  // const [Details, setUserDetails] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    // setUserDetails({...userDetails})

    const salesEndPoint = "http://localhost:8000/tkSales/sales";
    const customerEndpoint="http://localhost:8000/tkCustomers/customers"
// Post  form to two end points 
    Promise.all([
    fetch(salesEndPoint, {
      method: "post",
      mode: 'cors',
    
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': 'http://localhost:8000',
        "Allow": "POST",

      },
      body: JSON.stringify(salesForm),
    }),
    fetch(customerEndpoint, {
      method: "post",
      mode: 'cors',
    
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': 'http://localhost:8000',
        "Allow": "POST",
      },
      body: JSON.stringify(customerForm),
    }),
  ])
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
    history.push("/admin/sales");
  };

  return (
    <div className="dashboard">
      <div className="">
        <Sidebar2 />
      </div>
      <div className="">
        {/* <Dashboard1/> */}
        <div>
          <Card className="addCard">
            <Card.Title>Sales Form</Card.Title>
            <Card.Body>
              <Form
                onSubmit={handleSubmit}
                method="POST"
                action="/admin/addSales"
              >
                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Control
                      size="sm"
                      type="text"
                      placeholder="customerName"
                      name="customer_name"
                      value={customerName}
                      onChange={(event) => setcustomerName(event.target.value)}
                    />
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Control
                      size="sm"
                      placeholder="location"
                      name="location"
                      value={customer_location}
                      onChange={(event) => setLocation(event.target.value)}
                    />
                  </Form.Group>
                </Row>
                <hr />
                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Control
                      size="sm"
                      placeholder="Category"
                      name="category"
                      value={category}
                      onChange={(event) => setCategory(event.target.value)}
                    />
                  </Form.Group>
                  <Form.Group as={Col}>
                  
                    <ProductDropdown/>
                  </Form.Group>
                </Row>

                <hr />

                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Control
                      size="sm"
                      placeholder="Quantity"
                      name="quantity"
                      value={quantity}
                      onChange={(event) => setQuantity(event.target.value)}
                    />
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Control
                      size="sm"
                      placeholder="Unit price"
                      name="unit_price"
                      value={unitPrice}
                      onChange={(event) => setUnitPrice(event.target.value)}
                    />
                  </Form.Group>
                </Row>

                <hr /> 

                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Control
                      size="sm"
                      placeholder="Amount"
                      name="amount"
                      value={amount}
                      onChange={(event) => setAmount(event.target.value)}
                    />
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Control
                      placeholder="Payment Mode"
                      name="payment_mode"
                      value={paymentMode}
                      onChange={(event) => setpaymentMode(event.target.value)}
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
      </div>
    </div>
  );
}

export default AddSales;
