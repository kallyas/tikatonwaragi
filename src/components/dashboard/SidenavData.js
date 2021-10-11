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
              itemId: "/admin/material/Lists",
            },
            {
              title: "History",
              itemId: "admin/materials/History",
            },
          ],
        },
        {
          title: "Products",
          icon:<FontAwesomeIcon name="users" icon={faUser} />,
          itemId: "/admin/addProducts",
          
          subNav: [
            {
              title: "New Products",
              itemId: "/admin/products/AddNew",
            },
            {
              title: "Products List",
              itemId: "/admin/products/Lists",
            },
            {
              title: "Products History",
              itemId: "/admin/products/History",
            },
          ],
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
          title: "Sales",
          icon:<FontAwesomeIcon name="users" icon={faCashRegister} />,
          itemId: "/admin/sales",
          subNav: [
            {
              title: "New Sales",
              itemId: "/admin/saless/AddNew",
            },
            
            {
              title: "Sales History",
              itemId: "/admin/sales/History",
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

