import React from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import SearchForm from './SearchForm';
import { NavDropdown } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';


const NavBar = () => {
    const history = useHistory();
    const homeRoute = () => { history.push('/'); };
    return (

        <Navbar bg="light" expand="lg">
            <Navbar.Brand onClick={homeRoute} href="#home">Watch-Box</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">About Us</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <SearchForm />
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;
