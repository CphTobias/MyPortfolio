import React, { useState } from "react";
import "./css/Styles.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./routes/Home";
import { About } from "./routes/About";
import { Navbar } from "./components/Navbar";
import { ColorChooser } from "./components/ColorChooser";
import { Contact } from "./routes/Contact";

export default function App() {
  const [color, setColor] = useState("yellow");

  const handleColorPick = (newcolor) => {
    setColor(newcolor);
  };

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <div>
                <Navbar handleColorPick={handleColorPick} color={color} />
                <ColorChooser handleColorPick={handleColorPick} />
                <Home color={color} />
              </div>
            )}
          />
          <Route
            path="/about"
            exact
            render={() => (
              <div>
                <Navbar handleColorPick={handleColorPick} color={color} />
                <ColorChooser handleColorPick={handleColorPick} />
                <About />
              </div>
            )}
          />
          <Route
            path="/contact"
            exact
            render={() => (
              <div>
                <Navbar handleColorPick={handleColorPick} color={color} />
                <ColorChooser handleColorPick={handleColorPick} />
                <Contact />
              </div>
            )}
          />
          <Route path="/" render={() => <div>404</div>} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
