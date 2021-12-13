import React from "react";

import Sidebar2 from "../sidebar";

import AddMaterialForm from "./addProducts";

function AddProduct() {
  return (
    <div className="dashboard">
      
        <div   className="side-bar">
            
        <Sidebar2/>
        </div >
        <div className="form">
        {/* <Dashboard1/> */}
        <AddMaterialForm />
        
          </div >
          
    </div>
  );
}

export default AddProduct;
