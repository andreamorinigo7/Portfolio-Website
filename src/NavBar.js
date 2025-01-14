import React from "react";
import "./NavBar.css";

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
          <ul>
            <li className="active">
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/portfolio">Portfolio</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
