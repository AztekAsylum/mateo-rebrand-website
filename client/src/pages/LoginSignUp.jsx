import { Button, Container, Form, Tab, Tabs, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
import { ADD_USER, LOGIN } from "../../utils/mutations";

const LoginSignUp = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const [addUser] = useMutation(ADD_USER);
  const [login] = useMutation(LOGIN);

  const handleAddFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };
  const handleLoginFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await login({
      variables: {
        email: formState.email,
        password: formState.password,
      },
    });
    const token = mutationResponse.data.login.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={10} className="mx-auto">
            <Tabs defaultActiveKey="login">
              <Tab eventKey="login" title="Login">
                <h2 className="pt-4 text-center">LOGIN</h2>
                <Form
                  className="mx-auto border-bottom p-4"
                  onSubmit={handleLoginFormSubmit}
                >
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder=""
                      name="email"
                      onChange={handleChange}
                    />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder=""
                      name="password"
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Button variant="dark" type="submit">
                    Submit
                  </Button>
                </Form>
              </Tab>
              <Tab eventKey="signUp" title="Sign Up">
                <h2 className="pt-4 text-center">SIGN UP</h2>
                <Form
                  onSubmit={handleAddFormSubmit}
                  className="mx-auto border-bottom p-4"
                >
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=""
                      name="firstName"
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=""
                      name="lastName"
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder=""
                      name="email"
                      onChange={handleChange}
                    />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder=""
                      name="password"
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Button variant="dark" type="submit">
                    Submit
                  </Button>
                </Form>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LoginSignUp;
