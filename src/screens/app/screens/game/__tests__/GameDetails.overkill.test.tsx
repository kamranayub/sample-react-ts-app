// Mocks at the top to ensure scope references
// are intact when hoisted
const mockFetchGame = jest.fn();

import { mount } from "enzyme";
import * as React from "react";
import mockStore from "~/state/mockStore";
import { LOAD_GAME } from "../state/actions";
import GameDetails from "../GameDetails";

// Mock our actions module
// NOTE: You'd have to mock all used actions/variables
jest.mock("../state/actions/load-game", () => ({ fetchGame: mockFetchGame }));

describe("game details - overkill", () => {
  beforeEach(() => {
    // Mock as Thunk action
    // which can return a Promise
    // if we didn't use .then() we could
    // use a plain action object
    mockFetchGame.mockImplementation((id: number) => () =>
      Promise.resolve({ type: LOAD_GAME, id })
    );
  });

  afterEach(() => {
    // Reset mocks for next test since mock function
    // is module-scoped right now
    jest.resetAllMocks();
  });

  it("should render with game ID", () => {
    const store = mockStore({});
    const wrapper = mount(<GameDetails id={5} />, { context: { store } });

    expect(wrapper).toExist();
    expect(wrapper).toIncludeText("Game Details for 5");
  });

  it("should load a game async", done => {
    const store = mockStore({ game: { details: { id: 5 } } }); // Not really using this but...
    const wrapper = mount(<GameDetails id={5} />, { context: { store } });

    // Testing async so we need to "flush" the
    // Promise queue
    setImmediate(() => {
      expect(mockFetchGame).toHaveBeenCalledWith(5);
      expect(wrapper).toIncludeText("Loaded: true");
      done();
    });
  });
});
