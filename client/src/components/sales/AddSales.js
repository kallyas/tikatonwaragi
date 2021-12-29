import React, { useState } from "react";
import { Form, Col, Row } from "react-bootstrap";
import{Button }  from "@mui/material";
import { useHistory } from "react-router-dom";
// import Sidebar2 from "../sidebar";
import ProductDropdown from "../products/productDropdown";
function AddSales() {
  // Handle Adding an item on the form

  const [customerName, setcustomerName] = useState("");
  const [customer_location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [paymentMode, setpaymentMode] = useState("");

  let history = useHistory();

  // adding sales object
  const salesForm = {
    product_name: productName,
    category: category,
    quantity: quantity,
    unit_price: unitPrice,
    amount: amount,
    payment_mode: paymentMode,
  };
  // customer object
  const customerForm = {
    customer_name: customerName,
    customer_location: customer_location,
  };

  // const [Details, setUserDetails] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    // setUserDetails({...userDetails})

    const salesEndPoint = "http://localhost:8000/tkSales/sales";
    const customerEndpoint = "http://localhost:8000/tkCustomer/customers";
    // Post  form to two end points
    Promise.all([
      fetch(salesEndPoint, {
        method: "post",
        mode: "cors",

        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:8000",
          Allow: "POST",
        },
        body: JSON.stringify(salesForm),
      }),
      fetch(customerEndpoint, {
        method: "post",
        mode: "cors",

        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:8000",
          Allow: "POST",
        },
        body: JSON.stringify(customerForm),
      }),
    ])
      .then(([customerForm,salesForm]) => {
        const customer=customerForm.json
        const sale= salesForm.json
        return [customer,sale]
      })
      .then((data) => {
        
        console.log(data);
      });
    history.push("/admin/sales");
  };

  return (
    
           
          
              <Form
                onSubmit={handleSubmit}
                method="POST"
                action="/admin/addSales"
                className="form"
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
                   
                      <ProductDropdown />
                   
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
                    size="sm"
                      placeholder="Payment Mode"
                      name="payment_mode"
                      value={paymentMode}
                      onChange={(event) => setpaymentMode(event.target.value)}
                    />
                  </Form.Group>
                </Row>

                <Button variant="contained" type="submit">
                  Submit
                </Button>
              </Form>
          
        
    
  );
}

export default AddSales;
