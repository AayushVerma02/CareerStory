import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>CareerStory</h2>
        </div>
        
        <nav className="footer-nav">
          <ul>
          </ul>
        </nav>

        <div className="footer-socials">
          <a href="#" aria-label="Facebook">📘</a>
          <a href="#" aria-label="Twitter">🐦</a>
          <a href="#" aria-label="LinkedIn">🔗</a>
          <a href="#" aria-label="Instagram">📸</a>
        </div>

        <div className="footer-license">
          <p>© {new Date().getFullYear()} CareerStory. All rights reserved.</p>
          <p>
            Licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer">MIT License</a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;