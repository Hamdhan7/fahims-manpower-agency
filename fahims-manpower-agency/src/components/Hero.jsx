import "./Hero.css";

const Hero = () => {
    return (
        <section className="hero fade-in-up">
            <div className="hero-content fade-in">
                <h1 className="fade-in">
                    Bridging the Gap Between <span className="employees">Employers</span> and Skilled <span className="workforce">Workforce</span>
                </h1>
                <p className="fade-in">New Fahim Enterprises is a leading Sri Lankan manpower agency, trusted by businesses across the Middle East and beyond. We connect skilled professionals with the right job opportunities, ensuring success for both employers and job seekers.</p>
                <button className="hero-button fade-in-up">Let’s Work Together</button>
            </div>

            {/* Image (Hidden on Mobile) */}
            <div className="hero-image">
                {/*<img src={heroImage} alt="Business Growth" />*/}
            </div>
        </section>

    );
};

export default Hero;
