// src/components/Services.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import service1 from "../assets/service1.jpg"; // Add your service images here
import service2 from "../assets/service2.jpg";
import service3 from "../assets/service3.jpg";

const Services = () => {
  return (
    <Container id="services" className="my-5">
      <h2 className="text-center">Our Services</h2>
      <Row className="text-center">
        <Col md={4}>
          <img
            src={service1}
            alt="Service 1"
            className="img-fluid rounded mb-3"
          />
          <h4>Emergency Care</h4>
          <p>24/7 emergency services to ensure you get the care you need.</p>
        </Col>
        <Col md={4}>
          <img
            src={service2}
            alt="Service 2"
            className="img-fluid rounded mb-3"
          />
          <h4>Outpatient Services</h4>
          <p>Comprehensive outpatient care for various medical needs.</p>
        </Col>
        <Col md={4}>
          <img
            src={service3}
            alt="Service 3"
            className="img-fluid rounded mb-3"
          />
          <h4>Inpatient Care</h4>
          <p>Comfortable and supportive inpatient care for recovery.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
