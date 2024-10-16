import React, { useState } from 'react';
import { User } from "lucide-react";
import './PageCyberbullying.css';

// Import images using require
const images = {
  cleanfeedLogo: require('../../assets/cleanfeed-LOGO.png'),
  snapchatIcon: require('../../assets/Snapchat.png'),
  twitterIcon: require('../../assets/twitter.png'),
  facebookIcon: require('../../assets/facebook.png'),
  instagramIcon: require('../../assets/instagram.png'),
};

export const CyberbullyingPage = () => {
  const [formData, setFormData] = useState({
    socialNetwork: '',
    postLink: '',
    userAccount: '',
    description: '',
    screenshot: null
  });

  const [preview, setPreview] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prevState => ({
      ...prevState,
      screenshot: file
    }));
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
      <div className="cyberbullying-page">
        <header className="header">
          <img
              className="logo"
              src={images.cleanfeedLogo}
              alt="CleanFeed Logo"
          />
          <div className="user-info">
            <span>Nous contacter</span>
            <User size={24} />
            <span>Léa.B</span>
          </div>
        </header>

        <main className="main-content">
          <form onSubmit={handleSubmit} className="form">
            <h1 className="myh1">Signalement de Cyberbullying</h1>

            <select
                name="socialNetwork"
                value={formData.socialNetwork}
                onChange={handleInputChange}
                required
            >
              <option value="">Sélectionnez un réseau social</option>
              <option value="snapchat">Snapchat</option>
              <option value="twitter">Twitter</option>
              <option value="facebook">Facebook</option>
              <option value="instagram">Instagram</option>
            </select>

            <input
                type="url"
                name="postLink"
                placeholder="Lien du post"
                value={formData.postLink}
                onChange={handleInputChange}
                required
            />

            <input
                type="text"
                name="userAccount"
                placeholder="Compte d'utilisateur (lien ou pseudo)"
                value={formData.userAccount}
                onChange={handleInputChange}
                required
            />

            <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleInputChange}
                required
            />

            <input
                type="file"
                name="screenshot"
                onChange={handleFileChange}
                accept="image/*"
                required
            />

            <button type="submit" className="submit-button">
              Signaler <span className="arrow-icon">→</span>
            </button>
          </form>
        </main>

      </div>
  );
};