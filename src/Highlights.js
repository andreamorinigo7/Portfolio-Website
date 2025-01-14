import React from "react";
import weather from "./img/weather.png";
import worldclock from "./img/world-clock.png";
import calculator from "./img/calculator.png";

export default function Highlights() {
  return (
    <div className="highlights">
      <div class="container">
        <div class="row mb-5">
          <div class="col d-none d-lg-block">
            <img src={weather} alt="Weather-App" class="img-fluid rounded" />
          </div>
          <div class="col">
            <div class="project-details m-5">
              <h2 class="mb-5">Weather App</h2>
              <p class="mb-5">
                My weather app is a responsive and user-friendly tool that
                provides real-time weather updates based on the user's location
                or search input. Built using HTML, CSS, and JavaScript, it
                integrates with a weather API to display current conditions,
                temperature, humidity, and a 5-day forecast. The app's design
                focuses on clean visuals and ease of use, ensuring accessibility
                across all devices. This project showcases my ability to work
                with APIs, implement dynamic data handling, and create sleek,
                functional interfaces.
              </p>
              <a href="/portfolio" class="btn btn-branding-outline">
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div class="row mb-5">
          <div class="col">
            <div class="project-details m-5">
              <h2 class="mb-5">World Clock App</h2>
              <p class="mb-5">
                My world clock app is a sleek, intuitive tool that allows users
                to view the current time across multiple cities worldwide. Built
                with HTML, CSS, and JavaScript, the app offers a clean and
                interactive interface where users can easily select cities and
                see their local times updated in real-time. This project
                highlights my skills in manipulating time zone data, creating
                responsive designs, and delivering an efficient user experience
                for tracking time across different regions.
              </p>
              <a href="/portfolio" class="btn btn-branding-outline">
                Learn more
              </a>
            </div>
          </div>
          <div class="col d-none d-lg-block">
            <img
              src={worldclock}
              alt="World-Clock-App"
              class="img-fluid rounded"
            />
          </div>
        </div>
        <div class="row mb-5">
          <div class="col d-none d-lg-block">
            <img
              src={calculator}
              alt="Calculator-App"
              class="img-fluid rounded"
            />
          </div>
          <div class="col">
            <div class="project-details m-5">
              <h2 class="mb-5">Calculator App</h2>
              <p class="mb-5">
                My calculator app is a fully functional, minimalist tool
                designed for performing basic arithmetic operations with ease.
                Developed using HTML, CSS, and JavaScript, the app provides a
                responsive interface that works seamlessly across devices. With
                clear buttons and an intuitive layout, users can perform
                calculations effortlessly. This project demonstrates my
                proficiency in front-end development, handling user inputs, and
                creating practical, user-friendly applications.
              </p>
              <a href="/portfolio" class="btn btn-branding-outline">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
}
