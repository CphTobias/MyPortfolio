import React, { useState } from "react";
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

export const App: React.FC = () => {
  const [color, setColor] = useState<string>("yellow");

  const handleColorPick = (newcolor: string) => {
    setColor(newcolor);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <BrowserRouter>
        <ColorContext.Provider value={color}>
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
                    <FogApi scrollToTop={scrollToTop} />
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
                  <FogInfrastructure scrollToTop={scrollToTop} />
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
                  <FogFrontEnd scrollToTop={scrollToTop} />
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
