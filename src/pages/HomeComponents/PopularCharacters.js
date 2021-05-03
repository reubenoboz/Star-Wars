import { Col, Row, Spin } from "antd";
import React, { Fragment } from "react";
import CharacterCard from "../../components/Cards/CharacterCard/CharacterCard";
import "../Home.scss";

const PopularCharacters = ({
  characters,
  Characters,
  getRandomNumber,
  isLoadingCharacters,
  filterTerm,
  genderTerm
}) => {
  return (
    <Fragment>
      {isLoadingCharacters ? (
        <div className="loading_container">
          <Spin tip="Loading Characters..." />
        </div>
      ) : (
        <Fragment>
          {characters?.length === 0 ? (
            <div className="no_data">No data</div>
          ) : (
            <Fragment>
              {/* Check for no data after search filtering */}
              {characters?.filter((term) =>
                term.name.toLowerCase().includes(filterTerm.toLowerCase())
              ).length === 0 && <div className="no_data">No data</div>} 

              {/* Check for no data after gender filter */}
              {characters?.filter((term) =>
                term.name.toLowerCase().includes(genderTerm.toLowerCase())
              ).length === 0 && <div className="no_data">No data</div>} 
              <Row gutter={50}>
                {/* Filtering characters using filter term from redux */}
                {characters
                  ?.filter((term) =>
                    term.name.toLowerCase().includes(filterTerm.toLowerCase())
                  )
                  ?.filter((term) =>
                    term.gender.toLowerCase().includes(genderTerm.toLowerCase())
                  )
                  ?.map((character, index) => (
                    <Col
                      xs={24}
                      md={12}
                      key={`character${index}`}
                      className="mb-3"
                    >
                      <CharacterCard
                        title={character.name}
                        description={`${character.name} is a male gender who was born in ${character.birth_year}. He has a ${character.eye_color} eye color, with a height of ${character.height} and a weight of ${character.weight}. He has a ${character.hair_color} and a ${character.skin_color} skin color. `}
                        img={Characters[getRandomNumber(4)]}
                        id={character.url.split("/")[5]}
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

export default PopularCharacters;
