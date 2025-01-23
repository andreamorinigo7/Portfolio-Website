import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <div className="content-container container text-center mt-0">
      <div className="content">
        <h1 className="mb-5">Contact Me</h1>
        <p className="contact-description">
          I'm always excited to hear about new projects and opportunities.
          Whether you have a question, need a quote, or just want to say hello,
          feel free to reach out!
        </p>
        <h3>Email</h3>
        <p>
          <a href="mailto:morinigoandrea7@gmail.com">
            morinigoandrea7@gmail.com
          </a>
        </p>
        <h3>Twitter</h3>
        <p>
          <a
            href="https://www.twitter.com/morinigoandrea7"
            rel="noreferrer"
            target="_blank"
          >
            @morinigoandrea7
          </a>
        </p>
        <h3>Instagram</h3>
        <p>
          <a
            href="https://www.instagram.com/andreaemorinigo"
            rel="noreferrer"
            target="_blank"
          >
            @andreaemorinigo
          </a>
        </p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="social-links d-flex justify-content-center mt-5">
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
          This project was coded by Andrea Morinigo and it is{" "}
          <a
            href="https://github.com/andreamorinigo7/portfolio-project"
            className="text-muted text-decoration-none"
          >
            open-sourced
          </a>
        </p>
      </div>
    </div>
  );
}
