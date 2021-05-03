import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/Layout/Layout";
import { getRandomNumber } from "../utils/functions";
import "./Ships.scss";
import { GetAllShips } from "../Network/services/ships";
import {
  saveStarships,
  toggleSpaceshipLoading,
  changeShipPageNumber
} from "../Redux/actions/starshipAction";
import PopularStarships from "./HomeComponents/PopularStarships";
import { Starships } from "../data/data";
import Button from "../components/Button/Button";

const Ships = () => {
  const dispatch = useDispatch();
  const starships = useSelector((state) => state.ShipReducer.starShips);
  const isLoadingShips = useSelector(
    (state) => state.ShipReducer.isLoadingShips
  );
  const hasNext = useSelector((state) => state.ShipReducer.hasNext);
  const hasPrev = useSelector((state) => state.ShipReducer.hasPrev);
  const page = useSelector((state) => state.ShipReducer.page);
  const count = useSelector((state) => state.ShipReducer.count);

  const getStarShips = async (pageNumber = 1) => {
    dispatch(toggleSpaceshipLoading());
    let res = await GetAllShips(pageNumber);
    dispatch(saveStarships(res));
    dispatch(toggleSpaceshipLoading());
  };

  const handlePageChange = async (pageNumber) => {
    getStarShips(pageNumber)
    dispatch(changeShipPageNumber(pageNumber))
  }

  useEffect(() => {
    getStarShips();
  }, []);

  return (
    <Layout>
      <div className="ships">
        <h1 className="sub_heading">
          <span className="title">Popular Starships</span>
        </h1>
        <PopularStarships
          starships={starships}
          Starships={Starships}
          getRandomNumber={getRandomNumber}
          isLoadingShips={isLoadingShips}
        />

        {starships.length !== 0 && (
          <div className="pagination_container">
            <span className='mr-2 pagination_text'> Page {page} of {Math.ceil(count/10)} </span>
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

export default Ships;
