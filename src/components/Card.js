import React from "react";
import { Text } from "./Text";
import { useHistory } from "react-router-dom";

/**
 * adding a "to" prop will make it a link, otherwise just text
 * @param {image, altId, color, cardText, to} props
 */
export const Card = (props) => {
  const history = useHistory();

  return (
    <div
      onClick={props.to ? () => history.push("/" + props.to) : undefined}
      className={
        props.to
          ? "pointer card-container-" + props.color
          : "card-container-" + props.color
      }
    >
      <img src={props.image} alt={props.altId} style={{ maxWidth: "100%" }} />
      <Text color={props.color} text={[props.cardText]} />
    </div>
  );
};