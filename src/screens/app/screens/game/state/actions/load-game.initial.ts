import { Action } from "~/state/actions";

export const LOAD_GAME = "game/load";

export interface LoadGameAction extends Action<typeof LOAD_GAME> {
  id: number;
  game: object;
}