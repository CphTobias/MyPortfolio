import React from "react";
import { Header } from "../components/Header";
import { Text } from "../components/Text";

export const About = ({ color }) => {
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
          <Header size="h1" color={color} title="About me" />
          <Header size="h3" color={color} title="Cphbusiness" />
          <br></br>
          <Text
            color={color}
            text={[
              "My name is Tobias Zimmermann, and i am currently studying at Cphbusiness in Denmark",
              "As of right now i am just finishing my first year of an AP in Computer Science",
            ]}
          />
        </div>
      </main>
    </div>
  );
};
