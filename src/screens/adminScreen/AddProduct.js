import React from "react";

import Sidebar2 from "../../components/sidebar";

import AddMaterialForm from "../../components/products/addProducts";

function AddMaterial() {
  return (
    <div className="dashboard">
      
        <div   className="">
            
        <Sidebar2/>
        </div >
        <div className="">
        {/* <Dashboard1/> */}
        <AddMaterialForm />
          </div >
      
    </div>
  );
}

export default AddMaterial;
