import React, { useState } from "react";
import "./css/Styles.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./routes/Home";
import { About } from "./routes/About";
import { Navbar } from "./components/Navbar";
import { ColorChooser } from "./components/ColorChooser";
import { Contact } from "./routes/Contact";
import { CurrentDirLinks } from "./components/CurrentDirLinks";
import { Fog } from "./routes/home/Fog";
import { Cupcakes } from "./routes/home/Cupcakes";

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
                <ColorChooser
                  handleColorPick={handleColorPick}
                  currentDirLinks={
                    <CurrentDirLinks links={[""]} color={color} />
                  }
                />
                <Home color={color} handleColorPick={handleColorPick} />
              </div>
            )}
          />
          <Route
            path="/fog"
            exact
            render={() => (
              <div>
                <Navbar handleColorPick={handleColorPick} color={color} />
                <ColorChooser
                  handleColorPick={handleColorPick}
                  currentDirLinks={
                    <CurrentDirLinks links={["", "fog"]} color={color} />
                  }
                />
                <Fog color={color} />
              </div>
            )}
          />
          <Route
            path="/cupcakes"
            exact
            render={() => (
              <div>
                <Navbar handleColorPick={handleColorPick} color={color} />
                <ColorChooser
                  handleColorPick={handleColorPick}
                  currentDirLinks={
                    <CurrentDirLinks links={["", "cupcakes"]} color={color} />
                  }
                />
                <Cupcakes color={color} />
              </div>
            )}
          />
          <Route
            path="/about"
            exact
            render={() => (
              <div>
                <Navbar handleColorPick={handleColorPick} color={color} />
                <ColorChooser
                  handleColorPick={handleColorPick}
                  currentDirLinks={
                    <CurrentDirLinks links={["about"]} color={color} />
                  }
                />
                <About color={color} />
              </div>
            )}
          />
          <Route
            path="/contact"
            exact
            render={() => (
              <div>
                <Navbar handleColorPick={handleColorPick} color={color} />
                <ColorChooser
                  handleColorPick={handleColorPick}
                  currentDirLinks={
                    <CurrentDirLinks links={["contact"]} color={color} />
                  }
                />
                <Contact color={color} />
              </div>
            )}
          />
          <Route path="/" render={() => <div>404</div>} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
