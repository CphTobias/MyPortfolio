import React, { useContext } from "react";
import { Text } from "./Text";
import { useHistory } from "react-router-dom";
import { ColorContext } from "../globalstates/ColorContext";

interface Props {
  image: string;
  altId: string;
  cardText: string;
  /**
   * Needs a button component
   */
  button?: JSX.Element;
  to?: string;
}

/**
 * adding a "to" prop will make it a link, otherwise just text
 * @param {image, altId, color, cardText, to, button} props
 */
export const Card: React.FC<Props> = (props) => {
  const history = useHistory();
  const color = useContext(ColorContext);

  return (
    <div
      onClick={props.to ? () => history.push("/" + props.to) : undefined}
      className={
        props.to ? "pointer card-container-" + color : "card-container-" + color
      }
    >
      <img src={props.image} alt={props.altId} style={{ maxWidth: "100%" }} />
      <Text text={[props.cardText]} />
      {props.button ? props.button : null}
    </div>
  );
};
