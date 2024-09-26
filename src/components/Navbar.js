// src/components/Navbar.js
import React, { useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Navbar.css"; // Import custom styles

const NavigationBar = () => {
  const [navbar, setNavbar] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar className={`custom-navbar ${navbar ? "scrolled" : ""}`} expand="lg">
      <Navbar.Brand href="/">Mandakini Hospital</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#services">Services</Nav.Link>
          <Nav.Link href="#about">About Us</Nav.Link>
          <Nav.Link href="#testimonials">Testimonials</Nav.Link>
          <Nav.Link href="#contact">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
