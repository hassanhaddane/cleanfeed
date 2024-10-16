import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./postsFakeNews.css";

// Import your images here
import cleanLogo from "../../../assets/CleanFeed_LOGO.png";
import userAvatar from "../../../assets/avatar.png";
import twitterIcon from "../../../assets/twitter.png";
// import tiktokIcon from "../../../assets/tiktok.png";
// import instagramIcon from "../../../assets/instagram.png";
// import snapchatIcon from "../../../assets/Snapchat.png";
// import facebookIcon from "../../../assets/facebook.png";

// const fakeNewsReports = [
//     { id: 1, text: "Mensonges sur le gagnant des élections", icon: twitterIcon },
//     { id: 2, text: "Poutine est mort ???", icon: tiktokIcon },
//     { id: 3, text: "Mac Donalds pertes en bourses", icon: instagramIcon },
//     { id: 4, text: "Fausses informations sur le climat", icon: snapchatIcon },
//     { id: 5, text: "Fausse déclaration de chèque essence", icon: facebookIcon },
// ];

export const PagePubsFakeNews = () => {
  const navigate = useNavigate();
  const [selectedReport, setSelectedReport] = useState(null);
  const [votes, setVotes] = useState({ likes: 25, dislikes: 125 });

  const [fakeNewsReports, setFakeNewsReports] = useState([]);

  useEffect(() => {
    const fetchFakeNewsReports = async () => {
      try {
        const response = await axios.get("http://0.0.0.0:8080/posts/fakenews");
        setFakeNewsReports(response.data);
        console.log("Fake news reports:", response.data);
      } catch (error) {
        console.error("Error fetching fake news reports:", error);
      }
    };

    fetchFakeNewsReports();
  }, []);

  const handleReportClick = (report) => {
    setSelectedReport(report);
  };

  const handleVote = (type) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [type]: prevVotes[type] + 1,
    }));
  };

  return (
    <div className="page-pubs-fake-news">
      <header>
        <img src={cleanLogo} alt="Clean Feed Logo" className="logo" />
        <div className="user-info">
          <span>Nous contacter</span>
          <img src={userAvatar} alt="User Avatar" className="avatar" />
          <span>Léa.B</span>
        </div>
      </header>

      <main>
        <div className="reports-list">
          {fakeNewsReports.map((report) => (
            <div
              key={report.id}
              className="report-item"
              onClick={() => handleReportClick(report)}
            >
              <span>{report.name}</span>
              <img
                src={twitterIcon}
                alt="Social Media Icon"
                className="social-icon"
              />
            </div>
          ))}
          <button
            className="new-report-btn"
            onClick={() => navigate("/fakenews")}
          >
            Faire un signalement
          </button>
        </div>

        {selectedReport && (
          <div className="report-details">
            <h3>Lien : {selectedReport.link}</h3>
            <p>{selectedReport.related_user}</p>
            <p>Contexte : {selectedReport.description}</p>
            {/*<img src={instagramPost} alt="Instagram Post" className="post-image" />*/}
            <div className="vote-buttons">
              <button
                className="dislike-btn"
                onClick={() => handleVote("dislikes")}
              >
                👎 {votes.dislikes}
              </button>
              <button className="like-btn" onClick={() => handleVote("likes")}>
                👍 {votes.likes}
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
