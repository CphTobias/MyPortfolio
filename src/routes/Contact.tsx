import React, { useContext } from "react";
import { ContactForm } from "../components/ContactForm";
import { Header } from "../components/Header";
import { ColorContext } from "../globalstates/ColorContext";

interface Props {}

export const Contact: React.FC<Props> = () => {
  const color = useContext(ColorContext);
  return (
    <div>
      <main className="mycontainer">
        <div className="grid">
          <div className={`shadow-container-${color} contact-grid`}>
            <Header size="h1" title="Contact" />
            <Header
              size="h5"
              title="I will always try to respond quickly to your message"
            />
            <ContactForm color={color} />
          </div>
        </div>
      </main>
    </div>
  );
};
