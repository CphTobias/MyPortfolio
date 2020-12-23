import React from "react";

export const Post = ({ match }) => {
  return <div>rendering posts {match.params.id}</div>;
};
