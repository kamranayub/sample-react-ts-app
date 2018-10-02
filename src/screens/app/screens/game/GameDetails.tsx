import * as React from "react";
import { connect } from "react-redux";
import { ReduxComponent } from "~/state/components";
import Icon from "shared/Icon"; // :( not the right shared component!
import SharedGameComponent from "shared/GameShared";
import { fetchGame } from "./state/actions";

interface OwnProps {
  id: number;
}

class GameDetails extends ReduxComponent<{}, OwnProps> {
  componentDidMount() {
    const { id, dispatch } = this.props;

    dispatch(fetchGame(id));
  }

  render() {
    return (
      <div>
        <Icon /> Game Details for {this.props.id} <SharedGameComponent />
      </div>
    );
  }
}

export default connect()(GameDetails);
