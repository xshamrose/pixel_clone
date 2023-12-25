import React, { useState, useEffect, useMemo } from "react";
import "./Consulting.css";
import sales from "../img/consult/sales.svg";
import branding from "../img/consult/branding.svg";
import business from "../img/consult/business.svg";
import b2b from "../img/consult/b2b.svg";
import digital from "../img/consult/digital.svg";
import expansion from "../img/consult/expansion.svg";
import hr from "../img/consult/hr.svg";
import operation from "../img/consult/operation.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

function Consulting() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const arr = useMemo(
    () => [
      [
        { image: sales, content: "Sales & Marketing" },
        { image: branding, content: "Branding" },
        { image: operation, content: "Operations" },
        { image: digital, content: "Digital Strategy & Communication" },
      ],
      [
        { image: b2b, content: "B2B & B2C Market" },
        { image: business, content: "Business Growth" },
        { image: expansion, content: "Business Expansion" },
        { image: hr, content: "HR Solution" },
      ],
    ],
    []
  );

  useEffect(() => {
    const initialIndex = 0;
    setIndex(initialIndex);

    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % arr.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [arr]);

  return (
    <>
      <div className="consult">
        <div>
          <center>
            <p className="expert">
              Expert Consulting Services for Driving Businesses Forward
            </p>
          </center>
        </div>
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          indicators={false}
        >
          {arr.map((row, rowIndex) => (
            <Carousel.Item key={rowIndex}>
              <div className="img-all">
                {row.map((slide, colIndex) => (
                  <div key={colIndex} className="one">
                    <img
                      className="w-400 my-custom-img-classes"
                      src={slide.image}
                      alt={`Row ${rowIndex + 1}, Item ${colIndex + 1}`}
                    />
                    <div className="bottom-content">
                      <p className="slide-content">{slide.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default Consulting;
