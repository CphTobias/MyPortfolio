import React from "react";
import { Header } from "../components/Header";
import { Text } from "../components/Text";

interface Props {
  color: string;
}

export const About: React.FC<Props> = ({ color }) => {
  return (
    <div>
      <main className="container">
        <div className={`shadow-container-${color}`}>
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
