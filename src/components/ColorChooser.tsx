import * as React from "react";
import { ColorContext } from "../globalstates/ColorContext";
import { Header } from "./Header";

const { useState, useContext } = React;

interface Props {
  handleColorPick: (color: string) => void;
  currentDirLinks: JSX.Element;
}

export const ColorChooser: React.FC<Props> = ({
  handleColorPick,
  currentDirLinks,
}) => {
  const currentColor = useContext(ColorContext);
  const [newcolor, setNewColor] = useState<string>(currentColor);

  const handleClick = (color: string) => {
    handleColorPick(color);

    setNewColor(color);
  };

  return (
    <>
      <div className={"colorchooser-container-" + newcolor}>
        <div className="container">
          <div className="row">
            <div style={{ padding: "10px" }} className="col-md-7">
              {currentDirLinks}
            </div>
            <div className="col-md-5">
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
