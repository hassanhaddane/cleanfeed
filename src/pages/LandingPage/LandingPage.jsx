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

        <main className="">
          <div className="flex-col">
            <div className="flex items-baseline">
          <img className="" alt="CleanFeed Logo" src={cleanfeedLogo} />
            <h1 className="text-3xl font-bold">
              Protégez-vous en ligne<br />
              avec CleanFeed : filtrez,<br />
              signalez, et respirez.
            </h1>
            </div>
          </div>
          <button className="flex gap-2 items-baseline px-8 py-4 bg-blue-500 text-white rounded-full" onClick={handleLoginClick}>
            Connexion <span>→</span>
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