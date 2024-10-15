import React, { useState } from 'react';
import cleanfeedLogo from './cleanfeed-LOGO.png';
import './style.css';

export const Authentification = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="authentification">
      <div className="div">
        <img className="cleanfeed-LOGO" alt="Cleanfeed LOGO" src={cleanfeedLogo} />
        <form onSubmit={handleSubmit} className="form">
          <input type="text" name="nom" placeholder="Nom" value={formData.nom} onChange={handleChange} />
          <input type="text" name="prenom" placeholder="Prénom" value={formData.prenom} onChange={handleChange} />
          <input type="email" name="email" placeholder="Adresse mail" value={formData.email} onChange={handleChange} />
          <input type="password" name="password" placeholder="Mot de passe" value={formData.password} onChange={handleChange} />
          <button type="submit">Connexion</button>
        </form>
        <div className="language-selector">
          <span>FR</span>
        </div>
        <div className="footer-text">Conditions d’utilisation | Confidentialité</div>
      </div>
    </div>
  );
};