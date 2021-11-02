import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

const customerDropdown = () => {
  //                                                                                                                                              const [customerOption, setcustomerOption] = useState("");
  const [CUSTOMERS, setcustomerData] = useState([]);
  const [selectedcustomer, setSelectedcustomer]= useState("");
  useEffect(() => {
    const customerEndPoint = "http://localhost:8000/tkCustomer/customers";
    return () => {
      fetch(customerEndPoint)
      .then((res) => res.json())

      .then((customerList) => {
        setcustomerData(customerList);

        console.log(customerList);
      });
    };
  }, [])

//Array that displays 
  const customers = CUSTOMERS.map((item) => {
    <option 
    key={item.id}
    value={item.customer_name}
    >{item.customer_name}</option>;
    console.log(item.customer_name)
  });

  
  return (
    <div>
      
      <Form.Select
        size="sm"
        defaultValue="Select customers"
        name="customer"
        value={selectedcustomer}
        onChange={(event) => setSelectedcustomer(event.target.value)}
      >
        <option value="">Select customers</option>
     
      
                  {customers.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
      </Form.Select>
    </div>
  );
};

export default customerDropdown;
