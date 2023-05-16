import React from 'react';
import "./about.scss";
import ContactSection from '../../components/ContactSection/ContactSection';

import aboutImg from "../../assets/images/about.jpg";

const About = () => {
  return (
    <>
        <section className="about">
            <div className="shell">
                <div className="about__inner">
                    <div className="about__subheading">
                        <h2>Over 40 Years Experience</h2>
                    </div>

                    <div className="about__heading">
                        <h1>Elevating Homes with Expert Craftsmanship.</h1>
                    </div>

                    <div className="about__content">
                        <div className="about__info">
                            <div className="about__info-subheading">
                                <h2>About Us</h2>
                            </div>

                            <div className="about__info-heading">
                                <h1>About Us</h1>
                            </div>

                            <div className="about__description">
                                <p>Our team is dedicated to helping all our clients achieve
                                their goals of extending their home and making
                                their family comfortable, through listening to client's
                                considerations and concerns and putting together all the
                                necessary requirements to ensure a successful building process.</p>
                            </div>
                        </div>

                        <div className="about__image">
                            <img src={aboutImg} alt="" width="1920" height="2880" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <ContactSection />
    </>
  )
}

export default About