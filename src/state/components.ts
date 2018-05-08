import * as React from "react";
import { DispatchProp } from "react-redux";
import { State } from ".";

export type ReduxProps<TStateProps, TOwnProps = {}> = TStateProps &
  TOwnProps & Required<DispatchProp<State>>;

export type SRC<TStateProps, TOwnProps = {}> = React.StatelessComponent<
  ReduxProps<TStateProps, TOwnProps>
>;

export class ReduxComponent<
  TStateProps = {},
  TOwnProps = {},
  TState = {}
> extends React.Component<ReduxProps<TStateProps, TOwnProps>, TState> {}
