import React from "react";
import { DirLink } from "./DirLink";

export const CurrentDirLinks = ({ links, color }) => {
  return (
    <div>
      {links.map((link) => (
        <DirLink key={link} linkPath={link} color={color} />
      ))}
    </div>
  );
};
