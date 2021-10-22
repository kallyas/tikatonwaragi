import React, { useState } from "react";
import { Card, Form, Col, Row, Button, Table } from "react-bootstrap";
import MaterialTable from "../../components/material/MaterialTable";
import {useHistory,} from "react-router-dom";
import Sidebar2 from "../../components/sidebar";



function AddMaterial() {
      // Dropdown menu items
  const SUPPLIERS = ["white", "red", "blue", "black", "cream"];

  // Handle Adding an item on the form

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

  function getAmount() {
    amount=unitPrice*quantity
    setAmount(amount)
  }


  let history = useHistory();

  // const [Details, setUserDetails] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault()
  
    // setUserDetails({...userDetails})
    console.log(materialForm);
    const materialEndPoint='http://localhost:8000/tkMaterial/materials'
    
    fetch(materialEndPoint, {
      method: 'post',
      headers:{
          'Content-Type': 'application/json',
          // 'Content-Type':'application/x-www-form-urlencoded'
      },
      body: JSON.stringify(materialForm),
    })
    .then(res=>{
      return res.json()
    })

.then(data=> {
console.log(data)

})

history.push("/admin/addMaterial");
}   
const [materials, setMaterial]=useState([])
   const addMaterial=()=>{
    const newMaterial=[...materials,{category,item,quantity,unitPrice,amount}]
      //  newMaterial.push(item,quantity,unitPrice,amount);
    
      setMaterial(newMaterial);
      console.log(newMaterial)
    }
    const removeMaterial = (index) => {
      const newMaterial = [...materials];
      newMaterial.splice(index, 1);
      setMaterial(newMaterial);
    };
  
    const materialForm={
      invoiceNumber: invoiceNumber,
      supplier_id:supplier,
      category: category,
      item: item,
      quantity:quantity,
      unitPrice:unitPrice ,
      amount: amount
    }
  return (
    <div className="dashboard">
      
        <div   className="">
            
        <Sidebar2/>
        </div >
        <div className="">
        {/* <Dashboard1/> */}
        <div>
      <Card className="addCard">
        <Card.Title>Sales Form</Card.Title>
        <Card.Body>
          <Form onSubmit={handleSubmit} method="POST" action="/admin/addMaterial">
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Control
                size="sm"
                  type="text"
                  placeholder="Invoice Number"
                  name="invoiceNumber"
                  value={invoiceNumber}
                  onChange={(event) => setInvoiceNumber(event.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Select
                size="sm"
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
         
              <div>  
              <Table hover className="user-table align-items-center">
                <thead>
                  <tr>
                    <th className="border-bottom">Category</th>
                    <th className="border-bottom">Item</th>
                    <th className="border-bottom">Quantity</th>
                    <th className="border-bottom">Unit Price</th>
                    <th className="border-bottom">Amount</th>
                    <th className="border-bottom">Action</th>
                  </tr>
                </thead>
               
                            
              {materials.map((material, index) => (
            
                <MaterialTable
                key={index}
                index={index}
                material={material}
                removeMaterial={removeMaterial}
                />
            
          ))}
              </Table> 
              </div>
              
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
                <Form.Control
                size="sm"
                  placeholder="Item"
                  name="item"
                  value={item}
                  onChange={(event) => setItem(event.target.value)}
                />
              </Form.Group>
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
                  onChange={(event) =>setUnitPrice(event.target.value)}
                />
              </Form.Group>
              <Form.Group as={Col}>
                {materials.amount}
                <Form.Control
                size="sm"
                  placeholder="Amount"
                  name="amount"
                  value={amount}
                  onChange={(event) =>setAmount(event.target.value)}
                />
              </Form.Group>
              <Form.Group as={Col}>
              <Button variant="primary" size="sm" onClick={() => addMaterial()}>
              Add item
            </Button>
              </Form.Group>
             
            </Row>
          
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
          </div >
      
    </div>
  );
}

export default AddMaterial;
