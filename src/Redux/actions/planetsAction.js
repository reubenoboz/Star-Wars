import {CHANGE_PLANETS_PAGENUMBER, SAVE_PLANETS, SAVE_SINGLE_PLANETS, TOGGLE_PLANETS_LOADING} from '../actionTypes'

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

  export const changePlanetsPageNumber = (payload) => {
    return {
      type: CHANGE_PLANETS_PAGENUMBER,
      payload
    }
  }

  export const savePlanetDetail = (payload) => {
    return {
      type: SAVE_SINGLE_PLANETS,
      payload
    }
  }