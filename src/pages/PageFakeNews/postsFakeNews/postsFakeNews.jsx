import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

// Import your images here
import cleanLogo from '../../../assets/CleanFeed_LOGO.png';
import userAvatar from '../../../assets/avatar.png';
import twitterIcon from '../../../assets/twitter.png';
import tiktokIcon from '../../../assets/tiktok.png';
import instagramIcon from '../../../assets/instagram.png';
import snapchatIcon from '../../../assets/Snapchat.png';
import facebookIcon from '../../../assets/facebook.png';

const fakeNewsReports = [
    { id: 1, text: "Mensonges sur le gagnant des élections", icon: twitterIcon },
    { id: 2, text: "Poutine est mort ???", icon: tiktokIcon },
    { id: 3, text: "Mac Donalds pertes en bourses", icon: instagramIcon },
    { id: 4, text: "Fausses informations sur le climat", icon: snapchatIcon },
    { id: 5, text: "Fausse déclaration de chèque essence", icon: facebookIcon },
];

export const PagePubsFakeNews = () => {
    const navigate = useNavigate();
    const [selectedReport, setSelectedReport] = useState(null);
    const [votes, setVotes] = useState({ likes: 25, dislikes: 125 });

    const handleReportClick = (report) => {
        setSelectedReport(report);
    };

    const handleVote = (type) => {
        setVotes(prevVotes => ({
            ...prevVotes,
            [type]: prevVotes[type] + 1
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
                    {fakeNewsReports.map(report => (
                        <div key={report.id} className="report-item" onClick={() => handleReportClick(report)}>
                            <span>{report.text}</span>
                            <img src={report.icon} alt="Social Media Icon" className="social-icon" />
                        </div>
                    ))}
                    <button className="new-report-btn" onClick={() => navigate('/fakenews')}>
                        Faire un signalement
                    </button>
                </div>

                {selectedReport && (
                    <div className="report-details">
                        <h3>Lien : https://instagram.com</h3>
                        <p>@usernameBourse</p>
                        <p>Contexte : Mensonge sur la vente de mac donalds.</p>
                        {/*<img src={instagramPost} alt="Instagram Post" className="post-image" />*/}
                        <div className="vote-buttons">
                            <button className="dislike-btn" onClick={() => handleVote('dislikes')}>
                                👎 {votes.dislikes}
                            </button>
                            <button className="like-btn" onClick={() => handleVote('likes')}>
                                👍 {votes.likes}
                            </button>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};