import {SAVE_STARSHIPS, TOGGLE_SPACESHIP_LOADING} from '../actionTypes'

const initialState = {
  starShips: [],
  recentlyViewedShips: [],
  isLoadingShips: false
}

const ShipReducer = (state = initialState, action) => {
    switch (action.type) {
      case SAVE_STARSHIPS:
        let data = action.payload
        return {
          ...state,
          starShips: data.results,
        };
        case TOGGLE_SPACESHIP_LOADING: 
        return {
          ...state,
          isLoadingShips: !state.isLoadingShips
        }
      default:
        return state;
    }
  };
  
  export default ShipReducer;
  