import React from "react";
import { Link } from "react-router-dom";
import { Header } from "./Header";
import { Text } from "./Text";

interface Props {
  color: string;
}

export const Information: React.FC<Props> = ({ color }) => {
  return (
    <>
      <div className={"shadow-container-" + color}>
        <Header size="h1" title="Information" color={color} />
        <div className="row" style={{ paddingTop: "15px" }}>
          <div className="col-md-6">
            <Header size="h2" title="Useful languages" color={color} />
            <div style={{ textAlign: "center" }}>
              <Text
                color={color}
                text={[
                  "Java",
                  "MySQL",
                  "HTML/CSS/JSP",
                  "Javascript",
                  "Typescript (This website)",
                  "React (This website)",
                ]}
              />
            </div>
          </div>
          <div className="col-md-6" style={{ textAlign: "center" }}>
            <Header size="h2" title="Links" />
            <div>
              <Link
                to={{ pathname: "https://github.com/CphTobias" }}
                target="_blank"
                className={"website-link-" + color}
              >
                Github
              </Link>
              <br></br>
              <Link
                to={{ pathname: "https://github.com/CphTobias" }}
                target="_blank"
                className={"website-link-" + color}
              >
                Linkedin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
