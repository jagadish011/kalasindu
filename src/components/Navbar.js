import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles/core.css";
import logo from "../assets/images/logo.png";

function Navbar() {
  return (
    <>
      <nav
        className="navbar custom-nav navbar-expand-lg"
        style={{
          background: "rgba(0, 0, 0, 1)",
          position: "fixed",
          top: "0",
          zIndex: "999999",
          width: "100%",
        }}
      >
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img src={logo} height="60" width={200} alt="Logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-lg-0">
              <li className="nav-item px-3">
                <NavLink
                  exact
                  className="nav-link"
                  to="/"
                  activeClassName="active"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item px-3">
                <NavLink
                  className="nav-link"
                  to="/about"
                  activeClassName="active"
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item px-3">
                <NavLink
                  className="nav-link"
                  to="/events2"
                  activeClassName="active"
                >
                  Events
                </NavLink>
              </li>
              <li className="nav-item px-3">
                <NavLink
                  className="nav-link"
                  to="/education"
                  activeClassName="active"
                >
                  Education
                </NavLink>
              </li>
              <li className="nav-item px-3">
                <NavLink
                  className="nav-link"
                  to="/collaborate"
                  activeClassName="active"
                >
                  Collaborate
                </NavLink>
              </li>
              <li className="nav-item px-3">
                <NavLink
                  className="nav-link"
                  to="/gallery"
                  activeClassName="active"
                >
                  Gallery
                </NavLink>
              </li>
              <li className="nav-item px-3">
                <NavLink
                  className="nav-link"
                  to="/support"
                  activeClassName="active"
                >
                  Support
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
