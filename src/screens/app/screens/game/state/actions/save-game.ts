import { Action, actionCreator } from "~/state/actions";

export const SAVE_GAME = "game/save";

export interface SaveGameAction extends Action<typeof SAVE_GAME> {
    id: number
}

export const saveGame = actionCreator<SaveGameAction>(SAVE_GAME);