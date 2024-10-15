import React from "react";
import { useNavigate } from "react-router-dom";
import harassementIllustration from "../../assets/harassment.png";
import fakeNews from "../../assets/fake-news.png";
import cyberbullying from "../../assets/sadness.png";
import "./style.css";

export const Dashboard = () => {
  const navigate = useNavigate();

  const handlepubsCyberbullying = () => {
    navigate("/pubsCyberbullying");
  };

  const handleFakeNewsPosts = () => {
    navigate("/pubsFakeNews");
  };

  return (
      <div className="mx-8">
        <header className="header">
          <img
              className="logo"
              src="../../assets/CleanFeed_LOGO.png"
              alt="CleanFeed Logo"
          />
          <div className="user-info">Léa. B</div>
        </header>

        <div className="grid grid-cols-4 gap-4">
          <main className="flex-col justify-center items-center col-span-3">
            <div className="card bg-base-100 image-full w-1/2 h-1/3 shadow-xl mb-16">
              <figure>
                <img
                    src={harassementIllustration}
                    alt="Illustration de harcellement"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Sensibilisation contre les fakes news et le cyberharcèlement
                </h2>
                <p>
                  Nous sommes ici pour soutenir et prendre les mesures appropriées
                  afin d'assurer un environnement numérique sûr et respectueux.
                </p>
                <div className="card-actions justify-end">
                  <button className="btn">En savoir plus</button>
                </div>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="card bg-base-100 image-full w-96 shadow-xl mb-16">
                <figure>
                  <img src={cyberbullying} alt="Illustration de harcellement" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Cyberbullying</h2>
                  <p>Dénoncer un harcellement</p>
                  <div className="card-actions justify-end">
                    <button
                        className="btn btn-error"
                        onClick={handlepubsCyberbullying}
                    >
                      Signaler
                    </button>
                  </div>
                </div>
              </div>

              <div className="card bg-base-100 image-full w-96 shadow-xl mb-16">
                <figure>
                  <img src={fakeNews} alt="Illustration de harcellement" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Fake news</h2>
                  <p>Dénoncer une fake news</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-error" onClick={handleFakeNewsPosts}>
                      Signaler
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <aside className="card bg-base-300 px-12 py-8">
            <h3 className="card-title mb-8">Mes récompenses</h3>
            <ul className="rewards-list">
              <li>10 signalements = 5% réduction chez Adidas</li>
              <li>25 signalements = 10% réduction chez UberEats</li>
              <li>50 signalements = 15% réduction chez AirFrance</li>
            </ul>
          </aside>
        </div>

        <footer className="footer">
          <button className="contact-btn">Nous contacter</button>
        </footer>
      </div>
  );
};