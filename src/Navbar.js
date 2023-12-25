import React from "react";
import logo from "./img/Group.svg";
import "./Navbar.css";
import search from "./img/Group-1000002639.svg";

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg  transparent-navbar">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img className="logo" alt="#" src={logo} />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <label> Home</label>
            <label>Industries</label>
            <label>Services</label>
            <label>Consulting</label>
            <label>Insights</label>
            <label>About Us</label>
            <div className="search">
              <img className="search" alt="Group" src={search} />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
