import React, { useState } from "react";
import {
  Container,
  Col,
  Row,
  Button,
  Form,
  Card,
  InputGroup,
  Alert,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import Navbar from '../components/Navbar'
import SignUpForm from '../components/signInForm';

function SignIn() {
      const [username, setUsername] = useState("");
    const [user_password, setPassword] = useState("");


    const userDetails = {
      username: username,
  
      user_password: user_password,
    };
  
    let history = useHistory()
    
    return (
        <div className='home-page'>
            <Navbar/>
            <h1>Sign In</h1>
            {/* <SignUpForm/> */}

            <div className='home-top'>
          Top
          <Card className="mx-auto my-2">
            <Card.Body>
              <Card.Title>
                <div className="mb-6">Login Form</div>
              </Card.Title>
              <div className="mb-6">
                <Form >
                  <div>
                    <Form.Text className="text-muted">
                      Please sign in here
                    </Form.Text>
                    <InputGroup
                      className="mb-3 mt-6"
                     
                    >
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUser} />
                      </InputGroup.Text>
                      <Form.Control
                        type="text"
                        placeholder="Enter your username"
                        name="username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                      />
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faLock} />
                      </InputGroup.Text>
                      <Form.Control
                        type="password"
                        placeholder="Enter Password"
                        name="user_password"
                        value={user_password}
                        onChange={(event) => setPassword(event.target.value)}
                      />
                    </InputGroup>
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
        
            </div>
        </div>
    )
}

export default SignIn;