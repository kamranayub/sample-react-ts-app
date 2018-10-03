import * as React from "react";

type RenderProp<TRenderProps> = 
    (props: TRenderProps) => React.ReactNode;

interface WithRenderProp<TRenderProps> {
  children: RenderProp<TRenderProps>;
}

interface Props extends WithRenderProp<ImageProps> {
  name: string;
  imageUrl: string;
  // Optionally, this works if you don't want to extend:
  // children: RenderProp<ImageProps>
}

interface ImageProps {
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
