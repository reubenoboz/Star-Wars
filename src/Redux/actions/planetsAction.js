import {SAVE_PLANETS, TOGGLE_PLANETS_LOADING} from '../actionTypes'

export const savePlanets = (payload) => {
    return {
      type: SAVE_PLANETS,
      payload,
    };
  };

  export const togglePlanetsLoading = () => {
      return {
          type: TOGGLE_PLANETS_LOADING
      }
  }