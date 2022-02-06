import React from "react";
import "./Cards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faPhoneAlt, faCog } from "@fortawesome/free-solid-svg-icons";
const Cards = () => {
  return (
    <div className="cards">
      <div className="card-1">
        <FontAwesomeIcon icon={faGlobe} size="3x" spin />
        <h2 className="styled-h-2 mt-2">Book Online</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
          provident dolores, maiores saepe sed iure.
        </p>
      </div>
      <div className="card-2">
        <FontAwesomeIcon icon={faPhoneAlt} size="3x" flip="horizontal" />
        <h2 className="styled-h-2 mt-2">Phone</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
          provident dolores, maiores saepe sed iure.
        </p>
      </div>
      <div className="card-3">
        <FontAwesomeIcon icon={faCog} size="3x" spin />
        <h2 className="styled-h-2 mt-2">Repair</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
          provident dolores, maiores saepe sed iure.
        </p>
      </div>
    </div>
  );
};

export default Cards;
