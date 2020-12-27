import React from "react";

interface Props {
  text: string[];
  color: string;
}

/**
 * Each element in the text element will be on a new line
 * @param {color, text} props
 */
export const Text: React.FC<Props> = (props) => {
  return (
    <div>
      {props.text.map((p) => (
        <p key={p} className={"text-color-" + props.color}>
          {p}
        </p>
      ))}
    </div>
  );
};
