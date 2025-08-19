// AgencyBanner.tsx
import { FaBriefcase, FaCertificate, FaIdCard } from 'react-icons/fa';
import './AgencyBanner.css'; // We'll use a slightly modified CSS

const AgencyBanner: React.FC = () => {
    return (
        <div className="guarantee-banner">
            {/* Item 1: Agency Type */}
            <div className="guarantee-item">
                <FaBriefcase className="guarantee-icon" />
                <div className="guarantee-text">
                    <h4>Licensed Manpower Recruitment Agency</h4>
                    <p>Connecting talent with global opportunities</p>
                </div>
            </div>

            <div className="divider" />

            {/* Item 2: Memberships */}
            <div className="guarantee-item">
                <FaCertificate className="guarantee-icon" />
                <div className="guarantee-text">
                    <h4>Founder Member of ARCO & ALFEA</h4>
                    <p>Committed to ethical recruitment practices</p>
                </div>
            </div>

            <div className="divider" />

            {/* Item 3: License Number */}
            <div className="guarantee-item">
                <FaIdCard className="guarantee-icon" />
                <div className="guarantee-text">
                    <h4>Sri Lankan Agent License</h4>
                    <p>License No: 0736</p>
                </div>
            </div>
        </div>
    );
};

export default AgencyBanner;