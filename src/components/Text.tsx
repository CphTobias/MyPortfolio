import React, { useContext } from "react";
import { ColorContext } from "../globalstates/ColorContext";

interface Props {
  text: string[];
}

/**
 * Each element in the text element will be on a new line
 * @param {text} props
 */
export const Text: React.FC<Props> = (props) => {
  const color = useContext(ColorContext);
  return (
    <div>
      {props.text.map((p) => (
        <p key={p} className={"text-color-" + color}>
          {p}
        </p>
      ))}
    </div>
  );
};
