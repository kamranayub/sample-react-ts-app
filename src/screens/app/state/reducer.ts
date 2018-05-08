import { combineReducers } from "redux";
import { State } from '~/state';
import game from "../screens/game/state/reducer";

export default combineReducers<State>({
    game
})