import React from "react";

export const Header = (props) => {

  const checkSize = () => {
    if (props.size === "h1") {
      return <h1 className={"default-header-" + props.color}>{props.title}</h1>
    } else if (props.size === "h2") {
      return <h2 className="default-header">{props.title}</h2>
    } else if (props.size === "h3") {
      return <h3 className="default-header">{props.title}</h3>
    } else if (props.size === "h4") {
      return <h4 className="default-header">{props.title}</h4>
    } else if (props.size === "h5") {
      return <h5 className="default-header">{props.title}</h5>
    } else if (props.size === "h6") {
      return <h6 className="default-header">{props.title}</h6>
    }
  }

  return (
      <div>
        <header>
          {checkSize()}
        </header>
      </div>
  );
}