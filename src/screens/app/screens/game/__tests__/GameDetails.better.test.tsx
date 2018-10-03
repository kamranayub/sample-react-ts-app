import { mount } from "enzyme";
import * as React from "react";
import mockStore from "~/state/mockStore";
import ConnectedGameDetails, { GameDetails, Props } from "../GameDetails";
import { LOAD_GAME } from "../state/actions";
import { MockAction } from "~/type-utils";

describe("game details - better", () => {
  // Set up a default props to spread
  // to minimize typing
  const defaultProps: Props = {
    id: 0,
    loadGameById() {
      return Promise.resolve();
    }
  };

  it("should load up with a game", done => {

    // Use a handy type helper to strongly type our mock (if you want)
    const mockLoadGame: MockAction<typeof defaultProps.loadGameById> = jest.fn(
      (id: number) => Promise.resolve()
    );

    // Test like a consumer would using a callback
    // if you truly care if a game was loaded
    const onGameLoaded = () => {
      expect(mockLoadGame).toHaveBeenCalledWith(5);
      expect(wrapper).toIncludeText("Loaded: true");
      done();
    };

    const wrapper = mount(
      <GameDetails
        {...defaultProps}
        id={5}
        loadGameById={mockLoadGame}
        onGameLoaded={onGameLoaded}
      />
    );
  });

  describe("when connected to Redux", () => {
    //
    // This is an example of a "kitchen sink"
    // test that will go through all the layers
    // so you'll need to mock out more external dependencies
    //
    it(`should fetch game using ${LOAD_GAME} action and notify consumer`, done => {
      // Mock window fetch
      spyOn(window, "fetch").and.callFake(() =>
        Promise.resolve({ json: () => Promise.resolve({ id: 5 }) })
      );

      // Test like a consumer would and verify
      // component looks like we expect. We can
      // optionally verify actions here too like this.
      const onGameLoaded = () => {
        const actions = store.getActions();

        expect(actions).toHaveLength(1);
        expect(actions[0]).toEqual({
          game: { id: 5 },
          id: 5,
          type: LOAD_GAME
        });

        expect(wrapper).toExist();
        expect(wrapper).toIncludeText("Game Details for 5");
        expect(wrapper).toIncludeText("Loaded: true");
        done();
      };

      const store = mockStore({});
      const wrapper = mount(
        <ConnectedGameDetails
          {...defaultProps}
          id={5}
          onGameLoaded={onGameLoaded}
        />,
        {
          context: { store }
        }
      );
    });
  });
});
