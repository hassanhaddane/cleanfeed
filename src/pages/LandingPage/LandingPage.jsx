import React from "react";
import { useNavigate } from "react-router-dom"; // Importer useNavigate
import cleanfeedLogo from "./cleanfeed-LOGO.png";
import "./style.css";

export const LandingPage = () => {
  const navigate = useNavigate(); // Initialiser le hook useNavigate

  const handleLoginClick = () => {
    navigate("/authentification"); // Rediriger vers la page d'authentification
  };

  return (
      <div className="landing-page">
        <div className="content">
          <div className="text-container">
            <p className="main-text">Protégez-vous en ligne avec CleanFeed : filtrez, signalez, et respirez.</p>
            <img className="cleanfeed-logo" alt="CleanFeed Logo" src={cleanfeedLogo} />
          </div>
          <button className="login-button" onClick={handleLoginClick}>
            Connexion <span className="arrow-icon">→</span>
          </button>
          <div className="footer-links">
            <span>Conditions d’utilisation | Confidentialité</span>
          </div>
          <div className="about-container">
            <span className="about">À propos</span>
            <span className="contact">Nous contacter</span>
            <span className="language">FR</span>
            <span className="globe-icon">🌐</span>
          </div>
        </div>
      </div>
  );
};
