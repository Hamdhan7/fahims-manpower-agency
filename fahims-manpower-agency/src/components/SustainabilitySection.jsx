import React from "react";
import './SustainabilitySection.css';

const SustainabilitySection = ({ heading, buttonText, backgroundImage, items }) => {
    return (
        <section id="whyChooseUs" className="sustainability-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="sustainability-overlay"></div>
            <div className="sustainability-container">
                <div className="sustainability-text fade-in">
                    <h2>{heading}</h2>

                    {items && items.map((item, index) => (
                        <div key={index} className="sustainability-item">
                            <h3>{item.subheading}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SustainabilitySection;
