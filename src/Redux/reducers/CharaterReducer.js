import {SAVE_CHARACTERS, TOGGLE_CHARACTER_LOADING} from '../actionTypes'

const initialState = {
  characters: [],
  recentlyViewedCharacters: [],
  isLoadingCharacters: false
}

const CharacterReducer = (state = initialState, action) => {
    switch (action.type) {
      case SAVE_CHARACTERS:
        let data = action.payload
        return {
          ...state,
          characters: data.results,
        };
      case TOGGLE_CHARACTER_LOADING:
        return {
          ...state,
          isLoadingCharacters: !state.isLoadingCharacters
        }
      default:
        return state;
    }
  };
  
  export default CharacterReducer;
  