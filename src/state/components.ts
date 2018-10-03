import * as React from "react";
import { DispatchProp } from "react-redux";
import { State } from ".";

export type ReduxProps<TStateProps, TOwnProps = {}> = TStateProps &
  TOwnProps;

export type SRC<TStateProps, TOwnProps = {}> = React.StatelessComponent<
  ReduxProps<TStateProps, TOwnProps>
>;

export class ReduxComponent<
  TStateProps = DispatchProp<State>,
  TOwnProps = {},
  TState = {}
> extends React.Component<ReduxProps<TStateProps, TOwnProps>, TState> {}