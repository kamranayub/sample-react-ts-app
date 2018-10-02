import { Omit } from "~/type-utils";

export interface Action<Type = string> { type: Type };





export type ActionPayload<TAction extends Action> = Omit<
  TAction,
  "type"
>;

export function actionCreator<TAction extends Action>(type: string) {
  return (payload: ActionPayload<TAction>) => {
    return { ...(payload as object), type } as TAction;
  };
}
