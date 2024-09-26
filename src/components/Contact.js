// // src/components/Contact.js
// import React from "react";
// import { Container, Form, Button } from "react-bootstrap";
// import "./Contact.css"; // Import custom styles

// const Contact = () => {
//   return (
//     <div className="contact-section">
//       <Container id="contact" className="my-5">
//         <h2 className="text-center">Contact Us</h2>
//         <Form className="w-75 mx-auto">
//           <Form.Group controlId="formBasicEmail">
//             <Form.Label>Email address</Form.Label>
//             <Form.Control type="email" placeholder="Enter email" />
//           </Form.Group>

//           <Form.Group controlId="formBasicMessage">
//             <Form.Label>Message</Form.Label>
//             <Form.Control
//               as="textarea"
//               rows={5}
//               placeholder="Your message here..."
//             />
//           </Form.Group>

//           <Button variant="primary" type="submit" className="btn-submit">
//             Submit
//           </Button>
//         </Form>
//       </Container>
//     </div>
//   );
// };

// export default Contact;

// src/components/Contact.js
import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "./Contact.css"; // Import custom styles

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // Replace 'YOUR_ACCESS_KEY_HERE' with your actual access key from Web3Forms
    formData.append("access_key", "6fd71e52-5c8f-4f7d-ade1-84c2cbbda75a");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset(); // Reset the form after successful submission
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("An error occurred. Please try again.");
    }
  };

  return (
    <div className="contact-section">
      <Container id="contact" className="my-5">
        <h2 className="text-center">Contact Us</h2>
        <Form className="w-75 mx-auto" onSubmit={onSubmit}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              rows={5}
              placeholder="Your message here..."
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="btn-submit">
            Submit
          </Button>
        </Form>
        {result && <div className="mt-3 text-center">{result}</div>}{" "}
        {/* Display submission result */}
      </Container>
    </div>
  );
};

export default Contact;
