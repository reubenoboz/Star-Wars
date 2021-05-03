import React from "react";
import { NavLink } from "react-router-dom";
import Card from "../Card";
import "./PlanetCard.scss";

const PlanetCard = ({ img, name, id, population }) => {
  return (
    <Card>
      <NavLink to={`/details/?planetId=${id}`}>
        <div className="planet_card">
          <img className="planet_image" src={img} alt="planet" />
          <div className="planet_name">
            <div>Name: {name}</div>
            <div>Population: {population}</div>
          </div>
        </div>
      </NavLink>
    </Card>
  );
};

export default PlanetCard;
