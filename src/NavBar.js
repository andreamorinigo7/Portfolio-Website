import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <div className="container container-header m-1">
        <nav className="d-flex justify-content-between">
          <div className="logo">
            <a href="/" title="Website logo">
              A <span className="rotate">E</span> M A
            </a>
          </div>
          <div className="nav-links">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active-link" : "link")}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active-link" : "link")}
            >
              About
            </NavLink>
            <NavLink
              to="/portfolio"
              className={({ isActive }) => (isActive ? "active-link" : "link")}
            >
              Portfolio
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active-link" : "link")}
            >
              Contact
            </NavLink>
          </div>
        </nav>
      </div>
    </div>
  );
}
