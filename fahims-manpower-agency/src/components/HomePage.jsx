import './HomePage.css';

import Hero from "./Hero.jsx";
import VeCardSection from "./VeCardSection.jsx";
import MarketplaceConnection from "./MarketplaceConnection.jsx";
import SustainabilitySection from "./SustainabilitySection.jsx";
import sustainabilityBg from "../assets/why-choose-us-bg.png";
import aboutUsBg from "../assets/about-us-bg.png";
import visionMissionBg from "../assets/our-mission-vission-bg.png";
import visionMissionLeftImg from "../assets/vision-mission-img-left.png";
import ourGlobalPresenceLeftImg from "../assets/our-global-presence-img-left.png";
import HowWork from "./HowWork.jsx";
import howWorkImg1 from "../assets/who-we-are-img-1.svg"
import howWorkImg2 from "../assets/who-we-are-img-2.png"
import howWorkImg3 from "../assets/who-we-are-img-3.svg"
import howWorkImg4 from "../assets/who-we-are-img-4.svg"
import industriesWeServeImg1 from "../assets/industries-we-serve-img-1.svg"
import industriesWeServeImg2 from "../assets/industries-we-serve-img-2.svg"
import industriesWeServeImg3 from "../assets/industries-we-serve-img-3.svg"
import industriesWeServeImg4 from "../assets/industries-we-serve-img-4.svg"
import industriesWeServeImg5 from "../assets/industries-we-serve-img-5.svg"
import industriesWeServeImg6 from "../assets/industries-we-serve-img-6.svg"
import registrationStepsImg1 from "../assets/registration-step-img-1.svg";
import registrationStepsImg2 from "../assets/registration-step-img-2.svg";
import registrationStepsImg3 from "../assets/registration-step-img-3.svg";
import registrationStepsImg4 from "../assets/registration-step-img-4.svg";

import WhyChooseAdvanced from "./WhyChooseAdvanced.jsx";
import ContactUsBottomSection from "./ContactUsBottomSection.jsx";

const HomePage = () => {

    const stepsWhoAreWe = [
        {
            image: howWorkImg1,
            altText: " Years of Experience ",
            heading: " Years of Experience ",
            description: ""
        },
        {
            image: howWorkImg2,
            altText: "Global Reach",
            heading: "Global Reach",
            description: ""
        },
        {
            image: howWorkImg3,
            altText: "Industry Expertise",
            heading: "Industry Expertise",
            description: ""
        },
        {
            image: howWorkImg4,
            altText: "Reliable & Ethical Hiring",
            heading: "Reliable & Ethical Hiring",
            description: ""
        }
    ];
    const stepsIndustriesWeServe = [
        {
            image: industriesWeServeImg1,
            altText: " Construction & Engineering",
            heading: " Construction & Engineering ",
            description: ""
        },
        {
            image: industriesWeServeImg2,
            altText: " Hospitality & Catering",
            heading: " Hospitality & Catering ",
            description: ""
        },
        {
            image: industriesWeServeImg3,
            altText: " Healthcare & Nursing",
            heading: " Healthcare & Nursing ",
            description: ""
        },
        {

            image: industriesWeServeImg4,
            altText: " Logistics & Transport",
            heading: " Logistics & Transport ",
            description: ""
        },
        {
            image: industriesWeServeImg5,
            altText: " Security Services",
            heading: " Security Services ",
            description: ""
        },
        {
            image: industriesWeServeImg6,
            altText: " Manufacturing & Industrial",
            heading: " Manufacturing & Industrial",
            description: ""
        },

    ];
    const whyChooseUsItems = [
        {
            subheading: "Industry Expertise & Global Reach ",
            description: "With years of experience in international manpower recruitment, we have built strong partnerships with leading companies across Saudi Arabia, UAE, Qatar, Kuwait, and beyond. Our expertise spans multiple industries, ensuring the right fit for both employers and job seekers."
        },
        {
            subheading: "Hassle-Free Recruitment Process",
            description: "We handle every step of the recruitment process, from job matching to visa processing, making it simple and stress-free. Our strict screening ensures that only the most qualified candidates are selected, while our transparent policies guarantee ethical and fair hiring."
        },
        {
            subheading: "Proven Track Record & Client Satisfaction",
            description: "Trusted by top businesses in the Middle East, we have successfully placed thousands of skilled professionals. Our commitment to quality and ongoing support has earned us a reputation for excellence, ensuring long-term success for both employers and employees."
        }
    ];
    const aboutUsItems = [
        {
            subheading: "Industry Expertise & Global Reach ",
            description: "New Fahim Enterprises (Pvt) Ltd. is a trusted name in human resource recruitment, specializing in sourcing skilled and unskilled manpower from Sri Lanka for global opportunities. With over two decades of experience, we have built a reputation for excellence, integrity, and commitment to connecting job seekers with reputable employers across the Middle East and beyond. Our company, led by Al Haj M.H.M. Farook and Al Haj M.F.M. Fahim, has played a pivotal role in providing thousands of individuals with lucrative employment, helping them secure better livelihoods and career growth. We take pride in our ethical approach, ensuring equal opportunities for all, regardless of caste, creed, or race."
        },
        {
            subheading: "Global Reach and Commitment",
            description: "With established offices in Sri Lanka and branches in Saudi Arabia, Qatar, Kuwait, UAE, Oman, and Bahrain, New Fahim Enterprises (Pvt) Ltd. has built a strong international presence. Our extensive network allows us to efficiently meet the growing demands of employers worldwide. We maintain a vast database of potential candidates, streamlining the hiring process and reducing recruitment costs for our clients. Through our dedication to quality, professionalism, and personalized service, we continue to strengthen our position as a leading manpower recruitment agency, helping businesses find the right talent while empowering individuals with better career prospects."
        }
    ];
    const fromApplicationToEmploymentSectionCardData = [
        {
            imgSrc: registrationStepsImg1,
            title: "Apply & Register",
            description: "Submit your CV or fill out an application form. Choose a job category that matches your skills."
        },
        {
            imgSrc: registrationStepsImg2,
            title: "Screening & Selection",
            description: "We evaluate qualifications and conduct interviews. Trade testing is conducted if required for skilled jobs."
        },
        {
            imgSrc: registrationStepsImg3,
            title: "Documentation & Visa Processing",
            description: "Assistance with paperwork, medical checks, and visa formalities. Ensuring a smooth legal process for overseas employment."
        },
        {
            imgSrc: registrationStepsImg4,
            title: "Deployment & Job Placement",
            description: "Travel arrangements and final preparations. Placement with a trusted employer and job integration."
        }
    ];


    return (
        <>
            <div className="hero-top-section">
                <Hero></Hero>
            </div>
            <HowWork
                title="Who We Are"
                subtext="We specialize in providing skilled manpower solutions for businesses across the globe. Whether you’re an employer looking for reliable staff or a job seeker searching for the right opportunity, we are here to help."
                steps={stepsWhoAreWe}
            />
            <VeCardSection
                heading="Our Mission & Vision"
                subheading="What Drives Us Forward"
                description="At New Fahim Enterprises, we connect skilled professionals with businesses worldwide through ethical,
                                transparent, and high-quality recruitment services. As Sri Lanka’s most trusted manpower agency,
                                we strive to set global standards in workforce management, fostering long-term partnerships built on excellence,
                                integrity, and mutual success."
                cardImage={visionMissionLeftImg}
                cardStyle={{
                    width: '26rem',
                    margin: '-17rem 0 -9rem 0',
                }}
                backgroundImage={visionMissionBg}
            />
            <MarketplaceConnection></MarketplaceConnection>
            <SustainabilitySection
                heading="Why Choose Us?"
                buttonText="Explore More!"
                backgroundImage={sustainabilityBg}
                items={whyChooseUsItems}

            />
            <div id="indsutries">
                <HowWork
                    title="Industries We Serve"
                    subtext="We specialize in recruiting top-tier talent across diverse industries, ensuring businesses get the right professionals for the right roles. From construction and hospitality to healthcare and logistics, we match skilled job seekers with reputable employers worldwide."
                    steps={stepsIndustriesWeServe}
                />
            </div>
            <VeCardSection
                heading="Our Global Presence"
                subheading="Trusted Recruitment Across the Globe"
                description="At New Fahim Enterprises, we specialize in international manpower recruitment, supplying skilled professionals to top companies across the Middle East, Malaysia, Russia, Europe, and beyond. With strong partnerships in Saudi Arabia, UAE, Qatar, Kuwait, Bahrain, and more, we ensure seamless job placements for workers seeking overseas opportunities."
                cardImage={ourGlobalPresenceLeftImg}
                backgroundImage={visionMissionBg}
                cardStyle={{
                    width: '49rem',
                    margin: '-18.2rem 0px -9rem 0',
                }}
            />
            <WhyChooseAdvanced
                title="From Application to Employment"
                description="A simple and transparent recruitment process to connect the right talent with the right employers."
                cardData={fromApplicationToEmploymentSectionCardData}
                buttonText="Invest Ethically Today!"
                buttonLink="#"
            />
            <div id="aboutUs">
                <SustainabilitySection
                    heading="About Us?"
                    backgroundImage={aboutUsBg}
                    items={aboutUsItems}

                />
            </div>
            <div id="contactUs">
                <ContactUsBottomSection></ContactUsBottomSection>
            </div>

        </>

    )
        ;
};

export default HomePage;
