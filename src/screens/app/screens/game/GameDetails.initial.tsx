import * as React from "react";
import { connect } from "react-redux";
import { ReduxComponent } from "~/state/components";
import Icon from "~/screens/app/shared/components/Icon";
import GameIcon from "./shared/components/Icon";

interface OwnProps {
  id: number;
}

// Public for testing
export type Props = OwnProps;

export class GameDetails extends ReduxComponent<OwnProps> {
  public render() {
    return (
      <div>
        <GameIcon />
        <Icon />
        <p>Game Details for {this.props.id}</p>
      </div>
    );
  }
}

export default connect()(GameDetails);
