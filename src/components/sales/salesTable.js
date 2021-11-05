import React ,{useEffect, useState} from 'react'
import {
    Breadcrumb,
    Button,
    ButtonGroup,
    Row,
    Col,
    InputGroup,
    Form,
    Dropdown,
    Card,
    Table,
   
  } from "react-bootstrap";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import {
    faPlus,
    faCheck,
    faSearch,
    faSlidersH,
  } from "@fortawesome/free-solid-svg-icons";



  useEffect(() => {
    const MaterialEndPoint = 'http://localhost:8000/tkMaterial/materials';
    fetch(MaterialEndPoint).then(res=>res.json()) 

    .then((material)  => {
                    setMaterialData( material)
                   console.log(material); 
                }) 
    }, [])


const SalesTable = ({ sales, index,removesales }) => {

    
  return (  
                <tbody>
                  <tr>
                    <td>
                    {sales.category}                      
                    </td>
                    <td>{sales.item}</td>
                    <td>{sales.quantity}</td>
                    <td>{sales.unitPrice}</td>
                    <td>{sales.amount}</td>
                    <td> <Button variant="danger" onClick={() => removesales(index)}>✕</Button></td>
                  </tr>
                </tbody>
              
  )
}

export default SalesTable
