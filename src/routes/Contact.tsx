import React from "react";
import { ContactForm } from "../components/ContactForm";
import { Header } from "../components/Header";

interface Props {
  color: string;
}

export const Contact: React.FC<Props> = ({ color }) => {
  return (
    <div>
      <main className="container">
        <div className={`shadow-container-${color}`}>
          <Header size="h1" color={color} title="Contact" />
          <Header
            size="h5"
            color={color}
            title="I will always try to respond quickly to your message"
          />
          <ContactForm color={color} />
        </div>
      </main>
    </div>
  );
};
