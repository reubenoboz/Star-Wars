import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/Layout/Layout";
import { getRandomNumber } from "../utils/functions";
import Button from "../components/Button/Button";
import "./Planets.scss";
import { Planets } from "../data/data";
import { GetAllPlanets } from "../Network/services/planets";
import {
  changePlanetsPageNumber,
  savePlanets,
  togglePlanetsLoading,
} from "../Redux/actions/planetsAction";
import PopularPlanets from "./HomeComponents/PopularPlanets";

const PlanetsHome = () => {
  const dispatch = useDispatch();
  const planets = useSelector((state) => state.PlanetsReducer.planets);
  const isLoadingPlanets = useSelector(
    (state) => state.PlanetsReducer.isLoadingPlanets
  );
  const hasNext = useSelector((state) => state.PlanetsReducer.hasNext);
  const hasPrev = useSelector((state) => state.PlanetsReducer.hasPrev);
  const page = useSelector((state) => state.PlanetsReducer.page);
  const count = useSelector((state) => state.PlanetsReducer.count);

  const getPlanets = async (pageNumber = 1) => {
    dispatch(togglePlanetsLoading);
    let res = await GetAllPlanets(pageNumber);
    dispatch(savePlanets(res));
    dispatch(togglePlanetsLoading);
  };

  const handlePageChange = async (pageNumber) => {
    getPlanets(pageNumber)
    dispatch(changePlanetsPageNumber(pageNumber));
  };

  useEffect(() => {
    getPlanets();
  }, []);

  return (
    <Layout>
      <div className="planets">
        <h1 className="sub_heading">
          <span className="title">Popular Planets</span>
        </h1>

        <PopularPlanets
          planets={planets}
          Planets={Planets}
          getRandomNumber={getRandomNumber}
          isLoadingPlanets={isLoadingPlanets}
        />

        {planets.length !== 0 && (
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

export default PlanetsHome;
