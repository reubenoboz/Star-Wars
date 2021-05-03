import {SAVE_STARSHIPS, TOGGLE_SPACESHIP_LOADING, CHANGE_STARSHIP_PAGENUMBER, SAVE_SINGLE_STARSHIPS} from '../actionTypes'

export const saveStarships = (payload) => {
    return {
      type: SAVE_STARSHIPS,
      payload,
    };
  };

  export const toggleSpaceshipLoading = () => {
    return {
      type: TOGGLE_SPACESHIP_LOADING
    }
  }

  export const changeShipPageNumber = (payload) => {
    return {
      type: CHANGE_STARSHIP_PAGENUMBER,
      payload
    }
  }

  export const saveStarshipDetail = (payload) => {
    return {
      type: SAVE_SINGLE_STARSHIPS,
      payload
    }
  }