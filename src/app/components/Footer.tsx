import React from "react";

const Footer = () => (
  <footer className="bg-light p-3 text-center" data-testid="footer">
    <div className="logo" data-testid="footer-logo" />
    <p data-testid="footer-text">
      &copy; {new Date().getFullYear()} Charlotte Hornets Stats Dashboard. Coded
      with Care by{" "}
      <a href="https://github.com/CRUX56" target="_blank">
        Dathan Cruz
      </a>
    </p>
  </footer>
);

export default Footer;
