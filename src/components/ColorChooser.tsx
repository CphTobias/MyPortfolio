import * as React from "react";
import { Header } from "./Header";

const { useState } = React;

interface Props {
  handleColorPick: (color: string) => void;
  currentDirLinks: JSX.Element;
  currentColor: string;
}

export const ColorChooser: React.FC<Props> = ({
  handleColorPick,
  currentDirLinks,
  currentColor,
}) => {
  const [newcolor, setNewColor] = useState<string | any>(currentColor);

  const handleClick = (color: string) => {
    handleColorPick(color);

    setNewColor(color);

    if (color === "yellow") {
      document.body.style.background =
        "linear-gradient(90deg, rgba(217,198,112,1) 0%, rgba(255,223,0,1) 41%, rgba(204,185,99,1) 100%)";
    } else if (color === "white") {
      document.body.style.background =
        "linear-gradient(90deg, rgb(80, 80, 80) 0%, rgb(40, 40, 40) 41%, rgb(80, 80, 80) 100%)";
    }
  };

  return (
    <>
      <div className={"colorchooser-container-" + newcolor}>
        <div className="container">
          <div className="row">
            <div className="col">{currentDirLinks}</div>
            <div className="col">
              <i
                onClick={() => handleClick("white")}
                className="white-color-choice pointer fas fa-circle fa-2x navbar-li"
              ></i>
              <i
                onClick={() => handleClick("yellow")}
                className="yellow-color-choice pointer fas fa-circle fa-2x navbar-li"
              ></i>
              <ul>
                <li className="navbar-li">
                  <Header title={"Choose theme"} size={"h3"} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
