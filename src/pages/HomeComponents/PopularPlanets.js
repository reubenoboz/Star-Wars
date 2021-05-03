import { Col, Row, Spin } from "antd";
import React, { Fragment } from "react";
import PlanetCard from "../../components/Cards/PlanetCard/PlanetCard";
import "../Home.scss";

const PopularPlanets = ({
  planets,
  Planets,
  getRandomNumber,
  isLoadingPlanets,
  filterTerm
}) => {
  return (
    <Fragment>
      {isLoadingPlanets ? (
        <div className="loading_container">
          <Spin tip="Loading Characters..." />
        </div>
      ) : (
        <Fragment>
          {planets?.length === 0 ? (
            <div className="no_data">No data</div>
          ) : (
            <Fragment>

{planets?.filter((term) => term.name.toLowerCase().includes(filterTerm.toLowerCase())).length === 0 && <div className="no_data">No data</div>}
              <Row gutter={50}>
                {planets?.filter((term) => term.name.toLowerCase().includes(filterTerm.toLowerCase()))?.map((planet, index) => (
                  <Col
                    xs={24}
                    md={12}
                    lg={8}
                    key={`planets${index}`}
                    className="mb-3"
                  >
                    <PlanetCard
                      name={planet.name}
                      img={Planets[getRandomNumber(3)]}
                      id={planet.url.split("/")[5]}
                      population={planet.population}
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

export default PopularPlanets;
