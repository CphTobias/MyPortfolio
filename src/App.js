import React, { useState } from "react";
import "./css/Styles.css";
import { Header } from "./components/Header";
import { ColorChooser } from "./components/ColorChooser";
import { Navbar } from "./components/Navbar";

export default function App() {

  const [ color, setColor ] = useState("yellow");

  const handleColorPick = (newcolor) => {
    setColor(newcolor)
  }

  return (
      <>
        <Navbar handleColorPick={handleColorPick} color={color}/>
        <ColorChooser handleColorPick={handleColorPick}/>
        <main className="mainContainer container">
          <div className={color === "yellow" ? "shadow-container-yellow" : "shadow-container-white"}>
            <Header size="h1" color={color} title="Program is working!"/>
            <Header size="h5" color={color} title="Program is working!"/>
            <p className={"text-color-"+color}>Something</p>
          </div>
          <div className={color === "yellow" ? "shadow-container-yellow" : "shadow-container-white"}>
            <Header size="h1" color={color} title="Program is working!"/>
            <Header size="h5" color={color} title="Program is working!"/>
            <p className={"text-color-"+color}>Something</p>
          </div>
          <div className={color === "yellow" ? "shadow-container-yellow" : "shadow-container-white"}>
            <Header size="h1" color={color} title="Program is working!"/>
            <Header size="h5" color={color} title="Program is working!"/>
            <p className={"text-color-"+color}>Something</p>
          </div>
          <div className={color === "yellow" ? "shadow-container-yellow" : "shadow-container-white"}>
            <Header size="h1" color={color} title="Program is working!"/>
            <Header size="h5" color={color} title="Program is working!"/>
            <p className={"text-color-"+color}>Something</p>
          </div>
          <div className={color === "yellow" ? "shadow-container-yellow" : "shadow-container-white"}>
            <Header size="h1" color={color} title="Program is working!"/>
            <Header size="h5" color={color} title="Program is working!"/>
            <p className={"text-color-"+color}>Something</p>
          </div>
        </main>
      </>
  );
}

