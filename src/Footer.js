import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer>
      <div class="inquiry-box">
        <div class="work-inquiry justify-content-between d-none d-md-flex">
          <div>
            <h2>Work Inquiry</h2>
            <small class="text-muted">Let's work together!</small>
          </div>
          <div>
            <a
              href="mailto:morinigoandrea7@gmail.com"
              title="Email button"
              class="btn btn-branding"
            >
              Let's talk here
            </a>
          </div>
        </div>

        <div class="d-flex justify-content-center mb-5 mt-5">
          <a
            href="mailto:morinigoandrea7@gmail.com"
            title="Email button"
            class="email-link"
          >
            morinigoandrea7@gmail.com
          </a>
        </div>

        <div class="social-links d-flex justify-content-center">
          <a
            href="https://www.linkedin.com/in/andreamorinigo/"
            title="Linkedin button"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon="fa-brands fa-linkedin" />
          </a>
          <a
            href="https://www.github.com/andreamorinigo7/"
            title="Github button"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon="fa-brands fa-github" />
          </a>
        </div>
        <p class="pt-5 text-muted">
          This project was coded by Andrea Morinigo and it is
          <a
            href="https://github.com/andreamorinigo7/portfolio-project"
            class="text-muted text-decoration-none"
          >
            open-sourced
          </a>
        </p>
      </div>
    </footer>
  );
}
