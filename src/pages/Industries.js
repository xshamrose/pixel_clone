import React from "react";
import "./indus.css";
import photos from "../img/photo.svg";
import arrow from "../img/Arrow2.svg";
import round from "../img/Ellipse2.svg";
function Industries() {
  const service = [
    "Consumer Goods",
    "Retail Market",
    "MSMEs & Start-ups",
    "Furniture Manufacturing",
    "FMCG Companies",
    "Fintech Firms",
    "Education & Skill Development",
  ];

  const itemsPerRow = 2;

  const rows = [];
  for (let i = 0; i < service.length; i += itemsPerRow) {
    rows.push(service.slice(i, i + itemsPerRow));
  }

  return (
    <div className="page2">
      <div className="image">
        <img className="indusphoto" alt="Rectangle" src={photos} />
        <div className="help">
          <p className="text-wrapper">We Will Help Your Business Grow</p>
        </div>
      </div>
      <div className="grow">
        <p className="tailored-consulting">
          Tailored Consulting Services for Sustainable Growth &amp; Success
        </p>
        <p className="with-a-team-of">
          With a team of experts and extensive experience, Pixel Studios helps
          various businesses, industries, start-ups, and businesses of all sizes
          with strategic consulting and result-driven solutions.
        </p>
        <div className="serve">Industries We Serve:</div>
        <div className="list">
          {service.map((category, index) => (
            <div
              className="listservice"
              key={index}
              style={{ display: "flex", marginBottom: "10px" }}
            >
              <span
                className="indexno"
                style={{ marginRight: "10px", color: " #a5a6aa80 " }}
              >
                {index < 9 ? `0${index + 1}` : index + 1}.
              </span>
              {category}
            </div>
          ))}
        </div>
        <div className="know">
          <img className="arrow" alt="Arrow" src={arrow} />{" "}
          <img className="round" alt="round" src={round} />
          <span className="knowtext">Know More</span>
        </div>
      </div>
    </div>
  );
}

export default Industries;
