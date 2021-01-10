import * as React from "react";
import { ColorContext } from "../../globalstates/ColorContext";
import { Header } from "../../components/Header";
import { Text } from "../../components/Text";

const { useContext, useRef } = React;

interface Props {}

export const FogApi: React.FC<Props> = () => {
  const color = useContext(ColorContext);
  const apiRef = useRef<HTMLInputElement>(null);
  const facadeRef = useRef<HTMLInputElement>(null);
  const factoryRef = useRef<HTMLInputElement>(null);
  const constructorRef = useRef<HTMLInputElement>(null);
  const settingsRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <main className="info-wrapper">
        <div className="info-grid">
          <section className={`shadow-container-${color} links`}>
            <div className="info-links">
              <div className={`link-header-${color}`}>
                <Header size="h2" title="Shortcuts" />
              </div>
              <ul>
                <li
                  onClick={() =>
                    apiRef.current?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  className={`${color}`}
                >
                  Start
                </li>
                <li
                  onClick={() =>
                    facadeRef.current?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  className={`${color}`}
                >
                  Facades
                </li>
                <li
                  onClick={() =>
                    factoryRef.current?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  className={`${color}`}
                >
                  Factories
                </li>
                <li
                  onClick={() =>
                    constructorRef.current?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  className={`${color}`}
                >
                  Constructor
                </li>
                <li
                  onClick={() =>
                    settingsRef.current?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  className={`${color}`}
                >
                  Settings
                </li>
              </ul>
            </div>
          </section>
          <div className="info-container">
            <section
              ref={apiRef}
              className={`shadow-container-${color} info-content`}
            >
              <div className="col1">
                <Header size="h1" title="Api" />
                <Text
                  text={[
                    "In this section i will tell you about our api.",
                    "In our api you can find four things. Our facades, factories, api constructor and our settings. If you want to step the each of them, you can always click to go there.",
                  ]}
                />
              </div>
            </section>
            <section
              ref={facadeRef}
              className={`shadow-container-${color} info-content`}
            >
              <div className="col2">
                <Header size="h2" title="Facades" />
                <Text
                  text={[
                    "Our facades are to as a middleman, for calling our repositories.",
                    "These repositories are interfaces, which are implemented inside our infrastructure.",
                    "This is done because we want the class to first of all know nothing about the overall program, but also so that it only has a single purpose.",
                    "Our facades each has a getInstance method, which through using a singleton pattern will always have one instance. This is usefull when creating our api in the ICommand",
                  ]}
                />
              </div>
              <img
                className="info-pic"
                src={process.env.PUBLIC_URL + "/images/fog/api/Facade.png"}
                alt="Facade"
              />
            </section>
            <section
              ref={factoryRef}
              className={`shadow-container-${color} info-content`}
            >
              <div className="col2">
                <Header size="h2" title="Factories" />
                <Text
                  text={[
                    "Our factories are used as a way, to validate input before commiting.",
                    "This is done through having setters and getters, some of which parsing strings, into integers.",
                    "After settings all of the properties inside our factory, we can use this isValid method. It will then return false, if any of parameters are not set, or incorrectly set",
                  ]}
                />
              </div>
              <img
                className="info-pic"
                src={process.env.PUBLIC_URL + "/images/fog/api/Factory.png"}
                alt="Factory"
              />
            </section>
            <section
              ref={constructorRef}
              className={`shadow-container-${color} info-content`}
            >
              <div className="col2">
                <Header size="h2" title="Constructor" />
                <Text
                  text={[
                    "Our api constructor, is there to be created by the ICommand.",
                    "It allows all of our commands to call api.getFACADENAME.method",
                  ]}
                />
              </div>
              <img
                className="info-pic"
                src={process.env.PUBLIC_URL + "/images/fog/api/Constructor.png"}
                alt="Constructor"
              />
            </section>
            <section
              ref={settingsRef}
              className={`shadow-container-${color} info-content`}
            >
              <div className="col2">
                <Header size="h2" title="Settings" />
                <Text
                  text={[
                    "The settings part is used for easy access to changing values. In this example we are generating all of the widths and lengths that our carpots can have.",
                    "This is useful, because at any point in time we can just change one value, if we suddendly don't have these lengths anymore.",
                  ]}
                />
              </div>
              <img
                className="info-pic"
                src={
                  process.env.PUBLIC_URL + "/images/fog/api/CarportSettings.png"
                }
                alt="Settings"
              />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};
