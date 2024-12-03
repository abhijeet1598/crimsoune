import React from "react";

const Footer = () => {
  return (
    <footer className="bg-light text-customViolet py-6">
      <div className="max-w-4xl mx-auto text-center">
        <p>&copy; 2024 Crimsoune. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-yellow-600">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-yellow-600">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
