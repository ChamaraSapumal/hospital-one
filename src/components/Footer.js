// src/components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="text-center py-4">
      &copy; {new Date().getFullYear()} Hospital Name. All rights reserved.
    </footer>
  );
};

export default Footer;
