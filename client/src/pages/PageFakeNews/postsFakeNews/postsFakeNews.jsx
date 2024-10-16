import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './postsFakeNews.css';
import '../../Dashboard/Dashboard.css'; // Import the dashboard CSS

// Import your images here
import cleanLogo from '../../../assets/CleanFeed_LOGO.png';
import userAvatar from '../../../assets/avatar.png';
import twitterIcon from '../../../assets/twitter.png';
import tiktokIcon from '../../../assets/tiktok.png';
import instagramIcon from '../../../assets/instagram.png';
import snapchatIcon from '../../../assets/Snapchat.png';
import facebookIcon from '../../../assets/facebook.png';

const posts = [
    {
        id: 1,
        text: "Nouvelle découverte scientifique : Les chats sont en réalité des extraterrestres déguisés ! ",
        icon: snapchatIcon,
        username: "@catloversweekly",
        context: "Une étude révolutionnaire remet en question l'origine des chats.",
        link: "https://example.com/article1",
        image: "https://example.com/cat_alien.jpg"
    },
    {
        id: 2,
        text: "Breaking news : Des licornes aperçues dans les rues de New York ! ",
        icon: twitterIcon,
        username: "@fantasynewsnow",
        context: "Les résidents stupéfaits par cette apparition magique.",
        link: "https://example.com/article2",
        image: "https://example.com/unicorn_nyc.jpg"
    },
    {
        id: 3,
        text: "Révélation choquante : Les pizzas ont été inventées par des extra-terrestres pour espionner l'humanité ! ",
        icon: tiktokIcon,
        username: "@conspiracytoday",
        context: "Une théorie complotiste qui prend de l'ampleur sur Internet.",
        link: "https://example.com/article3",
        image: "https://example.com/pizza_aliens.jpg"
    },
    {
        id: 4,
        text: "Incroyable mais vrai : Un chien devient maire d'une petite ville en Alaska !",
        icon: twitterIcon,
        username: "@dogpolitics",
        context: "Les habitants enchantés par leur nouveau dirigeant à quatre pattes.",
        link: "https://example.com/article4",
        image: "https://example.com/dog_mayor.jpg"
    },
    {
        id: 5,
        text: "Flash spécial : Les pâtisseries deviennent illégales dans une ville après une émeute pour des croissants !",
        icon: instagramIcon,
        username: "@foodlawsdaily",
        context: "Une controverse culinaire qui secoue la communauté.",
        link: "https://example.com/article5",
        image: "https://example.com/pastry_ban.jpg"
    }
];

export const PostsFakeNews = () => {
    const navigate = useNavigate();
    const [selectedPosts, setSelectedPosts] = useState(null);
    const [votes, setVotes] = useState({});

    const handleNewReport = () => {
        navigate('/cyberbullying');
    };

    const handlePostsClick = (posts) => {
        setSelectedPosts(posts);
    };

    const handleVote = (postsId, type) => {
        setVotes(prevVotes => ({
            ...prevVotes,
            [postsId]: {
                ...prevVotes[postsId],
                [type]: (prevVotes[postsId]?.[type] || 0) + 1
            }
        }));
    };

    return (
        <div className="main1">
            <header className="header">
                <img src={cleanLogo} alt="Clean Feed Logo" className="logo"/>
                <div className="user-info">
                    <span>Nous contacter</span>
                    <img src={userAvatar} alt="User Avatar" className="avatar"/>
                    <span>Léa.B</span>
                </div>
            </header>

            <main className="main">
                <div className="posts-list">
                    <h1 id="h1">Signalements de Fake News</h1>
                    {posts.map(post => (
                        <div
                            key={post.id}
                            className={`posts-item ${selectedPosts?.id === post.id ? 'clicked' : ''}`}
                            onClick={() => handlePostsClick(post)}
                        >
                            <span>{post.text}</span>
                            <img src={post.icon} alt="Social Media Icon" className="social-icon"/>
                        </div>
                    ))}
                    <button className="new-report-btn" onClick={handleNewReport}>Faire un signalement</button>
                </div>

                <div className="posts-details-sidebar">
                    {selectedPosts ? (
                        <>
                            <h3>Lien : <a href={selectedPosts.link} target="_blank" rel="noopener noreferrer">{selectedPosts.link}</a></h3>
                            <p>Username du harceleur : {selectedPosts.username}</p>
                            <p>Contexte : {selectedPosts.context}</p>
                            <img
                                src={"https://mastercaweb.unistra.fr/wp-content/uploads/2018/02/XVM44c9d79e-93ab-11ea-85b0-cd29af542a7f.jpg"}
                                alt="Publication Screenshot"
                                className="publication-screenshot"/>
                            <div className="vote-buttons">
                                <button onClick={() => handleVote(selectedPosts.id, 'like')}>
                                    👍 {votes[selectedPosts.id]?.like || 0}
                                </button>
                                <button onClick={() => handleVote(selectedPosts.id, 'dislike')}>
                                    👎 {votes[selectedPosts.id]?.dislike || 0}
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