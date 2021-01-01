import React, { useContext } from "react";
import { ColorContext } from "../globalstates/ColorContext";

interface Props {
  size: string;
  title: string;
}

export const Header: React.FC<Props> = (props) => {
  const color = useContext(ColorContext);
  const checkSize = () => {
    if (props.size === "h1") {
      return <h1 className={"default-header-" + color}>{props.title}</h1>;
    } else if (props.size === "h2") {
      return <h2 className={`default-header-${color}`}>{props.title}</h2>;
    } else if (props.size === "h3") {
      return <h3 className={`default-header-${color}`}>{props.title}</h3>;
    } else if (props.size === "h4") {
      return <h4 className={`default-header-${color}`}>{props.title}</h4>;
    } else if (props.size === "h5") {
      return <h5 className={`default-header-${color}`}>{props.title}</h5>;
    } else {
      return <h6 className={`default-header-${color}`}>{props.title}</h6>;
    }
  };

  return (
    <div>
      <header>{checkSize()}</header>
    </div>
  );
};
