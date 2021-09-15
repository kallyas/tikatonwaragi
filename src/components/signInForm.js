import React from "react";
import { Container, Col, Row, Button, Form, Card } from "react-bootstrap";

export default function SignInForm() {
  //  handle submit
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("you have submited form");
  };

  return (
    <Container>
      <Row>
        <Col></Col>
        <Col xs={6}>
          <Card className="mx-auto my-2">
            <Card.Body>
              <Card.Title>
                <div className="mb-6">Login Form</div>
              </Card.Title>
              <div className="mb-6">
                <Form onSubmit={handleSubmit}>
                  <div>
                    <Form.Text className="text-muted">
                      Please sign in here
                    </Form.Text>
                    <Form.Group
                      className="mb-3 mt-6"
                      controlId="formBasicEmail"
                    >
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your username"
                        name="email"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter Password"
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
}
