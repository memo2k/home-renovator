import React from 'react';
import "./card-choose-us.scss";

const CardChooseUs = ({icon, title, description, ...props}) => {
  return (
    <div className="grid__col grid__col--1of3">
        <div className="card-choose-us">
            <div className="card__icon">
                {icon}
            </div>

            <div className="card__title">
                <h3>{title}</h3>
            </div>

            <div className="card__description">
                <p>{description}</p>
            </div>
        </div>
    </div>
  )
}

export default CardChooseUs