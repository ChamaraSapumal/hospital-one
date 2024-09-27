// src/components/LoadingScreen.js
import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/loading-animation.json"; // Path to your downloaded Lottie JSON file
import "./LoadingScreen.css"; // Import custom styles

const LoadingScreen = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="loading-screen">
      <Lottie options={defaultOptions} height={400} width={400} />
      <cite>Loading your path to wellness... Thank you for your patience!</cite>
    </div>
  );
};

export default LoadingScreen;
