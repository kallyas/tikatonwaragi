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
          itemId: "admin/addMaterial",
          subNav: [
            {
              title: "Add New",
              itemId: "admin/material/AddNew",
            },
            {
              title: "List",
              itemId: "admin/material/Lists",
            },
            {
              title: "History",
              itemId: "/materials/History",
            },
          ],
        },
        {
          title: "Products",
          icon:<FontAwesomeIcon name="users" icon={faUser} />,
          itemId: "/products",
          
          subNav: [
            {
              title: "New Products",
              itemId: "/products/AddNew",
            },
            {
              title: "Products List",
              itemId: "/products/Lists",
            },
            {
              title: "Products History",
              itemId: "/products/History",
            },
          ],
        },
        {
          title: "Supplier",
          icon:<FontAwesomeIcon name="users" icon={faShuttleVan} />,
          itemId: "/suppliers",
          
          subNav: [
            {
              title: "New Products",
              itemId: "/Supplier/AddNew",
            },
            {
              title: "Supplier List",
              itemId: "/Supplier/Lists",
            },
                        
          ],
        },
        {
          title: "Sales",
          icon:<FontAwesomeIcon name="users" icon={faCashRegister} />,
          itemId: "/sales",
          subNav: [
            {
              title: "New Sales",
              itemId: "/saless/AddNew",
            },
            
            {
              title: "Sales History",
              itemId: "/sales/History",
            },
          ],
        },
        {
          title: "Location",
          icon:<FontAwesomeIcon name="users" icon={faLandmark} />,
          itemId: "/location",
          subNav: [
            {
              title: "New Location",
              itemId: "/location/AddNew",
            },
            
            {
              title: "Location History",
              itemId: "/location/List",
            },
          ],
        },
      ]


export default SideData

