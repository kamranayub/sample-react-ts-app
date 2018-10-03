import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import mockStore from "~/state/mockStore";
import App from "../App";

it("renders without crashing", () => {
  const store = mockStore({});
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
