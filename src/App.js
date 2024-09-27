// src/App.js
import React, { useState, useEffect } from "react";
import NavigationBar from "./components/Navbar";
import Services from "./components/Services";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import LoadingScreen from "./components/LoadingScreen";
import "./styles.css"; // Import custom styles

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate asset loading with a timeout
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div>
          <NavigationBar />
          <Home />
          <Services />
          <About />
          <Testimonials />
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
