import React from 'react';
import cleanfeedLogo from '../../logo.svg';
import Capture1 from './8918617_4029280.png';
import newspaperBackgroundConcept from './newspaper-background-concept.png';
import images from './images.png';
import stickersMurauxLogoNike from './stickers-muraux-logo-nike.png';
import conceptPersonSufferingFromCybersicknessTechnologyAddiction from './concept-person-suffering-from-cybersickness-technology-addiction.png';
import Capture from './concept-person-suffering-from-cybersickness-technology-addiction.png';
import rectangle45 from './images.png';
import './style.css';

// Main Dashboard component
export const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="content">
                <Header />
                <MainContent />
                <UserInfo />
                <RewardsSection />
                <ContactAndReportSection />
            </div>
        </div>
    );
};

// Header component
const Header = () => (
    <div className="header">
        <img className="cleanfeed-logo" alt="Cleanfeed LOGO" src={cleanfeedLogo} />
        <img className="capture-decran" alt="Capture decran" src={Capture1} />
        <img className="img" alt="Capture decran" src={Capture1} />
    </div>
);

// Main content component
const MainContent = () => (
    <div className="main-content">
        <CyberbullyingSection />
        <FakeNewsSection />
        <TechnologyAddictionSection />
    </div>
);

// Cyberbullying section component
const CyberbullyingSection = () => (
    <div className="cyberbullying-section">
        <div className="rectangle" />
        <img className="rectangle-2" alt="Rectangle" src={rectangle45} />
        <div className="text-wrapper">Cyberbullying</div>
        <img className="newspaper-background" alt="Newspaper background" src={newspaperBackgroundConcept} />
        <p className="title">L'importance de la sensiblisation au cyber harcèlement.</p>
        <p className="description">
            Nous sommes ici pour soutenir et prendre les mesures appropriées afin d'assurer un environnement professionnel sûr, respectueux.
        </p>
        <div className="cta-button">
            <div className="rectangle-4" />
            <div className="text-wrapper-2">En savoir +</div>
        </div>
        <img className="images" alt="Images" src={images} />
        <img className="stickers-muraux-logo" alt="Stickers muraux logo" src={stickersMurauxLogoNike} />
    </div>
);

// Fake news section component
const FakeNewsSection = () => (
    <div className="fake-news-section">
        <div className="text-wrapper-3">Fake news</div>
    </div>
);

// Technology addiction section component
const TechnologyAddictionSection = () => (
    <div className="concept-person-wrapper">
        <img
            className="concept-person"
            alt="Concept person"
            src={conceptPersonSufferingFromCybersicknessTechnologyAddiction}
        />
    </div>
);

// User info component
const UserInfo = () => (
    <div className="user-info">
        <img className="capture-d-ecran" alt="Capture d ecran" src={Capture} />
        <img className="rectangle-5" alt="Rectangle" src={rectangle45} />
        <div className="text-wrapper-4">Léa.B</div>
    </div>
);

// Rewards section component
const RewardsSection = () => (
    <div className="rewards-section">
        <div className="text-wrapper-5">Mes récompenses</div>
        <p className="encore">
            Encore 15 signalement<br />pour obtenir 10 % de réduction
        </p>
        <p className="encore-2">
            Encore 150 signalement<br />pour obtenir 20 % de réduction
        </p>
    </div>
);

// Contact and report section component
const ContactAndReportSection = () => (
    <div className="contact-report-section">
        <div className="nous-contacter"> Nous contacter</div>
        <div className="report-button">
            <div className="text-wrapper-6">Signaler</div>
        </div>
        <div className="report-button-alt">
            <div className="text-wrapper-7">Signaler</div>
        </div>
    </div>
);