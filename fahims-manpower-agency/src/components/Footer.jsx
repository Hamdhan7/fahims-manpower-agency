import './Footer.css';  // Import custom CSS for styling
import footerLogoLeft from "../assets/fahims-logo.svg"
import socialMediaLogo1 from "../assets/1.svg"
import socialMediaLogo2 from "../assets/2.svg"
import socialMediaLogo3 from "../assets/3.svg"
import socialMediaLogo4 from "../assets/4.svg"
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-background-image"></div>

            <div className="footer-container">
                {/* Left side - Logo and Links */}
                    <img src={footerLogoLeft} alt="Darxforge Logo" className="footer-logo"/>
                    <div className="footer-links">
                        <a href="">Privacy Policy</a>
                        <a href="">Terms & Conditions</a>
                        <a href="#services">Our Services</a>
                        <a href="#aboutUs">About Us</a>
                        <a href="#contactUs">Contact Us</a>
                    </div>

                {/* Right side - Logos and background image */}
                    <div className="footer-logos">
                        <img src={socialMediaLogo1} alt="Logo 1" className="footer-social-logo"/>
                        <img src={socialMediaLogo2} alt="Logo 2" className="footer-social-logo"/>
                        <img src={socialMediaLogo3} alt="Logo 3" className="footer-social-logo"/>
                        <img src={socialMediaLogo4} alt="Logo 4" className="footer-social-logo"/>
                    </div>

            </div>

            {/* Company name at the bottom */}
            <div className="footer-bottom">
                <p>&copy; 2025 Darxforge. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
