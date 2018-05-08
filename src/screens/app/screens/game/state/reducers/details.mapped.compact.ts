import { createReducerActions } from "~/state/reducer";
import initialState from "../";
import { loadGameAction, LoadGameAction } from "../actions";

export default createReducerActions(
  {
    [loadGameAction](state, action: LoadGameAction) {
      const { id, game } = action;
      return { ...state, id, game };
    }
  },
  initialState.details
);
