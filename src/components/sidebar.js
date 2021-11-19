import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBackward, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import SideBarData  from '../components/dashboard/SidenavData';

const Sidebar2 = () => {
  return (
    <div className="side-menu">
      <div className="top-menu">
        <div className="logo">
          <h3>Tikaton</h3>
        </div>          
      </div>
      <hr/>
      <div className="bottom-menu">
      <ul className="side-bar-list">
          {SideBarData.map((val,key)=>{
              return(
                <li key={key}
                className="side-bar-list-item"
                id={window.location.pathname===val.link ? "active":""}
                onClick={()=>{
                    window.location.pathname=val.itemId
                }}>
                    
                    <div id="icon">{val.icon}</div>
                    <div id="title">{val.title}</div>
                    
                 
                </li>
              )
          })
        }
        </ul>
      </div>
    </div>
  );
};

export default Sidebar2;
