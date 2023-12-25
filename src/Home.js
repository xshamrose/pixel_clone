import React from "react";
import "./Home.css";
import arrow from "./img/arrow-1.svg";
import Navbar from "./Navbar";
import Industries from "./pages/Industries";
import Consulting from "./pages/Consulting";
import Insights from "./pages/Insights";
import AboutUs from "./pages/AboutUs";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("*");
  };
  return (
    <>
      <div>
        <div className="component">
          <div
            className="h-100 w-100"
            style={{
              background:
                "linear-gradient(rgb(0 0 0 / 67%) 20%, rgba(0, 0, 0, 0) 84.24%)",
            }}
          >
            <Navbar />
            <div className="overlap-group">
              <div className="rectangle" />
              <p className="text-wrapper">
                Helping Organizations Improve their Efficiency and Performance.
              </p>
              <div className="knowmore">Know More</div>
              <div className="ellipsed" onClick={handleClick} />
              <img className="arrow" alt="Arrow" src={arrow} />
              <div className="group">
                <div className="rectangle-2" />
                <div className="ellipse-2" />
                <div className="ellipse-3" />
                <div className="ellipse-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Industries />
      <Consulting />
      <Insights />
      <AboutUs />
    </>
  );
}

export default Home;
