import {SAVE_CHARACTERS, TOGGLE_CHARACTER_LOADING} from '../actionTypes'

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