import React from 'react';
import "./testimonial.scss";
import quotationMarks from "../../assets/images/quotation-marks.png";

const Testimonial = ({ activeIndex, carouselProps }) => {
    return (
        <>
            {carouselProps.map((item, index) => {
                return <div className={ activeIndex === index ? "testimonial active-testimonial" : "testimonial"} key={index}>
                    <div className="testimonial__image">
                        <img src={item.image} alt="" />
                    </div>

                    <div className="testimonial__info">
                        <div className="testimonial__qutotaion-marks">
                            <img src={quotationMarks} alt="" />
                        </div>

                        <div className="testimonial__heading">
                            <h1>{item.heading}</h1>
                        </div>

                        <div className="testimonial__description">
                            <p>{item.description}</p>
                        </div>

                        <div className="testimonial__author">
                            <p>{item.author}</p>
                        </div>
                    </div>
                </div>
            })}
        </>
    )
}

export default Testimonial