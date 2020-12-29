import React from "react";
import { Link } from "react-router-dom";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Text } from "../../components/Text";

interface Props {
  color: string;
}

export const Cupcakes: React.FC<Props> = (props) => {
  const color = props.color;

  return (
    <div>
      <main className="container">
        <div className={`shadow-container-${color}`}>
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
        <div className={`shadow-container-${color}`}>
          <Header size="h1" color={color} title="Learn more" />
          <Header
            size="h3"
            color={color}
            title="In this section i will tell you a bit about how the project was created..."
          />
          <Header
            size="h5"
            color={color}
            title="Click the link for whichever one, you want to learn more about"
          />
          <div className="container">
            <div className="row" style={{ marginTop: "30px" }}>
              <div className="col-md-4">
                <Card
                  altId="api"
                  cardText="API"
                  color={color}
                  image={"https://picsum.photos/id/237/200/200"}
                  to="fog"
                />
              </div>
              <div className="col-md-4">
                <Card
                  altId="Infrastructure"
                  cardText="Infrastructure"
                  color={color}
                  image={"https://picsum.photos/id/237/200/200"}
                  to="fog"
                />
              </div>
              <div className="col-md-4">
                <Card
                  altId="FrontEnd"
                  cardText="Front end"
                  color={color}
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
