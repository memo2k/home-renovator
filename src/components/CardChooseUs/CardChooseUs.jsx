import React from 'react';
import "./card-choose-us.scss";

const CardChooseUs = ({data, ...props}) => {
  return (
    <div className="grid__col grid__col--1of3" {...props}>
        <div className="card-choose-us">
            <div className="card__icon">
                {data.icon}
            </div>

            <div className="card__title">
                <h3>{data.title}</h3>
            </div>

            <div className="card__description">
                <p>{data.description}</p>
            </div>
        </div>
    </div>
  )
}

export default CardChooseUs