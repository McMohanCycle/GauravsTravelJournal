import React from "react";
import { Pin } from "../assets/icons";

function Card({ data, isDark }) {
  const {
    title,
    location,
    googleMapsUrl,
    startDate,
    endDate,
    description,
    imageUrl,
  } = data;
  return (
    <div className="card-container">
      <img
        src={imageUrl}
        alt={`${title}, ${location}`}
        className="card-main-img"
      />
      <div className="card-details-container">
        <div className="location-details">
          <img src={Pin} alt="Map pin icon" />
          <p className="location-name-p">{location}</p>
          <a href={googleMapsUrl} target="_blank" className="location-a">
            View on Google Maps
          </a>
        </div>
        <h1 className="details-h1">{title}</h1>
        <h4 className="details-date-h4">
          {startDate} - {endDate}
        </h4>
        <p className="details-desc-p">{description}</p>
      </div>
    </div>
  );
}

export default Card;
