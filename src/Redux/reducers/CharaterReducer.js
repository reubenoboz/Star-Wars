import {
  CHANGE_CHARACTER_PAGENUMBER,
  SAVE_CHARACTERS,
  TOGGLE_CHARACTER_LOADING,
} from "../actionTypes";

const initialState = {
  characters: [],
  recentlyViewedCharacters: [],
  isLoadingCharacters: false,
  page: 1,
  count: 0,
  hasNext: false,
  hasPrev: false,
};

const CharacterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_CHARACTERS:
      let data = action.payload;
      return {
        ...state,
        characters: data.results,
        count: data.count,
        hasNext: data.next != null ? true : false,
        hasPrev: data.previous != null ? true : false,
      };
    case TOGGLE_CHARACTER_LOADING:
      return {
        ...state,
        isLoadingCharacters: !state.isLoadingCharacters,
      };
    case CHANGE_CHARACTER_PAGENUMBER:
      return {
        ...state,
        page: action.payload,
      };
    default:
      return state;
  }
};

export default CharacterReducer;
