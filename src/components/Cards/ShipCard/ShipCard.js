import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../../Button/Button";
import Card from "../Card";
import "./ShipCard.scss";

const ShipCard = ({ img, title, description, id }) => {
  return (
    <Card>
      <div className="starship_card">
        <img className="starship_image" src={img} alt='starship' />
        <div className="starship_card_details">
          <h3 className="starship_title">{title}</h3>
          <p className="starship_description">{description}</p>
          <p className="starship_btn">
            {" "}
            <NavLink to={`/details/?starShipId=${id}`}>
              <Button
                type="primary"
                text="Read More"
                icon={<i class="fa fa-arrow-right"></i>}
              />
            </NavLink>{" "}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default ShipCard;
