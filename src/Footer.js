import React from "react";
import "./Footer.css";
import logo from "./img/Logo.svg";
import location from "./img/Group55.svg";
import phone from "./img/Group56.svg";
import message from "./img/Group57.svg";
import social from "./img/social.svg";

function Footer() {
  return (
    <>
      <div className="frame">
        <div className="group">
          <div className="text-wrapper">Quick Links</div>
          <div className="div">Home</div>
          <div className="text-wrapper-2">About Us</div>
          <div className="text-wrapper-3">Blogs</div>
          <div className="text-wrapper-4">Careers</div>
          <div className="text-wrapper-5">Contact Us</div>
          <div className="text-wrapper-6">Privacy Policy</div>
        </div>
        <div className="group-2">
          <div className="text-wrapper">Services</div>
          <div className="div">Sales &amp; Marketing</div>
          <div className="text-wrapper-2">Branding</div>
          <div className="text-wrapper-3">Operations</div>
          <div className="text-wrapper-4">
            Digital Strategy &amp; Communication
          </div>
          <div className="text-wrapper-5">B2B &amp; B2C Market</div>
          <div className="text-wrapper-6">Business Growth</div>
          <div className="text-wrapper-7">Business Expansion</div>
          <div className="text-wrapper-8">HR Solutions</div>
        </div>
        <div className="group-3">
          <div className="text-wrapper">Industries we Serve</div>
          <div className="div">Consumer Goods</div>
          <div className="text-wrapper-2">Retail Market</div>
          <div className="text-wrapper-3">MSMEs &amp; Start-ups</div>
          <div className="text-wrapper-4">Furniture Manufacturing</div>
          <div className="text-wrapper-5">
            Education &amp; Skill Development
          </div>
          <div className="text-wrapper-6">Fintech Firms</div>
          <div className="text-wrapper-7">FMCG</div>
        </div>
        <div className="group-4">
          <div className="group-wrapper">
            <div className="group-5">
              <p className="p">
                1833, 18th Main Road Anna Nagar West, Thiruvalluvar Colony, Anna
                Nagar, Chennai, Tamil Nadu 600040
              </p>
              <img className="img" alt="Group" src={location} />
            </div>
          </div>
          <div className="group-6">
            <p className="element">
              <span className="span">
                +91 11111 22222
                <br />
                +91 33333 44444
              </span>
            </p>
            <img className="group-7" alt="Group" src={phone} />
          </div>
          <div className="group-8">
            <p className="info-pixel-studios">
              <span className="text-wrapper-9">info@pixel-studios.com</span>
            </p>
            <img className="group-9" alt="Group" src={message} />
          </div>
          <div className="group-10">
            <img className="group-12" alt="Group" src={social} />
          </div>
        </div>
        <a class="navbar-brand" href="/">
          <img className="group-15" alt="Group" src={logo} />
        </a>
      </div>

      <div className="copyright">
        <p className="foot">
          Copyright @ 2023 | All Rights Reserved. Designed By Pixel Studios
        </p>
      </div>
    </>
  );
}

export default Footer;
