import React from "react";

const MainVisual: React.FC = () => {
  return (
    <div id="mainvisual">
      <picture>
        <source media="(max-width: 600px)" srcSet="img/mainvisual-sp.jpg" />
        <img src="img/mainvisual-pc.jpg" alt="Main Visual" />
      </picture>
    </div>
  );
};

export default MainVisual;
