import React from "react";
import harassementIllustration from "./harassment.png";
import fakeNews from "./fake-news.png";
import cyberbullying from "./sadness.png";
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
    <div className="dashboard">
      <header className="header">
        <img
          className="logo"
          src="/path-to-cleanfeed-logo.png"
          alt="CleanFeed Logo"
        />
        <div className="user-info">Léa.B</div>
      </header>

      <main className="main-content">
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
            <div class="card-actions justify-end">
              <button class="btn">En savoir plus</button>
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
              <div class="card-actions justify-end">
                <button class="btn btn-error" onClick={handlepubsCyberbullying}>Signaler</button>
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
              <div class="card-actions justify-end">
                <button class="btn btn-error" onClick={handleFakeNewsPosts}>Signaler</button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <aside className="sidebar">
        <h3>Mes récompenses</h3>
        <ul className="rewards-list">
          <li>10 signalements = 5% réduction chez Adidas</li>
          <li>25 signalements = 10% réduction chez UberEats</li>
          <li>50 signalements = 15% réduction chez AirFrance</li>
        </ul>
      </aside>

      <footer className="footer">
        <button className="contact-btn">Nous contacter</button>
      </footer>
    </div>
  );
};
