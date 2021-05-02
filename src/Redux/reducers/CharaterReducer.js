import {SAVE_CHARACTERS} from '../actionTypes'

const initialState = {
  characters: [],
  recentlyViewedCharacters: []
}

const CharacterReducer = (state = initialState, action) => {
    switch (action.type) {
      case SAVE_CHARACTERS:
        console.log("action", action.payload)
        let data = action.payload
        return {
          ...state,
          characters: data,
        };
      default:
        return state;
    }
  };
  
  export default CharacterReducer;
  