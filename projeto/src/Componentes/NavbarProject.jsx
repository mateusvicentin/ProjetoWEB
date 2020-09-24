import React, { Component } from 'react';
import {Nav, Navbar} from 'react-bootstrap';

class NavbarProject extends Component {
    render() {
        return (
            <header>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#">Projeto</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/usuarios">Users</Nav.Link>
             </Nav>
  </Navbar>   
            </header>
        );
    }
}

export default NavbarProject;