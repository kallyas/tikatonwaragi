import React from 'react'
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

const adminDash = () => {
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
              <Button variant="primary" size="sm">
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
            className="table-wrapper table-responsive shadow-sm"
          >
            <Card.Body>
              <Table hover className="user-table align-items-center">
                <thead>
                  <tr>
                    <th className="border-bottom">Name</th>
                    <th className="border-bottom">Email</th>
                    <th className="border-bottom">Position</th>
                    <th className="border-bottom">User Created at</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Card.Link className="d-flex align-items-center">
                        {/* <Image className="user-avatar rounded-circle me-3" /> */}
                        <div className="d-block">
                          <span className="fw-bold">Thomas Shelby</span>
                        </div>
                      </Card.Link>
                    </td>
                    <td>thomas@peaky-blinders.com</td>
                    <td>Boss</td>
                    <td>January 20, 1921</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
        
        </Row>
      
    
  )
}

export default adminDash
