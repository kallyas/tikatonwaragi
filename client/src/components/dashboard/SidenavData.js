import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCashRegister,
  faHome,
  faLandmark,
  faShuttleVan,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const SideData = [
        {
          title: "Dashboard",
          icon:<FontAwesomeIcon name="users" icon={faHome}/>,
          itemId: "admin",
          // you can use your own custom Icon component as well
          // icon is optional
        },
        {
          title: "Material",
          icon:<FontAwesomeIcon name="users" icon={faUser}/>,
          itemId: "admin/materialList",
       
        },
        {
          title: "Products",
          icon:<FontAwesomeIcon name="users" icon={faUser} />,
          itemId: "/admin/productList",
          
          
        },
        {
          title: "Sales",
          icon:<FontAwesomeIcon name="users" icon={faCashRegister} />,
          itemId: "/admin/salesList",
          
        },
        {
          title: "Supplier",
          icon:<FontAwesomeIcon name="users" icon={faShuttleVan} />,
          itemId: "/admin/suppliers",
          
          subNav: [
            {
              title: "New Products",
              itemId: "/admin/Supplier/AddNew",
            },
            {
              title: "Supplier List",
              itemId: "/admin/Supplier/Lists",
            },
                        
          ],
        },
   
        {
          title: "Location",
          icon:<FontAwesomeIcon name="users" icon={faLandmark} />,
          itemId: "/admin/location",
          subNav: [
            {
              title: "New Location",
              itemId: "/admin/location/AddNew",
            },
            
            {
              title: "Location History",
              itemId: "/admin/location/List",
            },
          ],
        },
      ]


export default SideData

