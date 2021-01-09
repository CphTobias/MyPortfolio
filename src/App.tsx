import React, { useEffect, useState, Suspense, lazy } from "react";
import "./css/Styles.css";
import "./css/index.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ColorContext } from "./globalstates/ColorContext";
import ScrollToTop from "./components/ScrollToTop";

export const App: React.FC = () => {
  //Imports
  const Home = lazy(() =>
    import("./routes/Home").then(({ Home }) => ({ default: Home }))
  );
  const About = lazy(() =>
    import("./routes/About").then(({ About }) => ({ default: About }))
  );
  const Navbar = lazy(() =>
    import("./components/Navbar").then(({ Navbar }) => ({ default: Navbar }))
  );
  const ColorChooser = lazy(() =>
    import("./components/ColorChooser").then(({ ColorChooser }) => ({
      default: ColorChooser,
    }))
  );
  const Contact = lazy(() =>
    import("./routes/Contact").then(({ Contact }) => ({ default: Contact }))
  );
  const Fog = lazy(() =>
    import("./routes/home/Fog").then(({ Fog }) => ({ default: Fog }))
  );
  const FogApi = lazy(() =>
    import("./routes/home/FogApi").then(({ FogApi }) => ({ default: FogApi }))
  );
  const FogFrontEnd = lazy(() =>
    import("./routes/home/FogFrontEnd").then(({ FogFrontEnd }) => ({
      default: FogFrontEnd,
    }))
  );
  const FogInfrastructure = lazy(() =>
    import("./routes/home/FogInfrastructure").then(({ FogInfrastructure }) => ({
      default: FogInfrastructure,
    }))
  );
  const CurrentDirLinks = lazy(() =>
    import("./components/CurrentDirLinks").then(({ CurrentDirLinks }) => ({
      default: CurrentDirLinks,
    }))
  );
  const Cupcakes = lazy(() =>
    import("./routes/home/Cupcakes").then(({ Cupcakes }) => ({
      default: Cupcakes,
    }))
  );

  const [color, setColor] = useState<string>(
    () => localStorage.getItem("color") || "yellow"
  );

  //Update on color change
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
      <Router>
        <ColorContext.Provider value={color}>
          <Suspense fallback={<div>Loading...</div>}>
            <Navbar />
            <ScrollToTop />
            <Switch>
              <Route
                path="/"
                exact
                render={() => (
                  <div>
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
                      <ColorChooser
                        handleColorPick={handleColorPick}
                        currentDirLinks={
                          <CurrentDirLinks links={["", "fog"]} />
                        }
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
          </Suspense>
        </ColorContext.Provider>
      </Router>
    </>
  );
};

export default App;
