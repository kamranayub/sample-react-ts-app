import * as React from "react";

interface Props {
  name: string;
  image: string;
  order: number;
  selected: boolean;
  onSelect: (id: number) => void;
}

export default (props: Props) => <div />;
