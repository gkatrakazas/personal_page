import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../media/personal_logo.png'
import "../css/Navigationbar.css";

import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { AiOutlineHome } from 'react-icons/ai'
import { FaLinkedin, FaGithub } from 'react-icons/fa'



const NavigationBar = () => {
  const location = useLocation();
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(location.pathname ==='/' );
  }, [location]);



  return (
    <Navbar expand="lg">
      <Container className="nav-container d-flex justify-content-center">
        <Navbar.Brand href="/" ><img src={logo} width="250"alt="Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="container-fluid d-flex justify-content-center">
            <Nav.Link href="/" id={'logo'} className={`${active ? 'active-link' : ''}`} >< AiOutlineHome size={30}/></Nav.Link>
            <Nav.Link href="#">About me</Nav.Link>
            <Nav.Link href="#">Reference</Nav.Link>
          </Nav>
       

        <Nav className="ml-auto">
        <Nav.Link href="https://www.linkedin.com/in/gkatrakazas/" target='_black'><FaLinkedin size={30} /></Nav.Link>
          <Nav.Link href="https://github.com/gregory1996" target='_black'><FaGithub size={30} /></Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Container>

    </Navbar>
  );
}

export default NavigationBar;