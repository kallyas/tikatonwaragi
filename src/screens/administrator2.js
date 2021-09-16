import React from "react";

// import {
//   Row,
//   Col, 
// } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faHome,
//   faPlus,
 
//   faCheck,
//   faSearch,
//   faSlidersH,
// } from "@fortawesome/free-solid-svg-icons";

import Sidebar2 from "../components/sidebar";
import Dashboard from "../components/material/Dashboard"
import Dashboard1 from "../components/material/dashnew";
import AddMaterialForm from "../components/dashboard/AddMaterialForm";

function Adminstrator() {
  return (
    <div className="dashboard">
      
        <div   className="side-menu">
            
        <Sidebar2/>
        </div >
        <div className="data-display">
        {/* <Dashboard1/> */}
        <AddMaterialForm />
          </div >
      
    </div>
  );
}

export default Adminstrator;
