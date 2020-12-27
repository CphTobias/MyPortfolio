import React from "react";
import { useHistory } from "react-router-dom";

/**
 *
 * @param {buttonStyle(infered to primary if none given),
 * link(can be null if you dont want link),
 * text, color} props
 */
export const Button = (props) => {
  const history = useHistory();

  const checkButtonStyle = () => {
    if (!props.buttonStyle) {
      return props.link
        ? "btn pointer btn-" + props.color + "-primary"
        : "btn btn-" + props.color + "-primary";
    } else {
      if (props.buttonStyle === "btn-block") {
        return props.link
          ? "btn pointer btn-" + props.color + "-primary " + props.buttonStyle
          : "btn btn-" + props.color + "-primary " + props.buttonStyle;
      } else {
        return props.link
          ? "btn pointer btn-" + props.color + "-" + props.buttonStyle
          : "btn btn-" + props.color + "-" + props.buttonStyle;
      }
    }
  };

  return (
    <div>
      <button
        className={checkButtonStyle()}
        onClick={props.link ? () => history.push("/" + props.link) : undefined}
      >
        {props.text}
      </button>
    </div>
  );
};
