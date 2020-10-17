import React from 'react';
import logo from '../../../images/logos/logo.png'
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap';
import {Link} from "react-router-dom";
import './HeaderNavbar.css'
const HeaderNavbar = () => {
    return (
        <Navbar className="mx-auto" collapseOnSelect expand="lg" bg="" variant="dark">
         <Navbar.Brand href="#home">
            <img  className="head-logo" src={logo} width="200" alt=""/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav ">
           <Nav className="ml-auto mt-2 navlist">
            <Nav.Link><Link className="navlink" to="/home">Home</Link></Nav.Link>
            <Nav.Link><Link className="navlink" to="/home">Our Portfolio</Link></Nav.Link>
            <Nav.Link><Link className="navlink" to="/home">Our Team</Link></Nav.Link>
            <Nav.Link><Link className="navlink" to="/home">Contact Us</Link></Nav.Link>
            <Nav.Link><Link className="navlink navlogin" to="/login">Login</Link></Nav.Link>
         </Nav>
        </Navbar.Collapse>
 </Navbar>
    );
};

export default HeaderNavbar;