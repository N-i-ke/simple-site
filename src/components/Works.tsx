import React from "react";

const Works: React.FC = () => {
  return (
    <section id="works" className="wrapper">
      <h2 className="sec-title">Works</h2>
      <ul>
        {Array.from({ length: 6 }, (_, index) => (
          <li key={index}>
            <img
              src={`img/works${index + 1}.jpg`}
              alt={`テキストテキストテキスト ${index + 1}`}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Works;
