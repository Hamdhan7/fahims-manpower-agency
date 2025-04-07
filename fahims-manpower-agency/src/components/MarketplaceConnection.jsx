import { useEffect, useRef } from "react";
import "./MarketplaceConnection.css"; // Importing the CSS file
import cardImage1 from "../assets/card-img-1.svg";
import cardImage2 from "../assets/card-img-2.svg";
import cardImage3 from "../assets/card-img-3.svg";

const MarketplaceConnection = () => {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const container = containerRef.current;

        if (!section || !container) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        container.scrollTo({ left: container.scrollWidth, behavior: "smooth" });
                    }
                });
            },
            { threshold: 0.5 } // Triggers when 50% of the section is visible
        );

        observer.observe(section);

        return () => observer.disconnect(); // Cleanup observer
    }, []);

    return (
        <section className="marketplace-container" ref={sectionRef}>
            <div className="market-place-container-upper-section">
                <h2 className="marketplace-heading fade-in-up">
                    What We Do
                </h2>
                <p className="marketplace-description fade-in-up">
                    We provide end-to-end recruitment solutions, ensuring businesses get the right manpower while helping job seekers secure promising careers.
                    Our streamlined process guarantees efficiency, compliance, and successful placements
                </p>
            </div>
            <div className="marketplace-card-container" ref={containerRef}>
                <div className="marketplace-card fade-in-up">
                    <div className="card-image">
                        <img src={cardImage1} id="cardImage1" alt="Sign Up"/>
                    </div>
                    <div className="card-body">
                        <h3>Visa Processing & Documentation</h3>
                        <p>Handling all legal paperwork for overseas employment.</p>
                    </div>
                </div>

                <div className="marketplace-card fade-in-up">
                    <div className="card-image">
                        <img src={cardImage2} id="cardImage2"  alt="Connect Your Marketplace"/>
                    </div>
                    <div className="card-body">
                        <h3>Job Matching & Recruitment</h3>
                        <p>Connecting skilled professionals with the right employers.</p>
                    </div>
                </div>

                <div className="marketplace-card fade-in-up">
                    <div className="card-image">
                        <img src={cardImage3} id="cardImage3"  alt="Unlock Your Funds"/>
                    </div>
                    <div className="card-body">
                        <h3>Skill Assessment & Training</h3>
                        <p>Preparing candidates for workplace expectations.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MarketplaceConnection;
