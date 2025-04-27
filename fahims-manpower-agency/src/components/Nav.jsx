import { useState } from "react";
import "./Nav.css";
import navBarLogo from '../assets/fahims-logo.svg';

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="nav">
            <div className="nav-container">
                {/* Left: Logo */}
                <div className="nav-logo">
                    <a href="/"><img src={navBarLogo} alt="VePay Logo" /></a>
                </div>

                {/* Center: Company Name */}
                <div className="nav-title">
                    NEW FAHIM ENTERPRISES
                </div>

                {/* Right: Links + Hamburger */}
                <div className="nav-right">
                    <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                        <li><a href="#services">Our Services</a></li>
                        <li><a href="#whyChooseUs">Why Choose Us</a></li>
                        <li><a href="#indsutries">Industries We Serve</a></li>
                        <li><a href="#aboutUs">About Us</a></li>
                        <li className="nav-contact-btn">
                            <a href="#contactUs">
                                <button className="nav-button">Contact Us</button>
                            </a>
                        </li>
                    </ul>

                    <div className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
