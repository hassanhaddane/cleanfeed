import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { Authentification } from "./pages/Authentification/Authentification"; // Assurez-vous que le chemin est correct

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {/* Route pour la page d'accueil */}
                    <Route path="/" element={<LandingPage />} />

                    {/* Route pour la page d'authentification */}
                    <Route path="/authentification" element={<Authentification />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
