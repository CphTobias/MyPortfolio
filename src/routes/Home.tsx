import React, { useContext } from "react";
import { ColorContext } from "../globalstates/ColorContext";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Header } from "../components/Header";
import { Information } from "../components/Information";
import { Text } from "../components/Text";

interface Props {}

export const Home: React.FC<Props> = () => {
  const color = useContext(ColorContext);

  return (
    <div>
      <main className="container">
        <div className={`shadow-container-${color}`}>
          <div className="row">
            <div className="col-md-12">
              <Header size="h1" title="Introduction" />
              <div className="textfield">
                <Text
                  text={[
                    "Hi, I'm Tobias.",
                    "In this portfolio, you will be able to find my past projects, with explenations of how they work.",
                    "You will also be able find a list of everything i have experience with, when it comes to Computer Science",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={"shadow-container-" + color}>
          <Header size="h1" title="Past projects" />
          <div className="row" style={{ marginTop: "25px" }}>
            <div className="col-md-2"></div>
            <div className="col-md-3">
              <Card
                cardText="Fog clone"
                image="https://picsum.photos/id/237/200/200"
                altId="Yes"
                button={
                  <Button
                    color={color}
                    text="Go to project"
                    link="fog"
                    buttonStyle="btn-block"
                  />
                }
              />
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-3">
              <Card
                cardText="Cupcake order website"
                image="https://picsum.photos/id/237/200/200"
                altId="Yes"
                button={
                  <Button
                    color={color}
                    text={`Go to project`}
                    link="cupcakes"
                    buttonStyle="btn-block"
                  />
                }
              />
            </div>
          </div>
        </div>
        <Information color={color} />
      </main>
    </div>
  );
};
