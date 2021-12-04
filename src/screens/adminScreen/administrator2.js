import React from "react";

import Sidebar2 from "../../components/sidebar";

import Chart from "../../components/dashboard/Dashchart";
import Footer from "../../components/dashboard/Footer";
import Header from "../../components/dashboard/DashHeader";

function Adminstrator() {
  return (
    <div className="dashboard">
      
        <div   className="side-bar">
            
        <Sidebar2/>
        </div >
        <div className="data-display">
          <Header/>
          <Chart/>
        
          </div >
    </div>
  );
}

export default Adminstrator;
