import React from "react";
import { useHistory } from "react-router-dom";

interface Props {
  buttonStyle: string;
  link: string;
  text: string;
  color: string;
}

/**
 *
 * @param {buttonStyle(infered to primary if none given),
 * link(can be null if you dont want link),
 * text, color} props
 */
export const Button: React.FC<Props> = ({ buttonStyle, link, color, text }) => {
  const history = useHistory();

  const checkButtonStyle = () => {
    if (!buttonStyle) {
      return link
        ? "btn pointer btn-" + color + "-primary"
        : "btn btn-" + color + "-primary";
    } else {
      if (buttonStyle === "btn-block") {
        return link
          ? "btn pointer btn-" + color + "-primary " + buttonStyle
          : "btn btn-" + color + "-primary " + buttonStyle;
      } else {
        return link
          ? "btn pointer btn-" + color + "-" + buttonStyle
          : "btn btn-" + color + "-" + buttonStyle;
      }
    }
  };

  return (
    <div>
      <button
        className={checkButtonStyle()}
        onClick={link ? () => history.push("/" + link) : undefined}
      >
        {text}
      </button>
    </div>
  );
};