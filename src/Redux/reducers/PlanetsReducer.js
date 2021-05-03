import {SAVE_PLANETS, TOGGLE_PLANETS_LOADING} from '../actionTypes'

const initialState = {
  planets: [],
  recentlyViewedPlanets: [],
  isLoadingPlanets: false
}

const PlanetsReducer = (state = initialState, action) => {
    switch (action.type) {
      case SAVE_PLANETS:
        let data = action.payload
        return {
          ...state,
          planets: data.results,
        };
        case TOGGLE_PLANETS_LOADING:
            return{
                ...state,
                isLoadingPlanets: !state.isLoadingPlanets
            }
      default:
        return state;
    }
  };
  
  export default PlanetsReducer;
  