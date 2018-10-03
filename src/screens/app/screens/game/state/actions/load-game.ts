import { actionCreator, Action, ActionPayload } from "~/state/actions";
import { Dispatch } from "redux";
import { State } from "~/state";

export const LOAD_GAME = "game/load";

export interface LoadGameAction extends Action<typeof LOAD_GAME> {
  id: number;
  game: object;
}

// action creator utility
export const loadGame = actionCreator<LoadGameAction>(LOAD_GAME);

// typical action creator
export function __loadGame(payload: ActionPayload<LoadGameAction>) {
  return { ...payload, type: LOAD_GAME };
}

export const fetchGame = (id: number) => {
  return async (dispatch: Dispatch<State>) => {
    const response = await fetch(`/manifest.json`);
    const result = await response.json();

    dispatch(loadGame({ id, game: result }));

    return result;
  };
};
