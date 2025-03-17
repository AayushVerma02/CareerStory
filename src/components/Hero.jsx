import React, { useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = (e) => {
    e.preventDefault();
    setShowModal(true);
    
    // Hide modal and navigate after 3 seconds
    setTimeout(() => {
      setShowModal(false);
      window.location.href = "https://careerstory.onrender.com";
    }, 4000);
  };

  return (
    <div
      className="hero-container"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
        backgroundColor: "#244861",
        color: "#fff",
        textAlign: "center",
        padding: "0 20px",
        backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(36, 72, 97, 0.85)",
          zIndex: 1,
        }}
      ></div>
      
      <div
        style={{
          maxWidth: "800px",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <h1
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: "3.5rem",
            fontWeight: "700",
            marginBottom: "1rem",
            lineHeight: "1.2",
            textShadow: "0 2px 4px rgba(0,0,0,0.3)",
          }}
        >
          Navigate Your Career Journey With AI-Powered Guidance
        </h1>
        
        <p
          style={{
            fontSize: "1.25rem",
            lineHeight: "1.6",
            marginBottom: "2rem",
            color: "#A3E0FF",
            fontWeight: "500",
          }}
        >
          Unlock personalized career insights, explore potential paths, and make confident decisions with our advanced AI career advisor.
        </p>
        
        <div className="button-container">
          <button
            onClick={handleButtonClick}
            style={{
              backgroundColor: "#A3E0FF",
              color: "#244861",
              padding: "1rem 2rem",
              fontSize: "1.1rem",
              fontWeight: "600",
              border: "none",
              borderRadius: "50px",
              cursor: "pointer",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              transition: "all 0.3s ease",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#7DCEF0";
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 6px 12px rgba(0,0,0,0.25)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "#A3E0FF";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
            }}
          >
            Get AI Career Advice for Free
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ marginLeft: "10px" }}
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
        
        {/* Modal Alert */}
        {showModal && (
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
              zIndex: 1000,
              maxWidth: "400px",
              width: "90%",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "15px",
            }}
          >
            {/* <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                backgroundColor: "#A3E0FF",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#244861"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
            </div> */}
            <h3 style={{ color: "#244861", fontFamily: "'Nunito', sans-serif", margin: "0" }}>Note</h3>
            <p style={{ color: "#555", margin: "0" }}>
            You may have to wait while our backend server starts <br/><br/>
            Estimated time: 10 secs
            </p>
            <div
              style={{
                width: "100%",
                height: "4px",
                backgroundColor: "#eee",
                borderRadius: "2px",
                overflow: "hidden",
                marginTop: "5px",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: "30%",
                  backgroundColor: "#A3E0FF",
                  borderRadius: "2px",
                  animation: "progress 3s linear forwards",
                }}
              ></div>
            </div>
            <style>
              {`
                @keyframes progress {
                  0% { width: 0%; }
                  100% { width: 100%; }
                }
              `}
            </style>
          </div>
        )}
        
        {/* Overlay for modal */}
        {showModal && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0,0,0,0.5)",
              zIndex: 999,
            }}
          ></div>
        )}
        
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
            gap: "2rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#A3E0FF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span>Personalized Advice</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#A3E0FF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span>AI-Powered Insights</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#A3E0FF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span>100% Free</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
