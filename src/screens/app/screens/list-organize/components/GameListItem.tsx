import * as React from "react";
import GameImage from "./GameImage";

interface Props {
    name: string;
    image: string;
    order: number;
    selected: boolean;
    onSelect: (id: number) => void;
}

export default (props: Props) =>
    <div>
        <GameImage name={props.name} imageUrl={props.image}>
            {imageProps => <img {...imageProps} />}
        </GameImage>
    </div>
