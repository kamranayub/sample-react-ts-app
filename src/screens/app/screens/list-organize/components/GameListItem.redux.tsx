import * as React from "react";
import { connect } from "react-redux";
import { State } from "~/state";
import { SRC } from "~/state/components";

interface OwnProps {
  order: number;
  onSelect: (id: number) => void;
}

interface StateProps {
  name: string;
  image: string;
  selected: boolean;
}

export const GameListItem: SRC<OwnProps, StateProps> = props => <div />;

const mapStateToProps = (state: State, ownProps: OwnProps) => {
  // ...
  return {
    image: "/image.png",
    name: "Skyrim",
    selected: false
  };
};

export default connect(mapStateToProps)(GameListItem);
