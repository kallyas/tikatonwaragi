import React from "react";

import {
  Row,
  Col, 
} from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faHome,
//   faPlus,
 
//   faCheck,
//   faSearch,
//   faSlidersH,
// } from "@fortawesome/free-solid-svg-icons";
// import { BrowserRouter as Switch, Route,} from "react-router-dom";
import Sidebar2 from "../components/sidebar";
// import Dashboard from "../components/material/Dashboard"
// import Dashboard1 from "../components/material/Dashboard"
function Materials() {
  return (
    <div>
      <Row>
        <Col className="side-menu">
        <Sidebar2/>
        </Col>
        <Col className="">
        
          </Col>
      </Row>
    </div>
  );
}

export default Materials;
