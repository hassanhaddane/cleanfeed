import React from "react";
import { useNavigate } from "react-router-dom";
import cleanfeedLogo from "./cleanfeed-LOGO.png";
import "./style.css";

export const LandingPage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/authentification");
  };

  return (
      <div className="landing-page">
        <header className="header">
          <img className="cleanfeed-logo" alt="CleanFeed Logo" src={cleanfeedLogo} />
          <div className="nav-links">
            <span className="about">À propos</span>
            <span className="contact">Nous contacter</span>
            <div className="language-selector">
              <span className="language">FR</span>
              <span className="globe-icon">M</span>
            </div>
          </div>
        </header>

        <main className="main-content">
          <div className="text-container">
            <h1 className="main-text">
              Protégez-vous en ligne<br />
              avec CleanFeed : filtrez,<br />
              signalez, et respirez.
            </h1>
          </div>
          <button className="login-button" onClick={handleLoginClick}>
            Connexion <span className="arrow-icon">→</span>
          </button>
        </main>

        <footer className="footer">
          <div className="footer-links">
            <span>Conditions d'utilisation | Confidentialité</span>
          </div>
        </footer>
      </div>
  );
};