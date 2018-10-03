import * as React from "react";
import { DispatchProp } from "react-redux";
import { State } from ".";

export type ReduxProps<
  TOwnProps = {},
  TStateProps = DispatchProp<State>
> = TStateProps & TOwnProps;

export type SRC<
  TOwnProps = {},
  TStateProps = DispatchProp<State>
> = React.StatelessComponent<ReduxProps<TStateProps, TOwnProps>>;

export class ReduxComponent<
  TOwnProps = {},
  TState = {},
  TStateProps = DispatchProp<State>
> extends React.Component<ReduxProps<TStateProps, TOwnProps>, TState> {}
