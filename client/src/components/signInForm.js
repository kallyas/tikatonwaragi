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

export default function SignInForm() {
  //  handle submit

  const [username, setUsername] = useState("");

  const [user_password, setPassword] = useState("");


  const userDetails = {
    username: username,

    user_password: user_password,
  };

  let history = useHistory();

  const validate_input = () => {
    // const { mobilenumber, password } = state
    if (username === "") {
      Alert("Please Enter Mobile Number");
      return false;
    } else if (user_password === "") {
      Alert("Please Enter Password");
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (validate_input()) {
      // // eslint-disable-next-line no-undef
      const userEndPoint = "http://localhost:8000/tkUser/users";

      //  CookieManager.clearAll(true)

      await fetch(userEndPoint, {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
      })
        .then((res) => {
          // const cookie = JSON.stringify(res.headers.get('set-cookie'))
          // const newCookie = AsyncStorage.setItem('Cookie', cookie)
          // console.log(cookie)
          // console.log(newCookie)
          return res.json();
        })

        .then((res) => {
          if (res && res.status === "success") {
            history.push("/admin");
          } else if (res && res.status === "error") {
            Alert.alert(
              "Notification",
              "Please enter a valid Mobile Number or Password",
              [
                {
                  text: "OK",
                  onPress: () => history.push("/admin"),
                },
              ],
              { cancelable: false }
            );
          }
        });
    }
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
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
