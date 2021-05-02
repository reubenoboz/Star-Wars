import {SAVE_CHARACTERS} from '../actionTypes'

const initialState = {
  module: null
}

const ShipReducer = (state = initialState, action) => {
    switch (action.type) {
      case SAVE_CHARACTERS:
        return {
          ...state,
          module: action?.module,
        };
      default:
        return state;
    }
  };
  
  export default ShipReducer;
  