import { mount } from "enzyme";
import * as React from "react";
import mockStore from "~/state/mockStore";
import GameDetails from "../GameDetails";

describe("game details", () => {
  it("should render with game ID", () => {
    const store = mockStore({});
    const wrapper = mount(<GameDetails id={5} />, { context: { store } });

    expect(wrapper).toExist();
    expect(wrapper).toIncludeText("Game Details for 5");
  });
});
