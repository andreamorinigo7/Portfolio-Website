import React from "react";
import "./About.css";
import Footer from "./Footer";
import headshot from "./img/andrea.jpg";

export default function About() {
  return (
    <div>
      <div className="content-container container mb-5">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="content">
              <h1 className="mb-4">About Me</h1>
              <h2 className="mb-4">Front-end Developer based in New York</h2>
              <p className="mb-5">
                I began my coding journey in early 2024, though I initially
                taught myself a few basics as a kid. With a background in art
                from NYU, I'm thrilled to pursue a career in coding full-time,
                combining creativity with technology. Building and creating have
                always been my passions, and coding lets me bring those ideas to
                life. I am proficient in Javascript, responsive web design, and
                React. I finished the SheCodes BootCamp, and I am excited to see
                how much I can create in such a short time!
              </p>
              <a
                href="/portfolio"
                title="Project button"
                className="btn btn-branding-outline"
              >
                View all projects
              </a>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-center mt-5">
            <img
              src={headshot}
              alt="andrea-photo"
              className="img-fluid head-shot"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
