import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap"


const Header = () => {
    return <Navbar className="navbar-color" variant="dark" expand="lg">
        <Container>
            <LinkContainer to='/'>
                <Navbar.Brand>Company Name</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <LinkContainer to="/">
                        <Nav.Link id="navlink"> Home </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="#about">
                        <Nav.Link id="navlink"> About Us </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="#gallery">
                        <Nav.Link id="navlink"> Gallery </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="#products">
                        <Nav.Link id="navlink"> Products </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="#contact">
                        <Nav.Link id="navlink"> Contact Us </Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
};

export default Header;