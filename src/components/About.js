// src/components/About.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css"; // Import custom styles

const About = () => {
  return (
    <div className="about-section">
      <Container id="about" className="my-5 text-center">
        <h2>About Us</h2>
        <p>
          We are dedicated to providing excellent healthcare services with
          compassion and professionalism.
        </p>
        <Row className="mt-4">
          <Col md={4}>
            <h4>Our Mission</h4>
            <p>
              To offer the highest quality medical care with a focus on patient
              satisfaction.
            </p>
          </Col>
          <Col md={4}>
            <h4>Our Vision</h4>
            <p>
              To be the leading healthcare provider in the region, known for our
              innovative practices.
            </p>
          </Col>
          <Col md={4}>
            <h4>Our Values</h4>
            <p>Integrity, compassion, and excellence in all we do.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
