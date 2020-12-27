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

export const App: React.FC = () => {
  const [color, setColor] = useState<string>("yellow");

  const handleColorPick = (newcolor: string) => {
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
                <Navbar color={color} />
                <ColorChooser
                  handleColorPick={handleColorPick}
                  currentDirLinks={
                    <CurrentDirLinks links={[""]} color={color} />
                  }
                  currentColor={color}
                />
                <Home color={color} />
              </div>
            )}
          />
          <Route
            path="/fog"
            exact
            render={() => (
              <div>
                <div className="mainContainer">
                  <Navbar color={color} />
                  <ColorChooser
                    handleColorPick={handleColorPick}
                    currentDirLinks={
                      <CurrentDirLinks links={["", "fog"]} color={color} />
                    }
                    currentColor={color}
                  />
                  <Fog color={color} />
                </div>
              </div>
            )}
          />
          <Route
            path="/cupcakes"
            exact
            render={() => (
              <div>
                <div className="mainContainer">
                  <Navbar color={color} />
                  <ColorChooser
                    handleColorPick={handleColorPick}
                    currentDirLinks={
                      <CurrentDirLinks links={["", "cupcakes"]} color={color} />
                    }
                    currentColor={color}
                  />
                  <Cupcakes color={color} />
                </div>
              </div>
            )}
          />
          <Route
            path="/about"
            exact
            render={() => (
              <div>
                <div className="mainContainer">
                  <Navbar color={color} />
                  <ColorChooser
                    handleColorPick={handleColorPick}
                    currentDirLinks={
                      <CurrentDirLinks links={["about"]} color={color} />
                    }
                    currentColor={color}
                  />
                  <About color={color} />
                </div>
              </div>
            )}
          />
          <Route
            path="/contact"
            exact
            render={() => (
              <div>
                <div className="page-content">
                  <div className="mainContainer">
                    <Navbar color={color} />
                    <ColorChooser
                      handleColorPick={handleColorPick}
                      currentDirLinks={
                        <CurrentDirLinks links={["contact"]} color={color} />
                      }
                      currentColor={color}
                    />
                    <Contact color={color} />
                  </div>
                </div>
              </div>
            )}
          />
          <Route path="/" render={() => <div>404</div>} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
