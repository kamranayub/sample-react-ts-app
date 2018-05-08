import { actionCreator, Action } from "~/state/actions";
import { Dispatch } from "redux";
import { State } from "~/state";

export interface LoadGameAction extends Action<typeof loadGameAction> {
  id: number;
  game: object;
}

export const loadGameAction = "game/load";
export const loadGame = actionCreator<LoadGameAction>(loadGameAction);

export const fetchGame = (id: number) => {
  return async (dispatch: Dispatch<State>) => {
    const response = await fetch(`https://xkcd.com/info.${id}.json`)
    const result = await response.json();

    dispatch(loadGame({ id, game: result }))

    return result;
  }
}