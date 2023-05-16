import React from 'react';
import "./services.scss";
import CardServices from "../../components/CardServices/CardServices";
import ContactSection from '../../components/ContactSection/ContactSection';

import makeoverImg1 from "../../assets/images/services-pool.jpg";
import makeoverImg2 from "../../assets/images/services-house.jpg";
import bathroomImg1 from "../../assets/images/services-bathroom1.jpg";
import bathroomImg2 from "../../assets/images/services-bathroom2.jpg";
import livingroomImg1 from "../../assets/images/services-livingroom1.jpg";
import livingroomImg2 from "../../assets/images/services-livingroom2.jpg";

const servicesProps = [
    {
        firstImg: makeoverImg1,
        secondImg: makeoverImg2,
        heading: "Complete Makeovers",
        description: "By working with you in the planning phase to help work out a dedicated budget that takes everything into account. We then project manage your apartment renovation from start to finish and deliver your project on time and to the highest standard."
    },
    {
        firstImg: bathroomImg1,
        secondImg: bathroomImg2,
        heading: "Bathrooms",
        description: "Complete kitchen and bathroom renovations are our bread and butter, and we have lost count on how many we have worked on - from smaller renovations to apartment renovations to terraces renovations."
    },
    {
        firstImg: livingroomImg1,
        secondImg: livingroomImg2,
        heading: "Living Rooms",
        description: "Like the bedroom, colour is making is making its way into our living rooms. You can do this using paint, artworks or with accessories or soft furnishings like cushions, rugs and window treatments."
    },
]

const Services = () => {
    return (
        <>
            <section className="services">
                <div className="shell">
                    <div className="services__inner">
                        <div className="services__subheading">
                            <h2>What Do We Do?</h2>
                        </div>

                        <div className="services__heading">
                            <h1>What Do We Do?</h1>
                        </div>

                        <div className="services__cards">
                            <div className="card-services">
                                <div className="card__images">
                                    <div className="card__image">
                                        <img src={servicesProps[0].firstImg} alt="" />
                                    </div>

                                    <div className="card__image">
                                        <img src={servicesProps[0].secondImg} alt="" />
                                    </div>
                                </div>

                                <div className="card__description">
                                    <div className="card__heading">
                                        <h1>{servicesProps[0].heading}</h1>
                                    </div>

                                    <div className="card__paragraph">
                                        <p>{servicesProps[0].description}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="card-services">
                                <div className="card__description">
                                    <div className="card__heading">
                                        <h1>{servicesProps[1].heading}</h1>
                                    </div>

                                    <div className="card__paragraph">
                                        <p>{servicesProps[1].description}</p>
                                    </div>
                                </div>

                                <div className="card__images">
                                    <div className="card__image">
                                        <img src={servicesProps[1].firstImg} alt="" />
                                    </div>

                                    <div className="card__image">
                                        <img src={servicesProps[1].secondImg} alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className="card-services">
                                <div className="card__images">
                                    <div className="card__image">
                                        <img src={servicesProps[2].firstImg} alt="" />
                                    </div>

                                    <div className="card__image">
                                        <img src={servicesProps[2].secondImg} alt="" />
                                    </div>
                                </div>

                                <div className="card__description">
                                    <div className="card__heading">
                                        <h1>{servicesProps[2].heading}</h1>
                                    </div>

                                    <div className="card__paragraph">
                                        <p>{servicesProps[2].description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ContactSection />
        </>
    )
}

export default Services