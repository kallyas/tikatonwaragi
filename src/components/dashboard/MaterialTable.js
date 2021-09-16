import React from 'react'
import {
    Button,
    Table,
  } from "react-bootstrap";

const MaterialTable = ({ material, index,removeMaterial }) => {
  return (
   
                <tbody>
                  <tr>
                    <td>
                    {material.category}                      
                    </td>
                    <td>{material.item}</td>
                    <td>{material.quantity}</td>
                    <td>{material.unitPrice}</td>
                    <td>{material.amount}</td>
                    <td> <Button variant="outline-danger" onClick={() => removeMaterial(index)}>✕</Button></td>
                  </tr>
                </tbody>
              
  )
}

export default MaterialTable
