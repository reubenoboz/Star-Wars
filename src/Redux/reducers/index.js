import { combineReducers } from "redux";
import CharacterReducer from "./CharaterReducer";
import ShipReducer from "./ShipReducer";
import PlanetsReducer from './PlanetsReducer'
import GeneralReducer from './GeneralReducer'

export default combineReducers({
  CharacterReducer,
  ShipReducer,
  PlanetsReducer,
  GeneralReducer
});
