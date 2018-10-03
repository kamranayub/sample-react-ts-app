import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { RecursivePartial } from "../type-utils";
import { State } from "./";

/**
 * Strongly typed Redux mock store for tests
 */
export default configureMockStore<
  State | RecursivePartial<State>,
  any
>([thunk]);
