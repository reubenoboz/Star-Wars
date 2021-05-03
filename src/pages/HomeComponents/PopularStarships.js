import { Col, Row, Spin } from "antd";
import React, { Fragment } from "react";
import ShipCard from "../../components/Cards/ShipCard/ShipCard";
import "../Home.scss";

const PopularStarships = ({
  starships,
  Starships,
  getRandomNumber,
  isLoadingShips,
}) => {
  return (
    <Fragment>
      {isLoadingShips ? (
        <div className="loading_container">
          <Spin tip="Loading Starships..." />
        </div>
      ) : (
        <Fragment>
          {starships.length === 0 ? (
            <div className="no_data">No Data</div>
          ) : (
            <Fragment>
              <Row gutter={50}>
                {starships?.map((ship, index) => (
                  <Col
                    xs={24}
                    md={12}
                    lg={8}
                    className="mb-3"
                    key={`ship${index}`}
                  >
                    <ShipCard
                      title={ship.name}
                      description={`This is a ${ship.model} manufactured by ${ship.manufacturer}. It costs ${ship.cost_in_credits} and is ${ship.length} with a maximum speed of ${ship.max_atmosphering_speed}. This ship can hold a crew of ${ship.crew} and ${ship.passengers} passengers. It has a cargo capacity of${ship.cargo_capacity} and consumables for ${ship.consumables}`}
                      img={Starships[getRandomNumber(6)]}
                      id={ship.url.split("/")[5]}
                    />
                  </Col>
                ))}
              </Row>
            </Fragment>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default PopularStarships;
