import { createReducerActions } from "~/state/reducer";
import initialState from "../";
import {
  LOAD_GAME,
  LoadGameAction,
  SAVE_GAME,
  SaveGameAction
} from "../actions";

type GameAction = LoadGameAction | SaveGameAction;

export default createReducerActions<typeof initialState.details, GameAction>(
  {
    [LOAD_GAME](state, action: LoadGameAction) {
      const { id, game } = action;
      return { ...state, id, game };
    },
    [SAVE_GAME](state, action: SaveGameAction) {
      return { ...state };
    }
  },
  initialState.details
);
