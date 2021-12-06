import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './NavBar.css'
const NavBar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="" variant="dark" className="navbar">
                <Container>
                    <Navbar.Brand><NavLink to="/">Md Yeamin</NavLink></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link> */}

                        </Nav>
                        <Nav>
                            <Nav.Link>
                                <NavLink to="/home">Home</NavLink>
                            </Nav.Link>
                            <Nav.Link eventKey={2} >
                                <NavLink to="/about">
                                    About
                                </NavLink>
                            </Nav.Link>
                            <Nav.Link eventKey={2} >
                                <NavLink to="/services">
                                    Services
                                </NavLink>
                            </Nav.Link>
                            <Nav.Link eventKey={2} >
                                <NavLink to="/projects">
                                    Projects
                                </NavLink>
                            </Nav.Link>
                            <Nav.Link eventKey={2} >
                                <NavLink to="/contact">
                                    Contact
                                </NavLink>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;