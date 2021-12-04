import React from 'react'
import Sidebar2 from "../../components/sidebar";
import List from "../../components/material/MaterialList";
import Footer from '../../components/dashboard/Footer';
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
      <Footer/>
    </div>
  )
}

export default MaterialList
