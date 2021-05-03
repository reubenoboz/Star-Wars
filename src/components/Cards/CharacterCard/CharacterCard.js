import React from "react";
import { NavLink } from "react-router-dom";
import Card from "../Card";
import "./CharacterCard.scss";

const CharacterCard = ({ img, title, subtitle, description, id }) => {
  return (
    <Card>
      <div className="character_card">
        <img className="character_image" src={img} alt="character" />
        <div className="character_card_details">
          <h3 className="character_title">{title}</h3>
          <h5 className="character_subtitle">{subtitle}</h5>
          <p className="character_description">
            {description}{" "}
            <NavLink to={`/details/?characterId=${id}`} className="read_more">
              Read More
            </NavLink>
          </p>
        </div>
      </div>
    </Card>
  );
};

export default CharacterCard;
