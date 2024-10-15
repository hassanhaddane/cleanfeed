import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { Authentification } from "./pages/Authentification/Authentification";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import {CyberbullyingPage} from "./pages/PageCyberbullying/PageCyberbullying";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {/* Route pour la page d'accueil */}
                    <Route path="/" element={<LandingPage />} />

                    {/* Route pour la page d'authentification */}
                    <Route path="/authentification" element={<Authentification />} />

                    {/* Route pour la page dashboard */}
                    <Route path="/dashboard" element={<Dashboard />} />

                    {/* Route pour la page Cyberbullying */}
                    <Route path="/cyberbullying" element={<CyberbullyingPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
