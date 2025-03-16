import React from "react";

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: "#244861", color: "#fff" }}>
      <div className="footer-container">
        <div className="footer-logo">
          <h2 style={{ color: "#A3E0FF" }}>CareerStory</h2>
          <p style={{ marginTop: "0.5rem", fontSize: "0.9rem", maxWidth: "400px", margin: "0.5rem auto" }}>
            This Project is a part of our submission for Execute 4.0 Hackathon - Team Underflow Bytes
          </p>
        </div>
        
        <nav className="footer-nav">
          <ul style={{ justifyContent: "center" }}>
            <li><a href="/about">About Us</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-of-service">Terms of Service</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </nav>

        <div className="footer-socials">

          <a href="#" aria-label="Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#A3E0FF" }}>
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
          </a>
          <a href="https://linkedin.com/in/divyanshxcode" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#A3E0FF" }}>
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a href="#" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#A3E0FF" }}>
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
        </div>

        <div className="footer-license">
          <p>© {new Date().getFullYear()} CareerStory. All rights reserved.</p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", margin: "0.5rem 0", fontSize: "0.85rem" }}>
            <a href="/cookies" style={{ color: "#A3E0FF" }}>Cookie Policy</a>
            <span style={{ color: "#6c8ea3" }}>|</span>
            <a href="/accessibility" style={{ color: "#A3E0FF" }}>Accessibility</a>
            <span style={{ color: "#6c8ea3" }}>|</span>
            <a href="/sitemap" style={{ color: "#A3E0FF" }}>Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
