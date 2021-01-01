import * as React from "react";
import { ColorContext } from "../../globalstates/ColorContext";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Text } from "../../components/Text";

const { useContext } = React;

interface Props {}

export const FogFrontEnd: React.FC<Props> = () => {
  const color = useContext(ColorContext);

  return (
    <div>
      <main className="container">
        <div className={`shadow-container-${color}`}>
          <Header size="h1" title="Fog front end" />
          <Header size="h3" title="Front end section" />
          <div className="textfield">
            <Text text={["Some text about the front end"]} />
          </div>
        </div>
        <div className={`shadow-container-${color}`}>
          <Header size="h1" title="Front end sections" />
          <Header
            size="h3"
            title="Step into each topic, in which i will explain the implementations of each of them"
          />
          <div className="container">
            <div className="row" style={{ marginTop: "30px" }}>
              <div className="col-md-4">
                <Card
                  altId="servlet/commandPattern"
                  cardText="Sevlet/Command pattern"
                  image={"https://picsum.photos/id/237/200/200"}
                  to="fog/frontend/command-pattern"
                />
              </div>
              <div className="col-md-4">
                <Card
                  altId="JSP"
                  cardText="JSP/Tomcat"
                  image={"https://picsum.photos/id/237/200/200"}
                  to="fog/frontend/jsp"
                />
              </div>
              <div className="col-md-4">
                <Card
                  altId="Javascript"
                  cardText="Javascript"
                  image={"https://picsum.photos/id/237/200/200"}
                  to="fog/frontend/javascript"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
