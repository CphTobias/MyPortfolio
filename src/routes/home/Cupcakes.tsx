import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ColorContext } from "../../globalstates/ColorContext";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Text } from "../../components/Text";

interface Props {}

export const Cupcakes: React.FC<Props> = () => {
  const color = useContext(ColorContext);

  return (
    <div>
      <main className="container">
        <div className={`shadow-container-${color}`}>
          <Header size="h1" title="Cupcakes" />
          <Header size="h3" title="Project given by Cphbusiness" />
          <Header
            size="h4"
            title="Created with a java backend, using tomcat + .jsp and java webservlets"
          />
          <div className="textfield">
            <Text
              text={[
                "This was our first project in web development, we learned a lot about the fundementals, such as post redirect get.",
                "We were given the task of creating a website which, would make it possible for users, to put as many cupcakes they want into a basket.",
                "They would then be able to pay for it (using fake money, given to the user by an admin).",
              ]}
            />
          </div>
          <div style={{ marginLeft: "10px" }}>
            <Link
              to={{
                pathname: "https://github.com/CphTobias/Cupcake-Resterende",
              }}
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
                  to="fog"
                />
              </div>
              <div className="col-md-4">
                <Card
                  altId="Infrastructure"
                  cardText="Infrastructure"
                  image={"https://picsum.photos/id/237/200/200"}
                  to="fog"
                />
              </div>
              <div className="col-md-4">
                <Card
                  altId="FrontEnd"
                  cardText="Front end"
                  image={"https://picsum.photos/id/237/200/200"}
                  to="fog"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
