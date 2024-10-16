import React, { useState } from 'react';
import './style.css';

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
  const [votes, setVotes] = useState({ likes: 0, dislikes: 0 });
  const [userVote, setUserVote] = useState(null);

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
    setPreview(formData);
  };

  const handleVote = (voteType) => {
    if (userVote === null) {
      setVotes(prevVotes => ({
        ...prevVotes,
        [voteType]: prevVotes[voteType] + 1
      }));
      setUserVote(voteType);
    }
  };

  return (
      <div className="cyberbullying-page">
        <header className="header">
          <img src={images.cleanfeedLogo} alt="CleanFeed Logo" className="logo" />
          <div className="user-info">Léa.B</div>
        </header>

        <main className="main-content">
          <form onSubmit={handleSubmit} className="report-form">
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

            <button type="submit">Signaler</button>
          </form>

          {preview && (
              <div className="preview-sidebar">
                <h3>Aperçu du signalement</h3>
                <img
                    src={images[formData.socialNetwork + 'Icon']}
                    alt={formData.socialNetwork}
                    className="social-icon"
                />
                <p><strong>Lien:</strong> {formData.postLink}</p>
                <p><strong>Utilisateur:</strong> {formData.userAccount}</p>
                <p><strong>Description:</strong> {formData.description}</p>
                {preview instanceof File ? (
                    <img src={URL.createObjectURL(preview)} alt="Screenshot" className="preview-image" />
                ) : (
                    <img src={'https://media.istockphoto.com/id/1222357475/fr/vectoriel/ic%C3%B4ne-de-pr%C3%A9visualisation-dimage-place-dimage-pour-le-site-web-ou-la-conception-dui-ux.jpg?s=612x612&w=0&k=20&c=BBIsJc60xEMdIHhC3p8dsO8rbWAPg29fP95_vktRsPc='} alt="Screenshot" className="preview-image" />
                )}
                <div className="vote-section">
                  <button onClick={() => handleVote('likes')} disabled={userVote !== null}> {votes.likes}</button>
                  <button onClick={() => handleVote('dislikes')} disabled={userVote !== null}> {votes.dislikes}</button>
                </div>
              </div>
          )}
        </main>

        <footer className="footer">
          <button className="contact-btn">Nous contacter</button>
        </footer>
      </div>
  );
};