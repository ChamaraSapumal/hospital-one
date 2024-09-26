// src/components/Contact.js
import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import "./Contact.css"; // Import custom styles

const Contact = () => {
  return (
    <div className="contact-section">
      <Container id="contact" className="my-5">
        <h2 className="text-center">Contact Us</h2>
        <Form className="w-75 mx-auto">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Your message here..."
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="btn-submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Contact;
