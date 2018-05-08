import { createReducerActions, ReducerActions } from "~/state/reducer";
import initialState from "../";
import { loadGameAction, LoadGameAction, SaveGameAction } from "../actions";

type GameAction = LoadGameAction | SaveGameAction
type State = typeof initialState.details;

const actions: ReducerActions<State, GameAction> = {
  [loadGameAction]: loadGame
}

function loadGame(state: State, action: LoadGameAction) {
  const { id, game } = action;
  return { ...state, id, game };
}

export default createReducerActions(
  actions,
  initialState.details
);
