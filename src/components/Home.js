// src/components/Home.js
import React from "react";
import { useSpring, animated } from "react-spring";
import "./Home.css"; // Import custom styles

const Home = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <div className="hero-section">
      <div className="overlay"></div>
      <div className="hero-content">
        <animated.h1 style={props}>Welcome to Our Hospital</animated.h1>
        <p>Your health is our priority.</p>
        <a href="#contact" className="btn btn-primary btn-lg">
          Book an Appointment
        </a>
      </div>
    </div>
  );
};

export default Home;
