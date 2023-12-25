import React from "react";
import "./Insights.css";
import one from "../img/1.jpg";
import two from "../img/2.jpg";
import three from "../img/3.jpg";
import arrowgrp from "../img/arrowgrp.svg";
function Insights() {
  const newsData = [
    {
      category: "Business Strategy",
      date: "06 Apr 2022",
      title: "Global Recession Watch: The Latest Data",
      image: one,
    },
    {
      category: "Business Strategy",
      date: "04 Apr 2022",
      title: "Management Tools & Trends 2023",
      image: two,
    },
    {
      category: "Business Strategy",
      date: "06 Apr 2022",
      title: "How Engine 2 Expansion Can Power the Future of Retail",
      image: three,
    },
  ];
  return (
    <>
      <div className="insights">
        <center>
          {" "}
          <h1>Read Our Latest Insights</h1>
        </center>
      </div>
      <div className="latest">
        {newsData.map((news, index) => (
          <div key={index} className="latest-item">
            <div className="latest-date-row">
              <p>{news.category}</p>
              <div className="ellipse" />
              <p>{news.date}</p>
            </div>
            <p className="title"> {news.title}</p>
            <img src={news.image} alt="img" />
            <img className="arrowgrp" src={arrowgrp} alt="arrow" />
          </div>
        ))}
      </div>
      <center>
        {" "}
        <div className="viewall">View All Insights</div>
      </center>
    </>
  );
}

export default Insights;
