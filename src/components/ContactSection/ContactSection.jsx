import React from 'react';
import "./contact-section.scss";
import backgroundImg from "../../assets/images/background.jpg";
import { Link } from 'react-router-dom';

const ContactSection = () => {
    return (
        <section className="contact" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${backgroundImg})` }}>
            <div className="contact__inner">
                <div className="contact__title">
                    <h1>Want to make your dream home come true? Here is your chance!</h1>
                </div>

                <div className="contact__button">
                    <Link to="/contact" className="btn btn--dark-blue">Request a Quote</Link>
                </div>
            </div>
        </section>
    )
}

export default ContactSection