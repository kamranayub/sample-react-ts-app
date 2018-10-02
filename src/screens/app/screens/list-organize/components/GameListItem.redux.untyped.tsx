import * as React from "react";
import { connect, DispatchProp } from "react-redux";
import { State } from "~/state";

interface OwnProps {
    order: number;
    onSelect: (id: number) => void;
}

interface StateProps {
    name: string;
    image: string;
    selected: boolean;
}

type Props = OwnProps & StateProps & Required<DispatchProp<State>>

export const GameListItem = (props: Props) =>
    <div />

const mapStateToProps = (state: State, ownProps: OwnProps): StateProps => {
    // ...
    return {
        image: "/image.png",
        name: "Skyrim",
        selected: false
    }
}

export default connect(mapStateToProps)(GameListItem);