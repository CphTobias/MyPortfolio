import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { Text } from "../../components/Text";

export const Fog = ({ color }) => {
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
          <Header size="h1" color={color} title="Fog" />
          <Header
            size="h3"
            color={color}
            title="Project given by Cphbusiness"
          />
          <Header
            size="h4"
            color={color}
            title="Created with a java backend, using tomcat + .jsp and java webservlets"
          />
          <Text
            color={color}
            text={[
              "This project was done in about 4-5 weeks i believe.",
              "The project was about creating a sort of clone of a company called Fog. They used to have or maybe still has, a very outdated system.",
              "The idea was, to make a website with that could handle a lot of carport requests, which would be helt in a database. The system should be able to compleately handle everything that happens from, when a customer orders a carport, to when it has been bought.",
            ]}
          />
          <Link
            to={{ pathname: "https://github.com/Jonasmik/Fog-TheGurus" }}
            target="_blank"
            className={"website-link-" + color}
          >
            Project github repository
          </Link>
        </div>
      </main>
    </div>
  );
};
