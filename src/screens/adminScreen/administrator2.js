import React from "react";

import Sidebar2 from "../../components/sidebar";

import Chart from "../../components/dashboard/Dashchart";
// import Dashboard from "../../components/dashboard/Dashboard";

function Adminstrator() {
  return (
    <div className="dashboard">
      
        <div   className="">
            
        <Sidebar2/>
        </div >
        <div className="">
        <Chart/>
        
          </div >
      
    </div>
  );
}

export default Adminstrator;
