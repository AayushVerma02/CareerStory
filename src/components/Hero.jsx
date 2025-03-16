import React from "react";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div
      className="hero-container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
        backgroundColor: "#244861",
        color: "#fff",
        textAlign: "center",
      }}
    >
        <Link to={"/career-story"}><button>Join Right Now</button></Link>
    </div>
  );
};

export default Hero;
