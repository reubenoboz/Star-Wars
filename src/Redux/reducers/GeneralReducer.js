import { GENDER_FILTER, HANDLE_FILTER } from "../actionTypes";

const initialState = {
  filterTerm: "",
  genderTerm: "",
};

const GeneralReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_FILTER:
      return {
        ...state,
        filterTerm: action.payload,
      };
    case GENDER_FILTER:
      return {
        ...state,
        genderTerm: action.payload,
      };
    default:
      return state;
  }
};

export default GeneralReducer;
