import { RecursivePartial } from "~/type-utils";
import { LOAD_GAME } from "../../actions";
import initialState from "../../";
import detailsReducer from "../details";

type State = typeof initialState.details;

describe("details reducer", () => {
  it("should let me recursively mock state", () => {
    //
    // use recursive partial helper
    // to partially mock out state
    //
    const mockState: RecursivePartial<State> = {
      id: 5
    };

    //
    // then need to cast back to non-partial State
    //
    const result = detailsReducer(mockState as State, {
      game: {},
      id: 5,
      type: LOAD_GAME
    });

    expect(result.id).toBe(5);
  });
});
