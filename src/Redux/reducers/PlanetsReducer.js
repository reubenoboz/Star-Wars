import {
  CHANGE_PLANETS_PAGENUMBER,
  SAVE_PLANETS,
  SAVE_SINGLE_PLANETS,
  TOGGLE_PLANETS_LOADING,
} from "../actionTypes";

const initialState = {
  planets: [],
  recentlyViewedPlanets: [],
  isLoadingPlanets: false,
  page: 1,
  count: 0,
  hasNext: false,
  hasPrev: false,
  planetDetails: {}
};

const PlanetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_PLANETS:
      let data = action.payload;
      return {
        ...state,
        planets: data.results,
        count: data.count,
        hasNext: data.next != null ? true : false,
        hasPrev: data.previous != null ? true : false,
      };
    case TOGGLE_PLANETS_LOADING:
      return {
        ...state,
        isLoadingPlanets: !state.isLoadingPlanets,
      };
    case CHANGE_PLANETS_PAGENUMBER:
      return {
        ...state,
        page: action.payload,
      };
      case SAVE_SINGLE_PLANETS:
      return {
        ...state,
        planetDetails: action.payload,
      };
    default:
      return state;
  }
};

export default PlanetsReducer;
