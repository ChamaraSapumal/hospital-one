// src/components/Testimonials.js
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Testimonials.css"; // Import custom styles

// Import patient images
import mishtikaImage from "../assets/mishtika.png"; // Ensure the path is correct
import ravinduImage from "../assets/ravindu.jpg"; // Ensure the path is correct
import sapumalImage from "../assets/sapumal.png"; // Ensure the path is correct

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <Container id="testimonials" className="my-5">
        <h2 className="text-center mb-4 text-secondary">
          What Our Patients Say
        </h2>
        <Row className="justify-content-center">
          <Col md={4}>
            <Card className="testimonial-card">
              <Card.Body>
                <div className="avatar-container">
                  <img
                    src={mishtikaImage} // Use imported image
                    alt="Mishtika Primal"
                    className="avatar rounded-circle" // Use Bootstrap's rounded-circle class
                  />
                </div>
                <blockquote className="blockquote mb-0">
                  <p>
                    "The staff was incredibly caring and attentive during my
                    stay."
                  </p>
                  <footer className="blockquote-footer">
                    <cite>- Mishtika Primal</cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="testimonial-card">
              <Card.Body>
                <div className="avatar-container">
                  <img
                    src={ravinduImage} // Use imported image
                    alt="Ravindu Gimhan"
                    className="avatar rounded-circle" // Use Bootstrap's rounded-circle class
                  />
                </div>
                <blockquote className="blockquote mb-0">
                  <p>
                    "I received excellent care and would recommend this hospital
                    to anyone."
                  </p>
                  <footer className="blockquote-footer">
                    <cite>- Ravindu Gimhan</cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="testimonial-card">
              <Card.Body>
                <div className="avatar-container">
                  <img
                    src={sapumalImage} // Use imported image
                    alt="Heshan Buwaneka"
                    className="avatar rounded-circle" // Use Bootstrap's rounded-circle class
                  />
                </div>
                <blockquote className="blockquote mb-0">
                  <p>
                    "The facilities were top-notch and made my recovery
                    comfortable."
                  </p>
                  <footer className="blockquote-footer">
                    <cite>- Sapumal Cham</cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Testimonials;
