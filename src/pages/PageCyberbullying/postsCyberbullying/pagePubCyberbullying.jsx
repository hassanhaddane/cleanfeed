import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

// Import your images here
import cleanLogo from '../Clean_3.png';
import userAvatar from '../Snapchat.png';
import twitterIcon from '../Snapchat.png';
import tiktokIcon from '../Snapchat.png';
import instagramIcon from '../Snapchat.png';
import snapchatIcon from '../Snapchat.png';
import facebookIcon from '../Snapchat.png';

const reports = [
    { id: 1, text: "Insulte raciste", icon: twitterIcon },
    { id: 2, text: "Harcèlement récurrent sur ce tiktokeur", icon: tiktokIcon },
    { id: 3, text: "Homophobie dans les commentaires", icon: instagramIcon },
    { id: 4, text: "Vidéo inapproprié (meurtre)", icon: snapchatIcon },
    { id: 5, text: "Arnarque sur le market place", icon: facebookIcon },
];

export const PagePubsCyberbulling = () => {
    const navigate = useNavigate();
    const [selectedReport, setSelectedReport] = useState(null);
    const [votes, setVotes] = useState({});

    const handleReportClick = (report) => {
        setSelectedReport(report);
    };

    const handleVote = (type) => {
        if (!votes[selectedReport.id]) {
            setVotes({
                ...votes,
                [selectedReport.id]: type
            });
        }
    };

    const handleNewReport = () => {
        navigate('/cyberbullying');
    };

    return (
        <div className="page-pubs-cyberbulling">
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
                    {reports.map(report => (
                        <div key={report.id} className="report-item" onClick={() => handleReportClick(report)}>
                            <span>{report.text}</span>
                            <img src={report.icon} alt="Social Media Icon" className="social-icon" />
                        </div>
                    ))}
                    <button className="new-report-btn" onClick={handleNewReport}>Faire un signalement</button>
                </div>

                {selectedReport && (
                    <div className="report-details">
                        <h3>Lien : https://twitter.com</h3>
                        <p>@usernamebad</p>
                        <p>Contexte : Racisme sur un homme de couleur noir</p>
                        {/*<img src="" alt="Tweet Screenshot" className="tweet-screenshot" />*/}
                        <div className="vote-buttons">
                            <button
                                onClick={() => handleVote('dislike')}
                                disabled={votes[selectedReport.id] === 'dislike'}
                                className={votes[selectedReport.id] === 'dislike' ? 'voted' : ''}
                            >
                                👎 25
                            </button>
                            <button
                                onClick={() => handleVote('like')}
                                disabled={votes[selectedReport.id] === 'like'}
                                className={votes[selectedReport.id] === 'like' ? 'voted' : ''}
                            >
                                👍 125
                            </button>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};