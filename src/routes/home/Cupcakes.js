import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { Text } from "../../components/Text";

export const Cupcakes = ({ color }) => {
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
          <Header size="h1" color={color} title="Cupcakes" />
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
              "This was our first project in web development, we learned a lot about the fundementals, such as post redirect get.",
              "We were given the task of creating a website which, would make it possible for users, to put as many cupcakes they want into a basket.",
              "They would then be able to pay for it (using fake money, given to the user by an admin).",
            ]}
          />
          <Link
            to={{ pathname: "https://github.com/CphTobias/Cupcake-Resterende" }}
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

Cupcakes.propTypes = {
  color: PropTypes.string,
};
