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
                <Text text={["These are our facades"]} />
              </div>
              <img
                src="https://picsum.photos/id/237/400/400"
                alt="awesomeDog"
              />
            </section>
            <section
              ref={factoryRef}
              className={`shadow-container-${color} info-content`}
            >
              <div className="col2">
                <Header size="h2" title="Factories" />
                <Text text={["This is a factory"]} />
              </div>
              <img
                src="https://picsum.photos/id/237/400/400"
                alt="awesomeDog"
              />
            </section>
            <section
              ref={constructorRef}
              className={`shadow-container-${color} info-content`}
            >
              <div className="col2">
                <Header size="h2" title="Constructor" />
                <Text text={["This is my constructor", "Isn't it nice?!"]} />
              </div>
              <img
                src="https://picsum.photos/id/237/400/400"
                alt="awesomeDog"
              />
            </section>
            <section
              ref={settingsRef}
              className={`shadow-container-${color} info-content`}
            >
              <div className="col2">
                <Header size="h2" title="Settings" />
                <Text text={["Settings yay!"]} />
              </div>
              <img
                src="https://picsum.photos/id/237/400/400"
                alt="awesomeDog"
              />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};
