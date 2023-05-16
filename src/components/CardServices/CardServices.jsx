import React from 'react';
import "./card-services.scss";

const CardServices = ({ data, ...props }) => {
  return (
    <div className="card-services" {...props}>
        <div className="card__images">
            <div className="card__image">
                <img src={data.firstImg} alt="" />
            </div>

            <div className="card__image">
                <img src={data.secondImg} alt="" />
            </div>
        </div>

        <div className="card__description">
            <div className="card__heading">
                <h1>{data.heading}</h1>
            </div>

            <div className="card__paragraph">
                <p>{data.description}</p>
            </div>
        </div>
    </div>
  )
}

export default CardServices