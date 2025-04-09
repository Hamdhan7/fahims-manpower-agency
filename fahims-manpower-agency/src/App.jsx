import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import './components/LoadingScreen.css'; // Make sure you have this
import Nav from './components/Nav.jsx';
import HomePage from './components/HomePage.jsx';
import Footer from './components/Footer.jsx';
import { applyScrollAnimation } from './scrollAnimation.js';
import LoadingScreen from './components/LoadingScreen.jsx'; // New splash screen

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Disable scrolling during loading
        document.body.style.overflow = 'hidden';

        const timer = setTimeout(() => {
            setLoading(false);
            // Re-enable scrolling
            document.body.style.overflow = 'auto';
        }, 3300); // Match your splash duration

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!loading) {
            applyScrollAnimation(); // Apply scroll animation only after splash screen
        }
    }, [loading]);

    return (
        <Router>
            {/* Splash screen wrapper */}
            {loading && (
                <div className={`loading-container`}>
                    <LoadingScreen />
                </div>
            )}

            {/* Main app */}
            {!loading && (
                <div className="main-app">
                    <div className="nav-section">
                        <Nav />
                    </div>

                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        {/* Add more routes as needed */}
                    </Routes>

                    <div className="footer-section-container">
                        <Footer />
                    </div>
                </div>
            )}
        </Router>
    );
}

export default App;
