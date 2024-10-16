import React from "react";
import { useNavigate } from "react-router-dom";
import { User } from "lucide-react";
import cleanfeedLogo from "../../assets/cleanfeed-LOGO.png";
import harassementIllustration from "../../assets/harassment.png";
import fakeNews from "../../assets/fake-news.png";
import cyberbullying from "../../assets/sadness.png";
import uberEatsLogo from "../../assets/ubereats-logo.jpg"; // Assurez-vous d'avoir ce fichier
import adidasLogo from "../../assets/adidas-logo.png"; // Assurez-vous d'avoir ce fichier
import airFranceLogo from "../../assets/airfrance-logo.png"; // Assurez-vous d'avoir ce fichier
import "./Dashboard.css";

export const Dashboard = () => {
  const navigate = useNavigate();

  const handlepubsCyberbullying = () => {
    navigate("/pubsCyberbullying");
  };

  const handleFakeNewsPosts = () => {
    navigate("/pubsFakeNews");
  };

  return (
      <div className="dashboard">
        <div className="main-container">
          <header className="header">
            <img
                className="logo"
                src={cleanfeedLogo}
                alt="CleanFeed Logo"
            />
            <div className="user-info">
              <span>Nous contacter</span>
              <User size={24} />
              <span>Léa.B</span>
            </div>
          </header>

          <main className="main-content">
            <div className="awareness-section">
              <h2>L'importance de la sensibilisation au cyber harcèlement.</h2>
              <p>
                Nous sommes ici pour soutenir et prendre les mesures appropriées
                afin d'assurer un environnement professionnel sûr, respectueux.
              </p>
              <button className="learn-more-btn">En savoir +</button>
              <img
                  src={harassementIllustration}
                  alt="Illustration de harcèlement"
                  className="harassment-illustration"
              />
            </div>

            <div className="issues-container">
              <div className="issue-card">
                <h2>Cyberbullying</h2>
                <img src={cyberbullying} alt="Illustration de cyberbullying" />
                <button className="report-btn" onClick={handlepubsCyberbullying}>
                  Signaler
                </button>
              </div>

              <div className="issue-card">
                <h2>Fake news</h2>
                <img src={fakeNews} alt="Illustration de fake news" />
                <button className="report-btn" onClick={handleFakeNewsPosts}>
                  Signaler
                </button>
              </div>
            </div>
          </main>
        </div>

        <aside className="sidebar">
          <h3>Mes récompenses</h3>
          <div className="reward-item">
            <img src={uberEatsLogo} alt="UberEats Logo" className="reward-logo" />
            <p>Vous avez débloqué une promotion de 5 % chez UberEats</p>
          </div>
          <div className="reward-item">
            <img src={adidasLogo} alt="Adidas Logo" className="reward-logo" />
            <p>Vous avez débloqué une promotion de 10 % chez Adidas</p>
          </div>
          <div className="reward-item">
            <img src={airFranceLogo} alt="Air France Logo" className="reward-logo" />
            <p>Vous avez débloqué une promotion de 20 % chez Air France</p>
          </div>
        </aside>
      </div>
  );
};