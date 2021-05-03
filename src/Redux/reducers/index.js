import { combineReducers } from "redux";
import CharacterReducer from "./CharaterReducer";
import ShipReducer from "./ShipReducer";
import PlanetsReducer from './PlanetsReducer'

export default combineReducers({
  CharacterReducer,
  ShipReducer,
  PlanetsReducer
});
