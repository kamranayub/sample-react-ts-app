import * as React from "react";
import { connect, Dispatch } from "react-redux";
import { ReduxComponent, ReduxProps } from "~/state/components";
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

interface DispatchProps {
  loadGameById: (id: number) => Promise<void>;
}

// Export for tests using the ReduxProps helper
export type Props = ReduxProps<OwnProps, DispatchProps>;

export class GameDetails extends ReduxComponent<OwnProps, OwnState, DispatchProps> {
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

//
// Long-form way to avoid more type helpers to "unwrap" Thunk actions
// See: https://gist.github.com/milankorsos/ffb9d32755db0304545f92b11f0e4beb
// There's probably a better way I need to play with
const mapDispatchToProps = (dispatch: Dispatch<State>): DispatchProps => ({
  loadGameById: (id: number) => dispatch(fetchGame(id))
});

export default connect(
  null,
  mapDispatchToProps
)(GameDetails);
