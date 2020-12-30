import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ColorContext } from "../globalstates/ColorContext";

interface Props {
  linkPath: string;
}

export const DirLink: React.FC<Props> = (props) => {
  const color = useContext(ColorContext);
  const checkPathName = (): string => {
    if (props.linkPath === "") {
      return "home";
    } else if (props.linkPath.includes("/")) {
      const splitLink: string[] = props.linkPath.split("/");
      return splitLink[splitLink.length - 1];
    } else {
      return props.linkPath;
    }
  };

  return (
    <div>
      <Link className={"dirlink-" + color} to={"/" + props.linkPath}>
        {checkPathName()} /
      </Link>
    </div>
  );
};
