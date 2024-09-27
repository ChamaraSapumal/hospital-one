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
    const loadAssets = async () => {
      // Simulate asset loading with a timeout
      const timer = new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate loading time
      await timer;

      // Preload images or other assets here if needed
      const images = [
        "../assets/hero-background.jpg",
        "../assets/service1.jpg",
        "../assets/service2.jpg",
        "../assets/service3.jpg",
        "../assets/about-background.jpg",
        "../assets/testimonials-background.jpg",
        "../assets/mishtika.png",
        "../assets/ravindu.jpg",
        "../assets/sapumal.png",
        "../assets/contact-background.jpg",
      ];

      const preloadImages = images.map(
        (src) =>
          new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = resolve;
            img.onerror = resolve; // Resolve even on error to avoid blocking
          })
      );

      await Promise.all(preloadImages); // Wait for all images to load
      setLoading(false); // Set loading to false after assets are loaded
    };

    loadAssets();
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
