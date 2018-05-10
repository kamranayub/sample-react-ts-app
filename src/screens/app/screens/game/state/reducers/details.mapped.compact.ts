import { createReducerActions } from "~/state/reducer";
import initialState from "../";
import { LOAD_GAME, LoadGameAction } from "../actions";

export default createReducerActions(
  {
    [LOAD_GAME](state, action: LoadGameAction) {
      const { id, game } = action;
      return { ...state, id, game };
    }
  },
  initialState.details
);
