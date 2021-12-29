import React from 'react'
import {Row,Col} from "react-bootstrap";
import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  
  faUser,
 
} from "@fortawesome/free-solid-svg-icons";
// import {useHistory,useLocation} from "react-router-dom";
// Import components here


const Adminstrator = ({history, location}) => {
  // let history = useHistory();
  // let location= useLocation();
  return (
 
    <div >
      <div className='side-menu'>
      <Row>
        <Col lg={2} className="d-flex">
        <h3>Tikaton</h3>
        </Col>
      </Row>
      <Row>
        <Col lg={2} className="d-flex">
        <Navigation
        // you can use your own router's api to get pathname
        // activeItemId="'/materials/Lists'"
        // onSelect={({ itemId }) => {
        //   // maybe push to the route
        // }}

        // Add paths
        activeItemId={location.title}
        onChange={({event, item}) => {
          // prevent page reload
          event.preventDefault();
          history.push(item.itemId);
        }}
        items={[
          {
            title: "Dashboard",
            itemId: "/dash",
            // you can use your own custom Icon component as well
            // icon is optional
            elemBefore: () => <FontAwesomeIcon name="inbox" icon={faHome} />,
          },
          {
            title: "Material",
            itemId: "/material",
            elemBefore: () => <FontAwesomeIcon name="users" icon={faUser} />,
            subNav: [
              {
                title: "Add",
                itemId: "/materials/AddNew",
              },
              {
                title: "List",
                itemId: "/materials/Lists",
              },
              {
                title: "History",
                itemId: "/materials/History",
              },
            ],
          },
          {
            title: "Products",
            itemId: "/products",
            elemBefore: () => <FontAwesomeIcon name="users" icon={faUser} />,
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
            itemId: "/suppliers",
            elemBefore: () => <FontAwesomeIcon name="users" icon={faUser} />,
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
        ]}
      />
        </Col>
        

      </Row>
      </div>

    </div>
  );
}

export default Adminstrator
