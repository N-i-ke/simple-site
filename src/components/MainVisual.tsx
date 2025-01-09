import React from "react";
import mainVisual from "../assets/mainvisual-pc.jpg";
import mainVisualSP from "../assets/mainvisual-sp.jpg";

const MainVisual: React.FC = () => {
  return (
    <div id="mainvisual">
      <picture>
        <source media="(max-width: 600px)" srcSet={mainVisualSP} />
        <img src={mainVisual} alt="Main Visual" />
      </picture>
    </div>
  );
};

export default MainVisual;
