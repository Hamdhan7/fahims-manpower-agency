import { useState } from "react";
import "./Nav.css"; // Import the CSS file
import navBarLogo from '../assets/fahims-logo.svg';

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="nav">
            <div className="nav-container">
                {/* Logo on the Left */}
                <div className="nav-logo">
                    <a href="/"><img src={navBarLogo} alt="VePay Logo" /></a>
                </div>

                {/* Menu and Button Wrapper (Aligned to the Right) */}
                <div className="nav-right">
                    <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                        <li><a href="#services">Our Services</a></li>
                        <li><a href="#whyChooseUs">Why Choose Us</a></li>
                        <li><a href="#indsutries"> Industries We Serve </a></li>
                        <li><a href="#aboutUs">About US</a></li>

                        {/* Move Contact Us button inside the mobile menu */}
                        <li className="nav-contact-btn">
                            <a href="#contactUs">
                                <button className="nav-button">Contact Us</button>
                            </a>
                        </li>
                    </ul>

                    {/* Hamburger Menu */}
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
