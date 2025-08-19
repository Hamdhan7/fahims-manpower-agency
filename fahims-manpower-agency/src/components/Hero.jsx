import "./Hero.css";

const Hero = () => {
    return (
        <section className="hero fade-in-up">
            <div className="hero-content fade-in">
                <h1 className="fade-in">
                    Your Trusted <span className="employees">Partner</span> for Overseas <span
                    className="workforce">Recruitment</span> Needs.
                </h1>
                <p className="fade-in">
                    New Fahim Enterprises specializes in sourcing elite Sri Lankan talent for leading companies in the
                    Middle East and beyond. We simplify your hiring process, ensuring you get the dedicated workforce
                    you need to succeed.
                </p>
                <a
                    href="mailto:new_fahim@yahoo.com?subject=Consultation Request for Manpower Services"
                    className="hero-button fade-in-up"
                >
                    Request a Consultation
                </a>
            </div>

            {/* Image (Hidden on Mobile) */}
            <div className="hero-image">
                {/*<img src={heroImage} alt="Business Growth" />*/}
            </div>
        </section>

    );
};

export default Hero;
