import React, { useContext } from "react";
import { Header } from "../components/Header";
import { Text } from "../components/Text";
import { ColorContext } from "../globalstates/ColorContext";

interface Props {}

export const About: React.FC<Props> = () => {
  const color = useContext(ColorContext);
  return (
    <div>
      <main className="container">
        <div className={`shadow-container-${color}`}>
          <Header size="h1" title="About me" />
          <Header size="h3" title="Cphbusiness" />
          <br></br>
          <Text
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
