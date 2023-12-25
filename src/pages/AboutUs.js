import React from "react";
import "./Aboutus.css";
import white from "../img/whitearrow.svg";

function AboutUs() {
  return (
    <>
      <div className="aboutus">
        <div className="first">
          <p className="overfirst fw-bold position-absolute top-50">
            Build Your Future With Us
          </p>
          <p className="oversec position-absolute top-50">
            Join our team and bring a difference to the world of business
            consulting.
          </p>
          <div className="apply position-absolute top-50 end-0 translate-middle-y">
            <img src={white} alt="arrow" />
            <p>Apply Now</p>
          </div>
        </div>
        <div className="second">
          <p className="oversecond fw-bold position-absolute">
            Want to Upscale Your Business?
          </p>
          <p className="overflow position-absolute">
            Send us a message and a member from our team will assist you.
          </p>
          <div className="last">
            <img src={white} alt="arrow" />
            <p>Get In Touch</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
