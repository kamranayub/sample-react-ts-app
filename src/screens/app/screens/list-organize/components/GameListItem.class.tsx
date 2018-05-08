import * as React from "react";

interface Props {
    name: string;
    image: string;
    order: number;
}

interface State {
    selected: boolean;
}

export default class extends React.PureComponent<Props, State> {
}
