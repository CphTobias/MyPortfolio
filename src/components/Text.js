import React from "react";

/**
 * Each element in the text element will be on a new line
 * @param {color, text} props
 */
export const Text = (props) => {
  return (
    <div>
      {props.text.map((p) => (
        <p className={"text-color-" + props.color}>{p}</p>
      ))}
    </div>
  );
};
