import React from 'react';
import "./home.scss";
import bathroomImg from "../../assets/images/bathroom.jpg";
import CardCategory from '../../components/CardCategory/CardCategory';
import livingroomImg from "../../assets/images/livingroom.jpg";
import homeImg from "../../assets/images/home.jpg";
import CardChooseUs from '../../components/CardChooseUs/CardChooseUs';

// Props for CardCategory
const cardCategoryProps = [
    {
        heading: "Specific Room Renovations",
        description: "Transforming spaces through creative design and meticulous craftsmanship."
    },
    {
        heading: "Interior Design",
        description: "Elevating spaces with inspired aesthetics and personalized, functional design solutions."
    },
    {
        heading: "Home Extensions",
        description: "Expanding living possibilities with seamless integration and innovative architectural solutions."
    },
    {
        heading: "Total Makeovers",
        description: "Revitalize your space with a complete transformation, turning vision into reality."
    }
]

// Props for CardChooseUs
const cardChooseUsProps = [
    {
        icon: <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M64 48c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16h80V400c0-26.5
             21.5-48 48-48s48 21.5 48 48v64h80c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64zM0
            64C0 28.7 28.7 0 64 0H320c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3
            0-64-28.7-64-64V64zm88 40c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2
            16-16 16H104c-8.8 0-16-7.2-16-16V104zM232 88h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2
            16-16 16H232c-8.8 0-16-7.2-16-16V104c0-8.8 7.2-16 16-16zM88 232c0-8.8 7.2-16
            16-16h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H104c-8.8 0-16-7.2-16-16V232zm144-16h48c8.8
            0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H232c-8.8 0-16-7.2-16-16V232c0-8.8 7.2-16 16-16z"/>
        </svg>,
        title: "8,000 Builds",
        description: "Over 40 years building new houses and transforming existing homes in Perth."
    },
    {
        icon: <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <path d="M64 64a64 64 0 1 1 128 0A64 64 0 1 1 64 64zM25.9 233.4C29.3 191.9
            64 160 105.6 160h44.8c27 0 51 13.4 65.5 34.1c-2.7 1.9-5.2 4-7.5 6.3l-64
            64c-21.9 21.9-21.9 57.3 0 79.2L192 391.2V464c0 26.5-21.5 48-48 48H112c-26.5
            0-48-21.5-48-48V348.3c-26.5-9.5-44.7-35.8-42.2-65.6l4.1-49.3zM448 64a64 64
            0 1 1 128 0A64 64 0 1 1 448 64zM431.6 200.4c-2.3-2.3-4.9-4.4-7.5-6.3c14.5-20.7
            38.6-34.1 65.5-34.1h44.8c41.6 0 76.3 31.9 79.7 73.4l4.1 49.3c2.5 29.8-15.7
            56.1-42.2 65.6V464c0 26.5-21.5 48-48 48H496c-26.5 0-48-21.5-48-48V391.2l47.6-47.6c21.9-21.9
            21.9-57.3 0-79.2l-64-64zM272 240v32h96V240c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l64
            64c9.4 9.4 9.4 24.6 0 33.9l-64 64c-6.9 6.9-17.2 8.9-26.2 5.2s-14.8-12.5-14.8-22.2V336H272v32c0
            9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-64-64c-9.4-9.4-9.4-24.6 0-33.9l64-64c6.9-6.9 17.2-8.9
            26.2-5.2s14.8 12.5 14.8 22.2z"/>
        </svg>,
        title: "Our Difference",
        description: "Our people are our difference! Many have worked with us for over 20 years."
    },
    {
        icon: <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M345 39.1L472.8 168.4c52.4 53 52.4 138.2 0
         191.2L360.8 472.9c-9.3 9.4-24.5 9.5-33.9 .2s-9.5-24.5-.2-33.9L438.6 
         325.9c33.9-34.3 33.9-89.4 0-123.7L310.9 72.9c-9.3-9.4-9.2-24.6 
         .2-33.9s24.6-9.2 33.9 .2zM0 229.5V80C0 53.5 21.5 32 48 32H197.5c17 0 
         33.3 6.7 45.3 18.7l168 168c25 25 25 65.5 0 90.5L277.3 442.7c-25 25-65.5 
         25-90.5 0l-168-168C6.7 262.7 0 246.5 0 229.5zM144 144a32 32 0 1 0 -64 
         0 32 32 0 1 0 64 0z"/>
        </svg>,
        title: "Pay Later Offer",
        description: "Save time, hassles and money! No repayments and no interest for 12 months."
    },
    {
        icon: <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7
            64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8
            0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8
            0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0
            16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/>
        </svg>,
        title: "Access to All Files",
        description: "You will have free access to all files and documents including the architectural plan."
    },
    {
        icon: <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M469.3 19.3l23.4 23.4c25 25 25 65.5 0 90.5l-56.4 56.4L322.3
             75.7l56.4-56.4c25-25 65.5-25 90.5 0zM44.9 353.2L299.7 98.3 413.7
            212.3 158.8 467.1c-6.7 6.7-15.1 11.6-24.2 14.2l-104 29.7c-8.4 2.4-17.4
            .1-23.6-6.1s-8.5-15.2-6.1-23.6l29.7-104c2.6-9.2 7.5-17.5 14.2-24.2zM249.4
            103.4L103.4 249.4 16 161.9c-18.7-18.7-18.7-49.1 0-67.9L94.1 16c18.7-18.7
            49.1-18.7 67.9 0l19.8 19.8c-.3 .3-.7 .6-1 .9l-64 64c-6.2 6.2-6.2 16.4 0
            22.6s16.4 6.2 22.6 0l64-64c.3-.3 .6-.7 .9-1l45.1 45.1zM408.6 262.6l45.1
            45.1c-.3 .3-.7 .6-1 .9l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6
            0l64-64c.3-.3 .6-.7 .9-1L496 350.1c18.7 18.7 18.7 49.1 0 67.9L417.9
            496c-18.7 18.7-49.1 18.7-67.9 0l-87.4-87.4L408.6 262.6z"/>
        </svg>,
        title: "Design & Planning",
        description: "Home Renovator can help you design and plan your dream renovation project!"
    },
    {
        icon: <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80
            80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6
            86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3
            0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"/>
        </svg>,
        title: "Improved Homes",
        description: "New homes, knockdown rebuilds, renovations, ground floor and 2nd store extensions."
    }
]

const Home = () => {
    return (
        <>
            <section className="hero">
                <div className="shell">
                    <div className="hero__inner">
                        <div className="hero__description">
                            <div className="hero__subheading">
                                <h2>Home Remodelling & Renovation</h2>
                            </div>

                            <div className="hero__heading">
                                <h1>Enhance Your Favorite Lifestyle</h1>
                            </div>

                            <div className="hero__paragraph">
                                <p>As Perth's leading designers and builders
                                    of home renovations, we can design and
                                    construct a renovation to turn your house
                                    into your dream home. Give your home a makeover!</p>
                            </div>

                            <div className="hero__button">
                                <button className="btn btn--dark-blue">Request a Quote</button>
                            </div>
                        </div>

                        <div className="hero__image">
                            <img src={bathroomImg} alt="" width="1920" height="2304" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="categories">
                <div className="shell">
                    <div className="categories__inner">
                        <div className="categories__cards">
                            <CardCategory {...cardCategoryProps[0]} />
                            <CardCategory {...cardCategoryProps[1]} />
                            <CardCategory {...cardCategoryProps[2]} />
                            <CardCategory {...cardCategoryProps[3]} />
                        </div>

                        <div className="categories__images">
                            <div className="categories__image">
                                <img src={livingroomImg} alt="" width="1919" height="1251" />
                            </div>

                            <div className="categories__image">
                                <img src={homeImg} alt="" width="1920" height="2880" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="choose-us">
                <div className="shell">
                    <div className="choose-us__inner">
                        <div className="choose-us__subheading">
                            <h2>Why Choose Us?</h2>
                        </div>

                        <div className="choose-us__heading">
                            <h1>Why You Should Start Working with Us Right Away</h1>
                        </div>

                        <div className="choose-us__cards">
                            <div className="grid">
                                <CardChooseUs {...cardChooseUsProps[0]} />
                                <CardChooseUs {...cardChooseUsProps[1]} />
                                <CardChooseUs {...cardChooseUsProps[2]} />
                                <CardChooseUs {...cardChooseUsProps[3]} />
                                <CardChooseUs {...cardChooseUsProps[4]} />
                                <CardChooseUs {...cardChooseUsProps[5]} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home