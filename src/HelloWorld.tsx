import * as React from "react";
import * as ReactDOM from "react-dom";

const HelloWorld = (props: { text: string }) => 
  <h1>Hello {props.text}</h1>;

class App extends React.Component<{}, { hello: string }> {
  state = { hello: "Kamran" };

  public render() {
    return (
      <div>
        <HelloWorld text={this.state.hello} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("#app"));
