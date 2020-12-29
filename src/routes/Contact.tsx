import React from "react";
import { ContactForm } from "../components/form/ContactForm";
import { Header } from "../components/Header";

interface Props {
  color: string;
}

export const Contact: React.FC<Props> = ({ color }) => {
  return (
    <div>
      <main className="container">
        <div
          className={
            color === "yellow"
              ? "shadow-container-yellow"
              : "shadow-container-white"
          }
        >
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
