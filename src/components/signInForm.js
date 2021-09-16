import React from "react";
import { Container, Col, Row, Button, Form, Card, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLock, faUser,} from "@fortawesome/free-solid-svg-icons";


export default function SignInForm() {
  //  handle submit
  const handleSubmit = event => {
    event.preventDefault();
    alert("you have submited form")
  }

  return (
    <Container>
      <Row>

        <Col></Col>
        <Col xs={6}>
          <Card className="mx-auto my-2">
            <Card.Body>
              <Card.Title><div className="mb-6">Login Form</div></Card.Title>
              <div className="mb-6">

                <Form onSubmit={handleSubmit}>
                  <div>
                  <Form.Text className="text-muted">
                        Please sign in here
                      </Form.Text>
                    <InputGroup className="mb-3 mt-6" controlId="formBasicEmail">
                    <InputGroup.Text><FontAwesomeIcon icon={faUser} /></InputGroup.Text>
                      <Form.Control type="email" placeholder="Enter your username" name="email"/>
                      
                    </InputGroup>

                    <InputGroup className="mb-3" controlId="formBasicPassword">
                    <InputGroup.Text><FontAwesomeIcon icon={faLock} /></InputGroup.Text>
                      <Form.Control type="password" placeholder="Enter Password" name="password"/>
                    </InputGroup>
                   
                  </div>
                  <div className="d-grid gap-2">
                    <Button type="submit" variant="primary" name="submit">Submit</Button>
                  </div>
                </Form>
              </div>
            </Card.Body>
          </Card>


        </Col>
        <Col></Col>

      </Row>
    </Container>

  );
}
