import React from "react";
import parse from "html-react-parser";

import "../styles/overview.css";

export const OverView = ({ title, data }) => {
  return (
    <div className={"componentLayout pad"}>
      <h2>
        <span className={"overiviewTitle"}>{title}</span>
      </h2>
      {data.map((element, index) => (
        <p key={index}>{parse(element)}</p>
      ))}
    </div>
  );
};
