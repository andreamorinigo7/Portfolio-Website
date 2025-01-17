import React from "react";
import "./Portfolio.css";
import Footer from "./Footer";
import painting from "./img/painting.png";

export default function Portfolio() {
  return (
    <div>
      <div class="content-container container work-content mt-0">
        <div class="content ">
          <h1>Portfolio</h1>
          <div class="row mt-5">
            <div class="col-lg-3 mb-4">
              <div class="card position-relative">
                <img
                  src={painting}
                  alt="Painting project preview"
                  class="card-img-top img-fluid"
                />
                <div class="card-body">
                  <h5 class="card-title text-center">Web App</h5>
                  <p class="card-text text-center text-muted">
                    HTML, CSS, Javascript
                  </p>
                </div>
                <div class="card-overlay">
                  <a
                    href="https://github.com/andreamorinigo7/painting-web-practice"
                    target="_blank"
                    rel="noreferrer"
                    class="card-button"
                  >
                    Visit Site
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
