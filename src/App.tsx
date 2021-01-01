import React, { useEffect, useState } from "react";
import "./css/Styles.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./routes/Home";
import { About } from "./routes/About";
import { Navbar } from "./components/Navbar";
import { ColorChooser } from "./components/ColorChooser";
import { Contact } from "./routes/Contact";
import { CurrentDirLinks } from "./components/CurrentDirLinks";
import { Cupcakes } from "./routes/home/Cupcakes";
import { Fog } from "./routes/home/Fog";
import { FogApi } from "./routes/home/FogApi";
import { ColorContext } from "./globalstates/ColorContext";
import { FogInfrastructure } from "./routes/home/FogInfrastructure";
import { FogFrontEnd } from "./routes/home/FogFrontEnd";
import ScrollToTop from "./components/ScrollToTop";

export const App: React.FC = () => {
  const [color, setColor] = useState<string>(
    () => localStorage.getItem("color") || "yellow"
  );

  useEffect(() => {
    localStorage.setItem("color", color);

    if (color === "yellow") {
      document.body.style.background =
        "linear-gradient(90deg, rgba(217,198,112,1) 0%, rgba(255,223,0,1) 41%, rgba(204,185,99,1) 100%)";
    } else if (color === "white") {
      document.body.style.background =
        "linear-gradient(90deg, rgb(80, 80, 80) 0%, rgb(40, 40, 40) 41%, rgb(80, 80, 80) 100%)";
    }
  }, [color]);

  const handleColorPick = (newcolor: string) => {
    setColor(newcolor);
  };

  return (
    <>
      <BrowserRouter>
        <ColorContext.Provider value={color}>
          <ScrollToTop />
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <div>
                  <Navbar />
                  <ColorChooser
                    handleColorPick={handleColorPick}
                    currentDirLinks={<CurrentDirLinks links={[""]} />}
                  />
                  <Home />
                </div>
              )}
            />
            <Route
              path="/fog"
              exact
              render={() => (
                <div>
                  <div className="mainContainer">
                    <Navbar />
                    <ColorChooser
                      handleColorPick={handleColorPick}
                      currentDirLinks={<CurrentDirLinks links={["", "fog"]} />}
                    />
                    <Fog />
                  </div>
                </div>
              )}
            />
            <Route
              path="/fog/api"
              exact
              render={() => (
                <div>
                  <div className="mainContainer">
                    <Navbar />
                    <ColorChooser
                      handleColorPick={handleColorPick}
                      currentDirLinks={
                        <CurrentDirLinks links={["", "fog", "fog/api"]} />
                      }
                    />
                    <FogApi />
                  </div>
                </div>
              )}
            />
            <Route
              path="/fog/infrastructure"
              exact
              render={() => (
                <div>
                  <Navbar />
                  <ColorChooser
                    handleColorPick={handleColorPick}
                    currentDirLinks={
                      <CurrentDirLinks
                        links={["", "fog", "fog/infrastructure"]}
                      />
                    }
                  />
                  <FogInfrastructure />
                </div>
              )}
            />
            <Route
              path="/fog/frontend"
              exact
              render={() => (
                <div>
                  <Navbar />
                  <ColorChooser
                    handleColorPick={handleColorPick}
                    currentDirLinks={
                      <CurrentDirLinks links={["", "fog", "fog/frontend"]} />
                    }
                  />
                  <FogFrontEnd />
                </div>
              )}
            />
            <Route
              path="/cupcakes"
              exact
              render={() => (
                <div>
                  <div className="mainContainer">
                    <Navbar />
                    <ColorChooser
                      handleColorPick={handleColorPick}
                      currentDirLinks={
                        <CurrentDirLinks links={["", "cupcakes"]} />
                      }
                    />
                    <Cupcakes />
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
                    <Navbar />
                    <ColorChooser
                      handleColorPick={handleColorPick}
                      currentDirLinks={<CurrentDirLinks links={["about"]} />}
                    />
                    <About />
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
                      <Navbar />
                      <ColorChooser
                        handleColorPick={handleColorPick}
                        currentDirLinks={
                          <CurrentDirLinks links={["contact"]} />
                        }
                      />
                      <Contact />
                    </div>
                  </div>
                </div>
              )}
            />
            <Route path="/" render={() => <div>404</div>} />
          </Switch>
        </ColorContext.Provider>
      </BrowserRouter>
    </>
  );
};

export default App;
