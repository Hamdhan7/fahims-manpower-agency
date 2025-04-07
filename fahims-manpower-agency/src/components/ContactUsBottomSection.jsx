import React from 'react';
import "./ContactUsBottomSection.css"; // Import the CSS file

const ContactUsBottomSection = () => {
    return (
        <section className="contact-us-bottom-section">
            {/* Left Section - Contact Details */}
            <div className="contact-us-text fade-in-up">
                <div className="contact-us-header fade-in-up">
                    <h2>Contact Us</h2>
                    <p>Whether you're an employer seeking top-tier talent or a professional looking for overseas opportunities, we’re here to help. Reach out to us today — let’s build a successful future together.
                    </p>
                </div>
                <div className="contact-us-cards fade-in">
                    <div className="contact-us-card-col-1 fade-in">
                        <div className="contact-us-card fade-in">
                            <h3>SL OFFICE Hours</h3>
                            <p>Monday-Friday</p>
                            <p>8:00 am to 5:00 pm</p>
                        </div>
                        <div className="contact-us-card fade-in">
                            <h3>Email and Fax</h3>
                            <p>new_fahim@yahoo.com <br/> +94 11 2431773</p>
                        </div>
                    </div>
                    <div className="contact-us-card-col-2 fade-in">
                        <div className="contact-us-card fade-in">
                            <h3>Our Address</h3>
                            <p>NO 283-1/1, 2/1, 3/1, <br/>MAIN STREET,
                                COLOMBO-11.
                                SRI LANKA.</p>
                        </div>
                        <div className="contact-us-card fade-in">
                            <h3>Get In Touch</h3>
                            <p>+94 11 2438030 <br/>+94 11 2423935<br/>+94 11 2330692</p>
                            <p>+94 722 242 213 <br/>+94 773 790 121</p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Right Section - Contact Form */}
            <div className="contact-us-form fade-in-up">
                <form>
                    <div className="form-group">
                        <label>Your name</label>
                        <input type="text" placeholder="Enter your name"/>
                    </div>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" placeholder="Enter your email"/>
                    </div>
                    <div className="form-group">
                        <label>Write your message</label>
                        <textarea placeholder="Write us your question here..."></textarea>
                    </div>
                    <button type="submit" className="contact-us-button">Contact today</button>
                </form>
            </div>
        </section>
    );
};

export default ContactUsBottomSection;
