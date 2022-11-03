import React from "react";

const Footer = () => {
  const today = new Date();
  const currentYear = today.getFullYear();

  return (
    <footer className="bg-dark text-white py-4 fs-5 text-center">
      <p className="pt-3">Copyright &#169; {currentYear} The Bike Doctor.</p>
    </footer>
  );
};

export default Footer;
