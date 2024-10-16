import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './pagePubCyberbullying.css';

// Import your images here
import cleanLogo from '../../../assets/CleanFeed_LOGO.png';
import userAvatar from '../../../assets/avatar.png';
import twitterIcon from '../../../assets/twitter.png';
import tiktokIcon from '../../../assets/tiktok.png';
import instagramIcon from '../../../assets/instagram.png';
import snapchatIcon from '../../../assets/Snapchat.png';
import facebookIcon from '../../../assets/facebook.png';

const reports = [
    {
        id: 1,
        text: "Insulte raciste",
        icon: twitterIcon,
        username: "@usernamebad1",
        context: "Racisme sur un homme de couleur noir",
        link: "https://twitter.com/user1/status/123456789",
        image: "https://example.com/tweet1.jpg"
    },
    {
        id: 2,
        text: "Harcèlement récurrent sur ce tiktokeur",
        icon: tiktokIcon,
        username: "@usernamebad2",
        context: "Commentaires répétitifs et insultants sur plusieurs vidéos",
        link: "https://www.tiktok.com/@user2/video/987654321",
        image: "https://example.com/tiktok1.jpg"
    },
    {
        id: 3,
        text: "Homophobie dans les commentaires",
        icon: instagramIcon,
        username: "@usernamebad3",
        context: "Commentaires homophobes sous une photo de couple",
        link: "https://www.instagram.com/p/ABC123/",
        image: "https://example.com/insta1.jpg"
    },
    {
        id: 4,
        text: "Vidéo inappropriée (violence)",
        icon: snapchatIcon,
        username: "@usernamebad4",
        context: "Partage d'une vidéo montrant de la violence explicite",
        link: "https://www.snapchat.com/add/username4",
        image: "https://example.com/snap1.jpg"
    },
    {
        id: 5,
        text: "Arnaque sur le marketplace",
        icon: facebookIcon,
        username: "@usernamebad5",
        context: "Fausse annonce de vente sur le marketplace",
        link: "https://www.facebook.com/marketplace/item/123456789/",
        image: "https://example.com/fb1.jpg"
    },
];

export const PagePubsCyberbulling = () => {
    const navigate = useNavigate();
    const [selectedReport, setSelectedReport] = useState(null);
    const [votes, setVotes] = useState({});

    const handleReportClick = (report) => {
        setSelectedReport(report);
    };

    const handleVote = (reportId, type) => {
        setVotes(prevVotes => ({
            ...prevVotes,
            [reportId]: {
                ...prevVotes[reportId],
                [type]: (prevVotes[reportId]?.[type] || 0) + 1
            }
        }));
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

                <div className="report-details">
                    {selectedReport ? (
                        <>
                            <h3>Lien : <a href={selectedReport.link} target="_blank" rel="noopener noreferrer">{selectedReport.link}</a></h3>
                            <p>Username du harceleur : {selectedReport.username}</p>
                            <p>Contexte : {selectedReport.context}</p>
                            <img src={selectedReport.image} alt="Publication Screenshot" className="publication-screenshot" />
                            <div className="vote-buttons">
                                <button onClick={() => handleVote(selectedReport.id, 'dislike')}>
                                    👎 {votes[selectedReport.id]?.dislike || 0}
                                </button>
                                <button onClick={() => handleVote(selectedReport.id, 'like')}>
                                    👍 {votes[selectedReport.id]?.like || 0}
                                </button>
                            </div>
                        </>
                    ) : (
                        <p>Sélectionnez un rapport pour voir les détails</p>
                    )}
                </div>
            </main>
        </div>
    );
};