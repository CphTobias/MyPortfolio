import React from "react";
import { Card } from "../components/Card";
import { Header } from "../components/Header";
import { Text } from "../components/Text";

export const Home = ({ color }) => {
  return (
    <div>
      <main className="mainContainer container">
        <div
          className={
            color === "yellow"
              ? "shadow-container-yellow"
              : "shadow-container-white"
          }
        >
          <Header size="h1" color={color} title="Home page" />
        </div>
        <div className={"shadow-container-" + color}>
          <Header size="h1" color={color} title="My projects" />
          <div className="row" style={{ marginTop: "25px" }}>
            <div className="col-md-2"></div>
            <div className="col-md-3">
              <Card
                color={color}
                cardText="Fog clone"
                image="https://picsum.photos/id/237/200/200"
                altId="Yes"
                to="fog"
              />
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-3">
              <Card
                color={color}
                cardText="Cupcake order website"
                image="https://picsum.photos/id/237/200/200"
                altId="Yes"
                to="fog"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
