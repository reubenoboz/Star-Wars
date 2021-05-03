import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/Layout/Layout";
import { GetAllCharacters } from "../Network/services/characters";
import {
  changeCharacterPageNumber,
  saveCharacters,
  toggleCharacterLoading,
} from "../Redux/actions/characterAction";
import { Characters } from "../data/data";
import { getRandomNumber } from "../utils/functions";
import Button from "../components/Button/Button";
import "./Characters.scss";
import PopularCharacters from "./HomeComponents/PopularCharacters";

const CharactersHome = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.CharacterReducer.characters);
  const isLoadingCharacters = useSelector(
    (state) => state.CharacterReducer.isLoadingCharacters
  );
  const hasNext = useSelector((state) => state.CharacterReducer.hasNext);
  const hasPrev = useSelector((state) => state.CharacterReducer.hasPrev);
  const page = useSelector((state) => state.CharacterReducer.page);
  const count = useSelector((state) => state.CharacterReducer.count);

  const getCharacters = async (pageNumber = 1) => {
    dispatch(toggleCharacterLoading());
    let res = await GetAllCharacters(pageNumber);
    dispatch(saveCharacters(res));
    dispatch(toggleCharacterLoading());
  };

  const handlePageChange = async (pageNumber) => {
    getCharacters(pageNumber);
    dispatch(changeCharacterPageNumber(pageNumber));
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <Layout>
      <div className="characters">
        <h1 className="sub_heading">
          <span className="title">Popular Characters</span>
        </h1>

        <div className="filter_container my-3">
          <div className="filter">
            <label className="mr-1">FILTER:</label>
            <select className="px-2">
              <option value="">None</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="robot">Robot</option>
            </select>
          </div>
          <div className="view ml-3">
            <label className="mr-1">VIEW:</label>
            <select className="px-2">
              <option value="grid">Grid</option>
              <option value="list">List</option>
            </select>
          </div>
        </div>

        <PopularCharacters
          characters={characters}
          Characters={Characters}
          getRandomNumber={getRandomNumber}
          isLoadingCharacters={isLoadingCharacters}
        />

        {characters.length !== 0 && (
          <div className="pagination_container">
            <span className="mr-2 pagination_text">
              {" "}
              Page {page} of {Math.ceil(count / 10)}{" "}
            </span>
            <Button
              handleClick={() => handlePageChange(page - 1)}
              disabled={!hasPrev}
              type="pagination"
              text="Previous"
              icon={<i class="fa fa-chevron-left"></i>}
              iconPosition="left"
            />
            <Button
              disabled={!hasNext}
              handleClick={() => handlePageChange(page + 1)}
              className="ml-1"
              type="pagination"
              text="Next"
              icon={<i class="fa fa-chevron-right"></i>}
            />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CharactersHome;
