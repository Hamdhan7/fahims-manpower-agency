import React from 'react';
import './VeCardSection.css';

const VeCardSection = ({
                           heading,
                           subheading,
                           description,
                           cardImage,
                           backgroundImage,
                           cardStyle = {}, // New prop with default empty object
                       }) => {
    return (
        <section
            className="ve-card-section"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="ve-card-container">
                {/* Floating Image */}
                <div className="floating-card-container">
                    {cardImage && (
                        <img
                            src={cardImage}
                            alt="Floating Visual"
                            className="floating-card fade-in-up"
                            style={cardStyle} // Inject inline styles
                        />
                    )}
                </div>
                <div className="ve-card-content">
                    {heading && <h4 className="fade-in">{heading}</h4>}
                    {subheading && (
                        <h2 className="fade-in">
                            {subheading.split('\n').map((line, i) => (
                                <React.Fragment key={i}>
                                    {line}
                                    <br />
                                </React.Fragment>
                            ))}
                        </h2>
                    )}
                    {description && <p className="fade-in">{description}</p>}
                </div>
            </div>
        </section>
    );
};

export default VeCardSection;
