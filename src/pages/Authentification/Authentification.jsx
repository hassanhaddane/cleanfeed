import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import cleanfeedLogo from './cleanfeed-LOGO.png';
import './style.css';

export const Authentification = () => {
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form validation or API calls for login here
        navigate('/dashboard');
    };

    return (
        <div className="authentification">
            <header className="header">
                <div className="language-selector">FR</div>
            </header>

            <main className="main-content">
                <img className="cleanfeed-logo" alt="Cleanfeed LOGO" src={cleanfeedLogo}/>
                <form onSubmit={handleSubmit} className="form">
                    <input type="text" name="nom" placeholder="Nom" value={formData.nom} onChange={handleChange}/>
                    <input type="text" name="prenom" placeholder="Prénom" value={formData.prenom}
                           onChange={handleChange}/>
                    <input type="email" name="email" placeholder="Adresse mail" value={formData.email}
                           onChange={handleChange}/>
                    <input type="password" name="password" placeholder="Mot de passe" value={formData.password}
                           onChange={handleChange}/>
                    <button type="submit" className="login-button">
                        Connexion <span className="arrow-icon">→</span>
                    </button>
                </form>
            </main>

            <footer className="footer">
                <div className="footer-text">Conditions d'utilisation | Confidentialité</div>
            </footer>
        </div>
    );
};