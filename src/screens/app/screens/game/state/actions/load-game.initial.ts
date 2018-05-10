import { Action } from "~/state/actions";

export interface LoadGameAction extends Action<typeof loadGameAction> {
  id: number;
  game: object;
}

export const loadGameAction = "game/load";