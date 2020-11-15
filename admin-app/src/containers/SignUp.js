import React from "react";
import Layout from "../components/Layout";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "../styles/SignUp.css";

function SignUp() {
    return (
        <div className="signup">
            <Layout>
                <Container>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form className="signup__form">
                            <Row>
                                <Col md={6}>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="First Name"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Last Name"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone
                                    else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check
                                    type="checkbox"
                                    label="Check me out"
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Container>
            </Layout>
        </div>
    );
}

export default SignUp;
