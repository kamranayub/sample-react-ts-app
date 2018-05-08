import { Action, actionCreator } from "state/actions";

export interface SaveGameAction extends Action<typeof saveGameAction> {
    id: number
}

export const saveGameAction = "game/save";
export const saveGame = actionCreator<SaveGameAction>(saveGameAction);