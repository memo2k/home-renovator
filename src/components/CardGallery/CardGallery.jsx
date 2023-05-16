import React from 'react';
import "./card-gallery.scss";
import { Link } from 'react-router-dom';

const CardGallery = ({ data, ...props }) => {
  return (
    <div className="grid__col grid__col--1of2" {...props}>
        <div className="card-gallery">
            <Link>
                <div className="card__image">
                    <img src={data.image} alt="" />
                </div>

                <div className="card__description">
                    <p>{data.text}</p>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default CardGallery