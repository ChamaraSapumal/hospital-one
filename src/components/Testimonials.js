// src/components/Testimonials.js
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Testimonials.css"; // Import custom styles

const Testimonials = () => {
  return (
    <Container id="testimonials" className="my-5">
      <h2 className="text-center mb-4">What Our Patients Say</h2>
      <Row className="justify-content-center">
        <Col md={4}>
          <Card className="testimonial-card">
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>
                  "The staff was incredibly caring and attentive during my
                  stay."
                </p>
                <footer className="blockquote-footer">
                  <cite>- Patient A</cite>
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="testimonial-card">
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>
                  "I received excellent care and would recommend this hospital
                  to anyone."
                </p>
                <footer className="blockquote-footer">
                  <cite>- Patient B</cite>
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="testimonial-card">
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>
                  "The facilities were top-notch and made my recovery
                  comfortable."
                </p>
                <footer className="blockquote-footer">
                  <cite>- Patient C</cite>
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Testimonials;
