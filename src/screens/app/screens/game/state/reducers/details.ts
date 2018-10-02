import { LOAD_GAME, LoadGameAction, SaveGameAction } from "../actions";
import initialState from "../";

type GameAction = LoadGameAction | SaveGameAction;

export default function(
  state = initialState.details,
  action: GameAction
): typeof initialState.details {
  switch (action.type) {
    case LOAD_GAME: {
      const { id, game } = action;
      return { ...state, id, game };
    }
  }
  return state;
}
