import * as React from "react";
import { ColorContext } from "../../globalstates/ColorContext";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Text } from "../../components/Text";

const { useContext } = React;

interface Props {}

export const FogApi: React.FC<Props> = () => {
  const color = useContext(ColorContext);

  return (
    <div>
      <main className="container">
        <div className={`shadow-container-${color}`}>
          <Header size="h1" title="Fog api" />
          <Header size="h3" title="Api section" />
          <div className="textfield">
            <Text text={["Some text about the api"]} />
          </div>
        </div>
        <div className={`shadow-container-${color}`}>
          <Header size="h1" title="Api sections" />
          <Header
            size="h3"
            title="Step into each topic, in which i will explain the implementations of each of them"
          />
          <div className="container">
            <div className="row" style={{ marginTop: "30px" }}>
              <div className="col-md-4">
                <Card
                  altId="Facades"
                  cardText="Facades"
                  image={"https://picsum.photos/id/237/200/200"}
                  to="fog/api"
                />
              </div>
              <div className="col-md-4">
                <Card
                  altId="Factories"
                  cardText="Factories"
                  image={"https://picsum.photos/id/237/200/200"}
                  to="fog/api"
                />
              </div>
              <div className="col-md-4">
                <Card
                  altId="ApiConstructor"
                  cardText="Api constructor"
                  image={"https://picsum.photos/id/237/200/200"}
                  to="fog/api"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
