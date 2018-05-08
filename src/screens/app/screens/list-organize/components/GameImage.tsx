import * as React from "react";

type RenderProp<T> = 
    (props: T) => React.ReactNode;

interface Props {
  name: string;
  imageUrl: string;
  children: RenderProp<RenderProps>;
}

interface RenderProps {
  alt: string;
  title: string;
  src: string;
}

export default (props: Props) => (
  <div className="game image wrapper">
    {props.children({
      alt: props.name,
      src: props.imageUrl,
      title: props.name,
    })}
  </div>
);
