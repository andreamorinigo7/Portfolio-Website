import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div className="inquiry-box">
        <div className="work-inquiry justify-content-between d-none d-md-flex">
          <div>
            <h2>Work Inquiry</h2>
            <small className="text-muted">Let's work together!</small>
          </div>
          <div>
            <a
              href="mailto:morinigoandrea7@gmail.com"
              title="Email button"
              className="btn btn-branding"
            >
              Let's talk here
            </a>
          </div>
        </div>

        <div className="d-flex justify-content-center mb-5 mt-5">
          <a
            href="mailto:morinigoandrea7@gmail.com"
            title="Email button"
            className="email-link"
          >
            morinigoandrea7@gmail.com
          </a>
        </div>

        <div className="social-links d-flex justify-content-center">
          <a
            href="https://www.linkedin.com/in/andreamorinigo/"
            title="Linkedin button"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://www.github.com/andreamorinigo7/"
            title="Github button"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <p className="pt-5 text-muted text-center">
          This project was coded by Andrea Morinigo and it is
          <a
            href="https://github.com/andreamorinigo7/portfolio-project"
            className="text-muted text-decoration-none"
          >
            {" "}
            open-sourced
          </a>
        </p>
      </div>
    </footer>
  );
}
