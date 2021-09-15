import React, { useState } from "react";
import { Card, Form, Col, Row, Button } from "react-bootstrap";

const AddMaterialForm = () => {
  // Dropdown menu items
  const SUPPLIERS = ["white", "red", "blue", "black", "cream"];

  // Handle Adding an item on the form
  const materialForm={
    invoiceNumber: "",
    supplier: "",
    category: "",
    item: "",
    unitPrice: "",
    amount: "",
    totalAmount: "",
    discount: "",
    paidAmount: "",
  }
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [supplier, setSupplier] = useState("");
  const [category, setCategory] = useState("");
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const [discount, setDiscount] = useState("");
  const [paidAmount, setPaidAmount] = useState("");

 

  return (
    <div>
      <Card className="addMaterial">
        <Card.Title>Add Material Form</Card.Title>
        <Card.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Control
                  type="text"
                  placeholder="Invoice Number"
                  name="invoiceNumber"
                  value={invoiceNumber}
                  onChange={(event) => setInvoiceNumber(event.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Select
                  defaultValue="Select Supplier"
                  name="supplier"
                  value={supplier}
                  onChange={(event) => setSupplier(event.target.value)}
                >
                  <option value="">Select Supplier</option>
                  {SUPPLIERS.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Row>
            <hr />
            <Row className="mb-3">
              Input value: {category}
              Input value: {item}
              Input value: {quantity}
              Input value: {unitPrice}
              Input value: {amount}
              <Form.Group as={Col}>
                <Form.Control
                  placeholder="Category"
                  name="category"
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Control
                  placeholder="Item"
                  name="item"
                  value={item}
                  onChange={(event) => setItem(event.target.value)}
                />
              </Form.Group>
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
                  placeholder="Unit price"
                  name="unitPrice"
                  value={unitPrice}
                  onChange={(event) =>setUnitPrice(event.target.value)}
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
            <Button variant="primary" size="sm">
              Add item
            </Button>
            <hr />

            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Control
                  placeholder="Total Amount"
                  name="totalAmount"
                  value={totalAmount}
                  onChange={(event) =>setTotalAmount(event.target.value)}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Control
                  placeholder="Discount"
                  name="discount"
                  value={discount}
                  onChange={(event) =>setDiscount(event.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Control
                  placeholder="Paid Amount"
                  name="paidAmount"
                  value={paidAmount}
                  onChange={(event) =>setPaidAmount(event.target.value)}
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

export default AddMaterialForm;
