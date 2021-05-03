import {CHANGE_CHARACTER_PAGENUMBER, SAVE_CHARACTERS, TOGGLE_CHARACTER_LOADING} from '../actionTypes'

export const saveCharacters = (payload) => {
    return {
      type: SAVE_CHARACTERS,
      payload,
    };
  };

  export const toggleCharacterLoading = () => {
    return {
      type: TOGGLE_CHARACTER_LOADING
    }
  }

  export const changeCharacterPageNumber = (payload) => {
    return {
      type: CHANGE_CHARACTER_PAGENUMBER,
      payload
    }
  }