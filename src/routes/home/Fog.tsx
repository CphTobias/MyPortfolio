import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ColorContext } from "../../globalstates/ColorContext";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Text } from "../../components/Text";

interface Props {}

export const Fog: React.FC<Props> = () => {
  const color = useContext(ColorContext);
  return (
    <div>
      <main className="container">
        <div className={`shadow-container-${color}`}>
          <Header size="h1" title="Fog" />
          <Header size="h3" title="Project given by Cphbusiness" />
          <Header
            size="h4"
            title="Created with a java backend, using tomcat + .jsp and java webservlets"
          />
          <div className="textfield">
            <Text
              text={[
                "This project was done in about 4-5 weeks i believe.",
                "The project was about creating a sort of clone of a company called Fog. They used to have or maybe still has, a very outdated system.",
                "The idea was, to make a website with that could handle a lot of carport requests, which would be helt in a database. The system should be able to compleately handle everything that happens from, when a customer orders a carport, to when it has been bought.",
              ]}
            />
          </div>
          <div style={{ paddingLeft: "10px" }}>
            <Link
              to={{ pathname: "https://github.com/Jonasmik/Fog-TheGurus" }}
              target="_blank"
              className={"website-link-" + color}
            >
              Project github repository
            </Link>
          </div>
        </div>
        <div className={`shadow-container-${color}`}>
          <Header size="h1" title="Learn more" />
          <Header
            size="h3"
            title="In this section i will tell you a bit about how the project was created..."
          />
          <Header
            size="h5"
            title="Click the link for whichever one, you want to learn more about"
          />
          <div className="container">
            <div className="row" style={{ marginTop: "30px" }}>
              <div className="col-md-4">
                <Card
                  altId="api"
                  cardText="API"
                  image={"https://picsum.photos/id/237/200/200"}
                  to="fog/api"
                />
              </div>
              <div className="col-md-4">
                <Card
                  altId="Infrastructure"
                  cardText="Infrastructure"
                  image={"https://picsum.photos/id/237/200/200"}
                  to="fog/infrastructure"
                />
              </div>
              <div className="col-md-4">
                <Card
                  altId="FrontEnd"
                  cardText="Front end"
                  image={"https://picsum.photos/id/237/200/200"}
                  to="fog/frontend"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
