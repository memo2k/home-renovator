import React from 'react';
import "./card-category.scss";

const CardCategory = ({ data, ...props }) => {
  return (
    <div className="card-category" {...props}>
        <div className="card__heading">
            <h1>{data.heading}</h1>
        </div>

        <div className="card__bottom">
            <div className="card__subheading">
                <h2>Category</h2>
            </div>

            <div className="card__description">
                <p>{data.description}</p>
            </div>
        </div>
    </div>
  )
}

export default CardCategory