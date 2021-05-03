import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/Layout/Layout";
import { GetAllCharacters } from "../Network/services/characters";
import {
  saveCharacters,
  toggleCharacterLoading,
} from "../Redux/actions/characterAction";
import { Characters, Starships, Planets } from "../data/data";
import { getRandomNumber } from "../utils/functions";
import "./Home.scss";
import { GetAllShips } from "../Network/services/ships";
import {
  saveStarships,
  toggleSpaceshipLoading,
} from "../Redux/actions/starshipAction";
import Button from "../components/Button/Button";
import { NavLink } from "react-router-dom";
import { GetAllPlanets } from "../Network/services/planets";
import {
  savePlanets,
  togglePlanetsLoading,
} from "../Redux/actions/planetsAction";
import PopularStarships from "./HomeComponents/PopularStarships";
import PopularPlanets from "./HomeComponents/PopularPlanets";
import PopularCharacters from "./HomeComponents/PopularCharacters";

const Home = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.CharacterReducer.characters);
  const isLoadingCharacters = useSelector(
    (state) => state.CharacterReducer.isLoadingCharacters
  );
  const starships = useSelector((state) => state.ShipReducer.starShips);
  const isLoadingShips = useSelector(
    (state) => state.ShipReducer.isLoadingShips
  );
  const planets = useSelector((state) => state.PlanetsReducer.planets);
  const isLoadingPlanets = useSelector(
    (state) => state.PlanetsReducer.isLoadingPlanets
  );

  const getCharacters = async () => {
    dispatch(toggleCharacterLoading());
    let res = await GetAllCharacters();
    dispatch(saveCharacters(res));
    dispatch(toggleCharacterLoading());
  };

  const getStarShips = async () => {
    dispatch(toggleSpaceshipLoading());
    let res = await GetAllShips();
    dispatch(saveStarships(res));
    dispatch(toggleSpaceshipLoading());
  };

  const getPlanets = async () => {
    dispatch(togglePlanetsLoading);
    let res = await GetAllPlanets();
    dispatch(savePlanets(res));
    dispatch(togglePlanetsLoading);
  };

  useEffect(() => {
    getCharacters();
    getStarShips();
    getPlanets();
  }, []);

  return (
    <Layout>
      <div className="home">
        <Fragment>
          <h1 className="sub_heading">
            <span className="title">Popular Starships</span>
          </h1>
          <PopularStarships
            starships={starships.slice(0, 6)}
            Starships={Starships}
            getRandomNumber={getRandomNumber}
            isLoadingShips={isLoadingShips}
          />

          <p className="view_more_btn">
            <NavLink to="/ships">
              <Button text="VIEW MORE" type="view-more" />
            </NavLink>
          </p>
        </Fragment>

        <Fragment>
          <h1 className="sub_heading">
            <span className="title">Popular Planets</span>
          </h1>

          <PopularPlanets
            planets={planets.slice(0, 6)}
            Planets={Planets}
            getRandomNumber={getRandomNumber}
            isLoadingPlanets={isLoadingPlanets}
          />

          <p className="view_more_btn">
            <NavLink to="/planets">
              <Button text="VIEW MORE" type="view-more" />
            </NavLink>
          </p>
        </Fragment>

        <Fragment>
          <h1 className="sub_heading">
            <span className="title">Popular Characters</span>
          </h1>

          <PopularCharacters
            characters={characters.slice(0, 4)}
            Characters={Characters}
            getRandomNumber={getRandomNumber}
            isLoadingCharacters={isLoadingCharacters}
          />

          <p className="view_more_btn">
            <NavLink to="/characters">
              <Button text="VIEW MORE" type="view-more" />
            </NavLink>
          </p>
        </Fragment>
      </div>
    </Layout>
  );
};

export default Home;
