import React from "react";
import Work1 from "../assets/works1.jpg";
import Work2 from "../assets/works2.jpg";
import Work3 from "../assets/works3.jpg";
import Work4 from "../assets/works4.jpg";
import Work5 from "../assets/works5.jpg";
import Work6 from "../assets/works6.jpg";

const worksImages = [Work1, Work2, Work3, Work4, Work5, Work6];

const Works: React.FC = () => {
  return (
    <section id="works" className="wrapper">
      <h2 className="sec-title">Works</h2>
      <ul>
        {worksImages.map((image, index) => (
          <li key={index}>
            <img src={image} alt={`テキストテキストテキスト ${index + 1}`} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Works;
