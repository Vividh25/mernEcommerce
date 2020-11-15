import React from "react";
import {
    Navbar,
    Nav,
    Form,
    FormControl,
    Button,
    Container,
} from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <NavLink to="/" className="navbar__head">
                        Admin Dashboard
                    </NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" />
                    {/* <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav> */}
                    {/* <Form inline>
                    <FormControl
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2"
                    />
                    <Button variant="outline-primary">Search</Button>
                </Form> */}
                    <Nav>
                        <NavLink to="/signin" className="signin__link">
                            SignIn
                        </NavLink>
                        <NavLink to="/signup" className="signup__link">
                            SignUp
                        </NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;
