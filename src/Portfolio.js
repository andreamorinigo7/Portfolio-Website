import React from "react";
import "./Portfolio.css";
import Footer from "./Footer";
import { projects } from "./Projects";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <div className="content-container container work-content mt-0">
        <div className="content">
          <h1>Portfolio</h1>
          <div className="row mt-5 portfolio-row">
            {projects.map((project) => (
              <div key={project.id} className="col-lg-3 mb-4">
                <div className="card">
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    className="card-img img-fluid"
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center ">{project.title}</h5>
                    <p className="card-text text-center mb-5 text-muted">
                      {project.languages}
                    </p>
                  </div>
                  <div className="card-overlay">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="card-button"
                    >
                      Visit Site
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
