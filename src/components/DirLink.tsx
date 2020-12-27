import React from "react";
import { Link } from "react-router-dom";

interface Props {
  color: string;
  linkPath: string;
}

export const DirLink: React.FC<Props> = (props) => {
  return (
    <div>
      <Link className={"dirlink-" + props.color} to={"/" + props.linkPath}>
        {props.linkPath === "" ? "home" : props.linkPath} /
      </Link>
    </div>
  );
};
