import React from "react";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div>
      <div class="container container-header m-1">
        <nav class="d-flex justify-content-between">
          <div class="logo">
            <a href="/" title="Website logo">
              A <span class="rotate">E</span> M A
            </a>
          </div>
          <ul>
            <li class="active">
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
