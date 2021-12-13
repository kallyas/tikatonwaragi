import React from 'react'
import Sidebar2 from "../sidebar";
import List from "./MaterialList";

const MaterialList = () => {
  return (
    <div className="dashboard">
      
        <div   className="side-bar">
            
        <Sidebar2/>
        </div >
        <div className="data-display">
        {/* <Dashboard1/> */}
        <List/>
        </div >
     
    </div>
  )
}

export default MaterialList
