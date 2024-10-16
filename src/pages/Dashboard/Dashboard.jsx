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
            <div className="card shadow-xl mb-16 overflow-hidden awareness-section">
              <div className="card-body text-purple-900 p-8 relative">
                <h2 className="card-title text-2xl mb-2">
                  L'importance de la sensibilisation au cyber harcèlement.
                </h2>
                <p className="mb-4 max-w-[60%]">
                  Nous sommes ici pour soutenir et prendre les mesures appropriées
                  afin d'assurer un environnement professionnel sûr, respectueux.
                </p>
                <button className="btn btn-neutral btn-sm">En savoir +</button>
                <img
                    src={harassementIllustration}
                    alt="Illustration de harcèlement"
                    className="absolute right-0 bottom-0 w-1/3 h-auto"
                />
              </div>
            </div>

            <div className="flex gap-8">
              <div className="card bg-base-100 shadow-xl mb-16 flex-1 overflow-hidden">
                <figure className="relative">
                  <img src={cyberbullying} alt="Illustration de cyberbullying" className="w-full h-48 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                  <h2 className="card-title text-white absolute bottom-4 left-4">Cyberbullying</h2>
                </figure>
                <div className="card-body p-4">
                  <button
                      className="btn btn-error w-full"
                      onClick={handlepubsCyberbullying}
                  >
                    Signaler
                  </button>
                </div>
              </div>

              <div className="card bg-base-100 shadow-xl mb-16 flex-1 overflow-hidden">
                <figure className="relative">
                  <img src={fakeNews} alt="Illustration de fake news" className="w-full h-48 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                  <h2 className="card-title text-white absolute bottom-4 left-4">Fake news</h2>
                </figure>
                <div className="card-body p-4">
                  <button className="btn btn-error w-full" onClick={handleFakeNewsPosts}>
                    Signaler
                  </button>
                </div>
              </div>
            </div>
          </main>
          <aside className="card bg-base-300 px-12 py-8">
            <h3 className="card-title mb-8">Mes récompenses</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="text-2xl mr-3">👟</span>
                <span>10 signalements = 5% réduction chez Adidas</span>
              </li>
              <li className="flex items-center">
                <span className="text-2xl mr-3">🍔</span>
                <span>25 signalements = 10% réduction chez UberEats</span>
              </li>
              <li className="flex items-center">
                <span className="text-2xl mr-3">✈️</span>
                <span>50 signalements = 15% réduction chez AirFrance</span>
              </li>
            </ul>
            <button className="btn btn-primary mt-8 w-full">
              Voir toutes les récompenses
            </button>
          </aside>
        </div>

        <footer className="footer">
          <button className="contact-btn">Nous contacter</button>
        </footer>
      </div>
  );
};