import {SAVE_CHARACTERS} from '../actionTypes'

export const saveCharacters = (payload) => {
    return {
      type: SAVE_CHARACTERS,
      payload,
    };
  };