import React from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import SearchForm from './SearchForm';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth'


const NavBar = () => {
    const history = useHistory();
    const homeRoute = () => { history.push('/home'); };
    const aboutUsRoute = () => { history.push('/about/'); };
    const logoutRoute = () => { history.push('/logout/') };

    // Import firebase
    const firebase = useFirebaseApp();

    // Log out function
    const handleClick = () => {
        firebase.auth().signOut();
    }

    return (

        <Navbar bg="light" expand="lg">
            <Navbar.Brand onClick={homeRoute} href="#home">Watch-Box</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link onClick={homeRoute} href="#home">Home</Nav.Link>
                    <Nav.Link onClick={aboutUsRoute} href="#about">About Us</Nav.Link>
                    <Nav.Link onClick={logoutRoute, handleClick} href="/">Logout</Nav.Link>

                </Nav>
                <SearchForm />
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;
