import React from "react";

import Sidebar2 from "../../components/sidebar";

import AddMaterialForm from "../../components/material/AddMaterialForm";
import Dashboard from "../../components/dashboard/Dashboard";

function Adminstrator() {
  return (
    <div className="dashboard">
      
        <div   className="">
            
        <Sidebar2/>
        </div >
        <div className="data-display">
        {/* <Dashboard/> */}
        <AddMaterialForm />
          </div >
      
    </div>
  );
}

export default Adminstrator;
