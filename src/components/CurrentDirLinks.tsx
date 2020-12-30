import React from "react";
import { DirLink } from "./DirLink";

interface Props {
  links: string[];
}

export const CurrentDirLinks: React.FC<Props> = ({ links }) => {
  return (
    <div>
      {links.map((link, idx) => (
        <DirLink key={idx} linkPath={link} />
      ))}
    </div>
  );
};
