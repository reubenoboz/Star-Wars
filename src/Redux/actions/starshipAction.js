import {SAVE_STARSHIPS, TOGGLE_SPACESHIP_LOADING} from '../actionTypes'

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