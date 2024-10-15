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
        <img
          className="h-32 w-32"
          alt="CleanFeed Logo"
          src={cleanfeedLogo}
        />
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
          <div className="flex justify-center items-center flex-row-reverse">
            <img className="" alt="CleanFeed Logo" src={cleanfeedLogo} />
            <h1 className="text-4xl font-bold">
              Protégez-vous en ligne
              <br />
              avec CleanFeed : filtrez,
              <br />
              signalez, et respirez.
            </h1>
          </div>
        </div>
        <div className="flex justify-center pb-32">
        <button
          className="flex gap-2 items-baseline px-8 py-4 bg-blue-500 text-white rounded-full font-bold text-lg"
          onClick={handleLoginClick}
        >
          Connexion <span>→</span>
        </button>
        </div>
      </main>

      <footer className="footer">
        <div className="footer-links">
          <span>Conditions d'utilisation | Confidentialité</span>
        </div>
      </footer>
    </div>
  );
};
