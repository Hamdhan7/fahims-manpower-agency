import './LoadingScreen.css';
import fahimsLogo from '../assets/fahims-logo.svg';

function LoadingScreen() {
    return (
        <div className="loading-inner">
            <img className="loading-text" src={fahimsLogo} alt="Logo"/>
            <h2 className="slogan-text">New Fahim Enterprises</h2>
        </div>
    );
}

export default LoadingScreen;
