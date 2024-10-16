import React, { useState } from "react";
import "./PageFakeNews.css";
import axios from "axios";

// Import images using require
const images = {
  cleanfeedLogo: require("../../assets/cleanfeed-LOGO.png"),
  twitterIcon: require("../../assets/twitter.png"),
  facebookIcon: require("../../assets/facebook.png"),
  instagramIcon: require("../../assets/instagram.png"),
};

export const PageFakeNews = () => {
  const [formData, setFormData] = useState({
    socialNetwork: "",
    postLink: "",
    userAccount: "",
    context: "",
    screenshot: null,
  });

  const [preview, setPreview] = useState(null);
  const [reportCount, setReportCount] = useState(25125);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevState) => ({
      ...prevState,
      screenshot: file,
    }));
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    console.log("Form data:", formData);
    e.preventDefault();
    setPreview(formData);
    setReportCount((prevCount) => prevCount + 1);

    const data = {
      type: "fakenews",
      name: "Fake news",
      link: formData.postLink,
      related_user: formData.userAccount,
      description: formData.context,
      up_count: 0,
      down_count: 0,
      verified_source: "http://gouv.fr",
    };
    console.log("Data:", data);

    axios.post("http://0.0.0.0:8080/posts", data);
  };

  return (
    <div className="fake-news-page">
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
          >
            <option value="">Sélectionnez un réseau social</option>
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
            name="context"
            placeholder="Contexte du post"
            value={formData.context}
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

        <div className="preview-sidebar">
          <h3>Aperçu des signalements</h3>
          <div className="report-count">
            Nombre de signalements: {reportCount}
          </div>
          <div className="fake-news-examples">
            <p>Poutine est mort ???</p>
            <p>Mac Donalds pertes en bourses</p>
            <p>Fausses informations sur le climat</p>
            <p>Mensonge sur les élections</p>
          </div>
          {preview && (
            <div className="new-report">
              <img
                src={images[formData.socialNetwork + "Icon"]}
                alt={formData.socialNetwork}
                className="social-icon"
              />
              <p>
                <strong>Contexte:</strong> {formData.context}
              </p>
              <p>
                <strong>Lien:</strong> {formData.postLink}
              </p>
              <p>
                <strong>Utilisateur:</strong> {formData.userAccount}
              </p>
            </div>
          )}
        </div>
      </main>

      <footer className="footer">
        <button className="contact-btn">Nous contacter</button>
      </footer>
    </div>
  );
};
