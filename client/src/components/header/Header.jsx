import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/" style={{ color: "gold" }}>
                    <FontAwesomeIcon icon={faVideoSlash} />
                    Gold
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                    >
                        <NavLink to="/" className="nav-link">
                            Home
                        </NavLink>
                        <NavLink to="/watchList" className="nav-link">
                            Watch List
                        </NavLink>
                    </Nav>
                    <Button variant="outline-info" className="me-2">
                        Login
                    </Button>
                    <Button variant="outline-info">Register</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
