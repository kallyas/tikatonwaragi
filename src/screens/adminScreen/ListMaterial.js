import React from 'react'
import Sidebar2 from "../../components/sidebar";
import List from "../../components/material/MaterialList";
const MaterialList = () => {
  return (
    <div className="dashboard">
      
        <div   className="">
            
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
