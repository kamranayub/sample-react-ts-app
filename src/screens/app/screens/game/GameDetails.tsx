import * as React from "react";
import { connect } from "react-redux";
import Icon from "shared/Icon";
import { ReduxComponent } from "~/state/components";
import { fetchGame } from "./state/actions";

interface OwnProps {
    id: number;
}

class GameDetails extends ReduxComponent<{}, OwnProps> {
    
    componentDidMount() {
        const { id, dispatch } = this.props;

        dispatch(fetchGame(id))
    }

    render() {
        return <div><Icon /> Game Details for {this.props.id}</div>;
    }
}

export default connect()(GameDetails)