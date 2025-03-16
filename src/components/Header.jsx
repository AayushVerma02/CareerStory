import React from "react";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <div id="header-cont" style={{background: "#a3e0ff"}}>
      <header className="header-wrapper" style={{width: "90%", marginLeft: "auto", marginRight: "auto"}}>
        <div className="header-container">
          <div className="header-logo">
            <img src={logo} alt="Career Guidance Logo" />
          </div>

          <nav className="header-nav">
            <ul className="nav-list">
              <li className="nav-item">
                <a href="#">Products</a>
              </li>
              <li className="nav-item">
                <a href="#">Prices</a>
              </li>
              <li className="nav-item">
                <a href="#">About Us</a>
              </li>
            </ul>
          </nav>
          <div className="header-buttons">
            <button
              className="signup"
              style={{ background: "#244861", color: "#fff" }}
            >
              Sign Up
            </button>
            <button
              className="login"
              style={{
                background: "none",
                color: "black",
                border: "1px solid #244681",
              }}
            >
              Login
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
