import React ,{useEffect, useState} from 'react'
import {
    Breadcrumb,
    Button,
    ButtonGroup,
    Row,
    Col,
    InputGroup,
    Form,
    Dropdown,
    Card,
    Table,
   
  } from "react-bootstrap";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import {
    faPlus,
    faCheck,
    faSearch,
    faSlidersH,
  } from "@fortawesome/free-solid-svg-icons";

const MaterialList = () => {
  // const material={
  //   invoiceNumber: invoiceNumber,
  //   supplier_id:supplier,
  //   category: category,
  //   item: item,
  //   quantity:quantity,
  //   unitPrice:unitPrice ,
  //   amount: amount
  // }

  const [materialData, setMaterialData] = useState([])

  useEffect(() => {
    const MaterialEndPoint = 'http://localhost:8000/tkMaterial/materials';
    fetch(MaterialEndPoint).then(res=>res.json()) 

    .then((material)  => {
                    setMaterialData( material)
                   console.log(material); 
                }) 
    }, [])
  return (

      <Row>
        <Col className="mb-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
            <div className="mb-4">
              <Breadcrumb
                className="d-none d-md-inline-block"
                listProps={{
                  className: "breadcrumb-dark breadcrumb-transparent",
                }}
              >
                
                <Breadcrumb.Item>Materials</Breadcrumb.Item>
                <Breadcrumb.Item active>Materials List</Breadcrumb.Item>
              </Breadcrumb>
                            
            </div>
            
            <div className="btn-toolbar mb-2 mb-md-2 mr-2">
              <Button variant="primary" size="sm" className="loginbtn">
                <FontAwesomeIcon icon={faPlus} className="me-2"/> Add New 
              </Button>
            </div>
          </div>
          <div className="table-settings mb-4">
            <Row className="justify-content-between align-items-center">
              <Col  lg={4} className="d-flex">
                <InputGroup className="me-lg-3" size="sm">
                  <InputGroup.Text>
                    <FontAwesomeIcon icon={faSearch} />
                  </InputGroup.Text>
                  <Form.Control type="text" placeholder="Search" />
                </InputGroup>
                <Form.Select className="w-25" size="sm">
                  <option defaultChecked>All</option>
                  <option value="1">Active</option>
                  <option value="2">Inactive</option>
                  <option value="3">Pending</option>
                  <option value="3">Canceled</option>
                </Form.Select>
              </Col>
              <Col xs={3} lg={8} className="text-end">
                <Dropdown as={ButtonGroup} className="me-2">
                  <Dropdown.Toggle
                    split
                    as={Button}
                    variant="link"
                    className="text-dark m-0 p-0"
                  >
                    <span className="icon icon-sm icon-gray">
                      <FontAwesomeIcon icon={faSlidersH} />
                    </span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="dropdown-menu-right">
                    <Dropdown.Item className="fw-bold text-dark">
                      Show
                    </Dropdown.Item>
                    <Dropdown.Item className="d-flex fw-bold">
                      10{" "}
                      <span className="icon icon-small ms-auto">
                        <FontAwesomeIcon icon={faCheck} />
                      </span>
                    </Dropdown.Item>
                    <Dropdown.Item className="fw-bold">20</Dropdown.Item>
                    <Dropdown.Item className="fw-bold">30</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                
              </Col>
            </Row>
          </div>
          <Card
            border="light"
            className="addCard"
          >
            <Card.Body>
              <Table hover className="user-table align-items-center">
                <thead>
                  <tr>
                  <th className="border-bottom">Category</th>
                    <th className="border-bottom">Item</th>
                    <th className="border-bottom">Quantity</th>
                    <th className="border-bottom">Unit Price</th>
                    <th className="border-bottom">Amount</th>
                    <th className="border-bottom">Supplier</th>
                  </tr>
                </thead>
                <tbody>                   
                        {/* map over the users array */}
        
                        {materialData.map((material) => (
          // display a <div> element with the user.name and user.type
          // parent element needs to have a unique key
          <tr key={material.invoiceNumber}>
            <td>{material.category}</td>
            <td>{material.item}</td>
            
                    
                    <td>{material.quantity}</td>
                    <td>{material.unitPrice}</td>
                    <td>{material.amount}</td>
                    <td>{material.supplier_id}</td>
          </tr>
        ))}
                        
                  
                   
                  
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
        
        </Row>
      
    
  )
}

export default MaterialList
