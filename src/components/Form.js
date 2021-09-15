import React from "react";
import { Container, Col, Row, Button, Form, Card } from "react-bootstrap";

const handleSubmit = (event) => {
  event.preventDefault();
  alert("you have submited form");
};

const SignUpForm = () => {
  return (
    <Container>
      <Row>
        <Col></Col>
        <Col xs={6}>
          <Card className="mx-auto my-2">
            <Card.Body>
              <Card.Title>
                <div className="mb-6">
                  <h3>SignUp Form</h3>
                </div>
              </Card.Title>
              <div className="mb-6">
                <Form onSubmit={handleSubmit}>
                  <div>
                    <Form.Text className="text-muted">
                      Please sign in here
                    </Form.Text>
                    <Form.Group className="mb-3 mt-6">
                      <Form.Control
                        type="text"
                        placeholder="Enter the first name"
                        name="firstName"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3 mt-6">
                      <Form.Control
                        type="text"
                        placeholder="Enter the Last name"
                        name="lastName"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3 mt-6">
                      <Form.Control
                        type="text"
                        placeholder="Enter a username"
                        name="username"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3 mt-6">
                      <Form.Control
                        type="text"
                        placeholder="Enter your phone"
                        name="Phone"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3 mt-6">
                      <Form.Select>
                        <option>Department</option>
                        <option>Production</option>
                        <option>Sales</option>
                        <option>Administrator</option>
                        <option></option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control
                        type="password"
                        placeholder="Enter the Password"
                        name="password"
                      />
                    </Form.Group>
                  </div>
                  <div className="d-grid gap-2">
                    <Button type="submit" variant="primary" name="submit">
                      Submit
                    </Button>
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
};

export default SignUpForm;
