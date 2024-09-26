// src/App.js
import React from "react";
import NavigationBar from "./components/Navbar";
import Services from "./components/Services";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import "./styles.css"; // Import custom styles

function App() {
  return (
    <>
      <NavigationBar />
      <Home />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
