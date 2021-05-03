import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getSingleCharacter } from "../Network/services/characters";
import { getSinglePlanet } from "../Network/services/planets";
import { getSingleShip } from "../Network/services/ships";
import {
  saveCharacterDetail,
  toggleCharacterLoading,
} from "../Redux/actions/characterAction";
import {
  savePlanetDetail,
  togglePlanetsLoading,
} from "../Redux/actions/planetsAction";
import {
  saveStarshipDetail,
  toggleSpaceshipLoading,
} from "../Redux/actions/starshipAction";
import Logo from "../assets/img/logo.png";
import { Characters, Starships, Planets } from "../data/data";
import "./Details.scss";
import { getRandomNumber } from "../utils/functions";
import Button from "../components/Button/Button";
import { NavLink } from "react-router-dom";

const Details = () => {
  const history = useHistory();
  let data = history.location.search;
  let newData = data.split("?")[1].split("=");
  let param = newData[0];
  let id = parseInt(newData[1]);

  let dispatch = useDispatch();
  let characterDetail = useSelector(
    (state) => state.CharacterReducer.characterDetails
  );
  let recentlyViewedCharacters = useSelector(
    (state) => state.CharacterReducer.recentlyViewedCharacters
  );
  let planetDetails = useSelector(
    (state) => state.PlanetsReducer.planetDetails
  );
  let recentlyViewedPlanets = useSelector(
    (state) => state.PlanetsReducer.recentlyViewedPlanets
  );
  let shipDetails = useSelector((state) => state.ShipReducer.shipDetails);
  let recentlyViewedShips = useSelector(
    (state) => state.ShipReducer.recentlyViewedShips
  );

  const fetchDetails = () => {
    switch (param) {
      case "starShipId":
        fetchStarShipDetail();
        break;
      case "characterId":
        fetchCharacterDetail();
        break;
      case "planetId":
        fetchPlanetDetail();
        break;
      default:
        break;
    }
  };

  const fetchStarShipDetail = async () => {
    dispatch(toggleSpaceshipLoading());
    let res = await getSingleShip(id);
    dispatch(saveStarshipDetail(res));
    dispatch(toggleSpaceshipLoading());
  };

  const fetchCharacterDetail = async () => {
    dispatch(toggleCharacterLoading());
    let res = await getSingleCharacter(id);
    dispatch(saveCharacterDetail(res));
    dispatch(toggleCharacterLoading());
  };

  const fetchPlanetDetail = async () => {
    dispatch(togglePlanetsLoading());
    let res = await getSinglePlanet(id);
    dispatch(savePlanetDetail(res));
    dispatch(togglePlanetsLoading());
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <div className="details">
      <div className="logo">
        <NavLink to="/">
        <img src={Logo} alt="logo" />
        </NavLink>
      </div>
      <div className="images_container">
        { param === "starShipId" && <img src={Starships[getRandomNumber(6)]} alt='starship' /> }
        {param === "characterId" && <img src={Characters[getRandomNumber(4)]} alt='character' />}
        {param === "planetId" && <img src={Planets[getRandomNumber(4)]} alt='planet' />}
        
        {/* <div>
          <div>
            {param === "starShipId" && shipDetails?.name}
            {param === "characterId" && characterDetail?.name}
            {param === "planetId" && planetDetails?.name}
          </div>
          <div>
            <Button type="viewMore" icon={<i class="fa fa-chevron-left"></i>} />
            <Button
              type="viewMore"
              icon={<i class="fa fa-chevron-right"></i>}
            />
          </div>
        </div> */}
      </div>
      <div className="details_container">
        <h3>
          {param === "starShipId" && shipDetails?.name}
          {param === "characterId" && characterDetail?.name}
          {param === "planetId" && planetDetails?.name}
        </h3>
        <p>
          Commodo ut excepteur ex officia dolore sint ipsum minim ea anim
          veniam. Dolore qui do eiusmod do. Deserunt adipisicing aliquip labore
          officia. Fugiat magna excepteur ipsum ullamco. Ex est consequat culpa
          ex ad nulla ex proident sit irure reprehenderit. Ex exercitation et
          nulla consectetur aliquip et duis eiusmod duis culpa aute ullamco.
          Commodo ut excepteur ex officia dolore sint ipsum minim ea anim
          veniam. Dolore qui do eiusmod do. Deserunt adipisicing aliquip labore
          officia. Fugiat magna excepteur ipsum ullamco. Ex est consequat culpa
          ex ad nulla ex proident sit irure reprehenderit. Ex exercitation et
          nulla consectetur aliquip et duis eiusmod duis culpa aute ullamco.
        </p>
        <p>
          Commodo ut excepteur ex officia dolore sint ipsum minim ea anim
          veniam. Dolore qui do eiusmod do. Deserunt adipisicing aliquip labore
          officia. Fugiat magna excepteur ipsum ullamco. Ex est consequat culpa
          ex ad nulla ex proident sit irure reprehenderit. Ex exercitation et
          nulla consectetur aliquip et duis eiusmod duis culpa aute ullamco.
          Commodo ut excepteur ex officia dolore sint ipsum minim ea anim
          veniam. Dolore qui do eiusmod do. Deserunt adipisicing aliquip labore
          officia. Fugiat magna excepteur ipsum ullamco. Ex est consequat culpa
          ex ad nulla ex proident sit irure reprehenderit. Ex exercitation et
          nulla consectetur aliquip et duis eiusmod duis culpa aute ullamco.
        </p>
        <p>
          Commodo ut excepteur ex officia dolore sint ipsum minim ea anim
          veniam. Dolore qui do eiusmod do. Deserunt adipisicing aliquip labore
          officia. Fugiat magna excepteur ipsum ullamco. Ex est consequat culpa
          ex ad nulla ex proident sit irure reprehenderit. Ex exercitation et
          nulla consectetur aliquip et duis eiusmod duis culpa aute ullamco.
          Commodo ut excepteur ex officia dolore sint ipsum minim ea anim
          veniam. Dolore qui do eiusmod do. Deserunt adipisicing aliquip labore
          officia. Fugiat magna excepteur ipsum ullamco. Ex est consequat culpa
          ex ad nulla ex proident sit irure reprehenderit. Ex exercitation et
          nulla consectetur aliquip et duis eiusmod duis culpa aute ullamco.
        </p>
      </div>
      <div className="recent_searches"></div>
    </div>
  );
};

export default Details;
