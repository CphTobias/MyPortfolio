import React from "react";
import { DirLink } from "./DirLink";

interface Props {
  links: string[];
  color: string;
}

export const CurrentDirLinks: React.FC<Props> = ({ links, color }) => {
  return (
    <div>
      {links.map((link) => (
        <DirLink key={link} linkPath={link} color={color} />
      ))}
    </div>
  );
};
