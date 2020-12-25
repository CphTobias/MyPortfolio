import React from "react";
import { Link } from "react-router-dom";

export const DirLink = (props) => {
  return (
    <div>
      <Link className={"dirlink-" + props.color} to={"/" + props.linkPath}>
        {props.linkPath === "" ? "home" : props.linkPath} /
      </Link>
    </div>
  );
};
