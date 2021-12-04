import React from "react";

import Sidebar2 from "../../components/sidebar";

import AddMaterialForm from "../../components/products/addProducts";
import Footer from "../../components/dashboard/Footer";

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
