import React, {useState} from 'react';
import { Navbar, Nav, Form, Button, Container } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';

function AppNavbar() {
 
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#">CodeHub</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#"><i className="bi bi-filetype-html" style={{color:'orange'}}></i>Html</Nav.Link>
            <Nav.Link href="#"><i className="bi bi-filetype-css" style={{color:'blue'}}></i>Css</Nav.Link>
            <Nav.Link href="#"><i className="bi bi-filetype-js" style={{color:'yellow'}}></i>JavaScript</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;

