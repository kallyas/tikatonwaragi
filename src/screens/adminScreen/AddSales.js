import React, { useState } from "react";
import { Card, Form, Col, Row, Button, Table } from "react-bootstrap";
import MaterialTable from "../../components/material/MaterialTable";
import { useHistory } from "react-router-dom";
import Sidebar2 from "../../components/sidebar";
import ProductDropdown from "../../components/products/productDropdown";
function AddSales() {

  // Handle Adding an item on the form

  const [customerName, setcustomerName] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  // const [productName, setproductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [paymentMode, setpaymentMode] = useState("");

  let history = useHistory();

  // const [Details, setUserDetails] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    // setUserDetails({...userDetails})

    const materialEndPoint = "http://localhost:8000/tkSales/sales";

    fetch(materialEndPoint, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type':'application/x-www-form-urlencoded'
      },
      body: JSON.stringify(),
    })
      .then((res) => {
        return res.json();
      })

      .then((data) => {
        console.log(data);
      });

    history.push("/admin/addSales");
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
                      name="customerName"
                      value={customerName}
                      onChange={(event) => setcustomerName(event.target.value)}
                    />
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Control
                      size="sm"
                      placeholder="location"
                      name="location"
                      value={location}
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
                      name="unitPrice"
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
                      name="paymentMode"
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
