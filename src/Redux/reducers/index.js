import { combineReducers } from "redux";
import CharacterReducer from "./CharaterReducer";
import ShipReducer from "./ShipReducer";

export default combineReducers({
  CharacterReducer,
  ShipReducer,
});
