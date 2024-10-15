import React from 'react';
import './style.css';

export const Dashboard = () => {
    return (
        <div className="dashboard">
            <header className="header">
                <img className="logo" src="/path-to-cleanfeed-logo.png" alt="CleanFeed Logo" />
                <div className="user-info">Léa.B</div>
            </header>

            <main className="main-content">
                <section className="awareness-section">
                    <h2>Sensibilisation contre les fakes news et le cyberharcèlement</h2>
                    <p>L'importance de la sensibilisation au cyber harcèlement.</p>
                    <p>Nous sommes ici pour soutenir et prendre les mesures appropriées afin d'assurer un environnement numérique sûr et respectueux.</p>
                    <button className="learn-more-btn">En savoir +</button>
                </section>

                <div className="issues-container">
                    <section className="issue-section cyberbullying">
                        <h3>Cyberbullying</h3>
                        <img src="/path-to-cyberbullying-image.png" alt="Cyberbullying" />
                        <button className="report-btn">Signaler</button>
                    </section>

                    <section className="issue-section fake-news">
                        <h3>Fake news</h3>
                        <img src="/path-to-fake-news-image.png" alt="Fake News" />
                        <button className="report-btn">Signaler</button>
                    </section>
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