import * as React from "react";
import { connect, Dispatch } from "react-redux";
import { ReduxComponent } from "~/state/components";
import Icon from "~/screens/app/shared/components/Icon";
import GameIcon from "./shared/components/Icon";
import { fetchGame } from "./state/actions";
import { State } from "~/state";

interface OwnProps {
  id: number;
  onGameLoaded?: () => void
}

interface OwnState {
  loaded: boolean;
}

interface StateProps {
  loadGameById: (id: number) => Promise<void>;
}

export type Props = StateProps & OwnProps;

export class GameDetails extends ReduxComponent<StateProps, OwnProps, OwnState> {
  public state: OwnState = { loaded: false };

  public componentDidMount() {
    const { id, loadGameById } = this.props;

    loadGameById(id).then(
      () => {
        this.setState({ loaded: true }, () => {
          if (this.props.onGameLoaded) {
            this.props.onGameLoaded();
          }
        });
      },
      err => {
        throw err;
      }
    );
  }

  public render() {
    return (
      <div>
        <GameIcon />
        <Icon />
        <p>Game Details for {this.props.id}</p>
        <p>Loaded: {this.state.loaded.toString()}</p>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch<State>): StateProps => ({
  loadGameById: (id: number) => dispatch(fetchGame(id))
});

export default connect(
  null,
  mapDispatchToProps
)(GameDetails);
