import React from "react";
import Footer from "./Footer";
import "./Home.css";
import Highlights from "./Highlights";

export default function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>Andrea Morinigo</h1>
        <h2>Front-end Developer, based in New York</h2>
        <a href="/contact" className="btn btn-branding mt-5">
          Contact me
        </a>
      </div>
      <Highlights />
      <Footer />
    </div>
  );
}
