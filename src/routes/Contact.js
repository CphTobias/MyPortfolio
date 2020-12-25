import React from "react";
import { Header } from "../components/Header";

export const Contact = ({ color }) => {
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
          <Header size="h1" color={color} title="Contact" />
          <Header size="h5" color={color} title="Program is working!" />
          <p className={"text-color-" + color}>Something</p>
        </div>
      </main>
    </div>
  );
};
