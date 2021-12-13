import React from "react";

import Sidebar2 from "../sidebar";

import AddMaterialForm from "./AddMaterialForm";

function AddMaterial() {
  return (
    <div className="dashboard">
      
        <div   className="side-bar">
            
        <Sidebar2/>
        </div >
        <div className="form">
        {/* <Dashboard1/> */}
        <h4>Sales Form</h4>
        <AddMaterialForm />
          </div >
   
    </div>
  );
}

export default AddMaterial;
