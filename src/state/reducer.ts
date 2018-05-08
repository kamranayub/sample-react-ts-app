import rootReducer from "../screens/app/state/reducer";
import { Action } from "./actions";

export default rootReducer;

export interface ReducerActions<S, A extends Action> {
  [key: string]: (state: S, action: A) => S;
};

export function createReducerActions<S, A extends Action>(
  map: ReducerActions<S, A>,
  initial: S
) {
  return (state: S = initial, action: A) => {
    const actionHandler = map[action.type];

    return actionHandler ? actionHandler(state, action) : state;
  };
}
