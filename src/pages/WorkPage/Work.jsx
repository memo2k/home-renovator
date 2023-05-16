import React from 'react';
import "./work.scss";

import bathroomImg from "../../assets/images/bathroom.jpg";
import livingroomImg from "../../assets/images/livingroom.jpg";
import houseImg from "../../assets/images/services-house.jpg";
import livingroomImg2 from "../../assets/images/services-livingroom1.jpg";
import bathroomImg2 from "../../assets/images/services-bathroom2.jpg"
import poolImg from "../../assets/images/services-pool.jpg";
import CardGallery from '../../components/CardGallery/CardGallery';
import ContactSection from '../../components/ContactSection/ContactSection';

const galleryProps = [
    {
        image: bathroomImg,
        text: "Total Bathroom Makeover"
    },
    {
        image: livingroomImg,
        text: "Tasteful Living Room Transformation"
    },
    {
        image: houseImg,
        text: "Stunning Home Transformation"
    },
    {
        image: livingroomImg2,
        text: "Fresh Ambiance"
    },
    {
        image: bathroomImg2,
        text: "Modern Bathroom Renovation"
    },
    {
        image: poolImg,
        text: "Transformed Outdoor Paradise"
    },
]

const Work = () => {
  return (
    <>
        <section className="work">
            <div className="shell">
                <div className="work__inner">
                    <div className="work__subheading">
                        <h2>Previous Works</h2>
                    </div>

                    <div className="work__heading">
                        <h1>Work Gallery</h1>
                    </div>

                    <div className="grid">
                        {galleryProps.map((item, index) => {
                            return <CardGallery data={item} key={index} />
                        })}
                    </div>

                </div>
            </div>
        </section>

        <ContactSection />
    </>
  )
}

export default Work