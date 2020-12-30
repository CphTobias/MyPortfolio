import * as React from "react";
import { ColorContext } from "../../globalstates/ColorContext";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Text } from "../../components/Text";

const { useEffect, useContext } = React;

interface Props {
  scrollToTop: () => void;
}

export const FogInfrastructure: React.FC<Props> = ({ scrollToTop }) => {
  const color = useContext(ColorContext);
  useEffect(() => {
    scrollToTop();
  }, [scrollToTop]);

  return (
    <div>
      <main className="container">
        <div className={`shadow-container-${color}`}>
          <Header size="h1" title="Fog infrastructure" />
          <Header size="h3" title="Infrastructure section" />
          <Text text={["Some text about the infrastructure"]} />
        </div>
        <div className={`shadow-container-${color}`}>
          <Header size="h1" title="Infrastructure sections" />
          <Header
            size="h3"
            title="Step into each topic, in which i will explain the implementations of each of them"
          />
          <div className="container">
            <div className="row" style={{ marginTop: "30px" }}>
              <div className="col-md-4">
                <Card
                  altId="Domain"
                  cardText="Domain"
                  image={"https://picsum.photos/id/237/200/200"}
                  to="fog/infrastructure"
                />
              </div>
              <div className="col-md-4">
                <Card
                  altId="MySQL"
                  cardText="MySQL"
                  image={"https://picsum.photos/id/237/200/200"}
                  to="fog/infrastructure"
                />
              </div>
              <div className="col-md-4">
                <Card
                  altId="Database implementation"
                  cardText="Database implementation"
                  image={"https://picsum.photos/id/237/200/200"}
                  to="fog/infrastructure"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
