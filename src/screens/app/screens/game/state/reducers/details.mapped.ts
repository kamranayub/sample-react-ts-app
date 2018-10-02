import { createReducerActions, ReducerActions } from "~/state/reducer";
import initialState from "../";
import {
  LOAD_GAME,
  LoadGameAction,
  SaveGameAction,
  SAVE_GAME
} from "../actions";

type GameAction = LoadGameAction | SaveGameAction;
type State = typeof initialState.details;

const actions: ReducerActions<State, GameAction> = {
  [LOAD_GAME]: loadGame,
  [SAVE_GAME]: saveGame
};

function loadGame(state: State, action: LoadGameAction) {
  const { id, game } = action;
  return { ...state, id, game };
}

function saveGame(state: State, action: SaveGameAction) {
  return { ...state };
}

export default createReducerActions(actions, initialState.details);
