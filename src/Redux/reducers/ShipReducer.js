import {SAVE_STARSHIPS, TOGGLE_SPACESHIP_LOADING, CHANGE_STARSHIP_PAGENUMBER} from '../actionTypes'

const initialState = {
  starShips: [],
  recentlyViewedShips: [],
  page: 1,
  count: 0,
  hasNext: false,
  hasPrev: false,
  isLoadingShips: false
}

const ShipReducer = (state = initialState, action) => {
    switch (action.type) {
      case SAVE_STARSHIPS:
        let data = action.payload
        return {
          ...state,
          starShips: data.results,
          count: data.count,
          hasNext: data.next != null ? true : false,
          hasPrev: data.previous != null ? true : false,
        };
        case TOGGLE_SPACESHIP_LOADING: 
        return {
          ...state,
          isLoadingShips: !state.isLoadingShips
        }
        case CHANGE_STARSHIP_PAGENUMBER: 
        return {
          ...state,
          page: action.payload
        }
      default:
        return state;
    }
  };
  
  export default ShipReducer;
  