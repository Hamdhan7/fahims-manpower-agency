import './Footer.css';  // Import custom CSS for styling
import footerLogoLeft from "../assets/fahims-logo.png"
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
                    <a href="https://m.facebook.com/media/set/?vanity=newfahim736&set=a.208119431542519" target="_blank" rel="noopener noreferrer">
                        <img src={socialMediaLogo2} alt="Logo 2" className="footer-social-logo"/>
                    </a>
                    <a href="https://www.instagram.com/new_fahim_/" target="_blank" rel="noopener noreferrer">
                        <img src={socialMediaLogo3} alt="Logo 3" className="footer-social-logo"/>
                    </a>
                </div>


            </div>

            {/* Company name at the bottom */}
            <div className="footer-bottom">
                <p>&copy; 2025 New Fahim Enterprises. All rights reserved.</p>
                <a href="https://darxforge.com" target="_blank" rel="noopener noreferrer">
                    <p>Designed and Developed by Darxforge.</p>
                </a>
            </div>


        </footer>
    );
};

export default Footer;
