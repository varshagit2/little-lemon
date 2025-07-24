import React from "react";
import "./About.css"; // 👈 import the stylesheet

function About() {
  return (
    <section id="about" className="about-section" aria-labelledby="about-heading">
      <div className="about-container">
        <h2 id="about-heading">About Us</h2>
        <p>
          Welcome to Little Lemon! We are a family-owned Mediterranean restaurant
          focused on traditional recipes served with a modern twist. Our mission is
          to provide delicious and authentic cuisine made with fresh ingredients and
          a whole lot of love.
        </p>
      </div>
    </section>
  );
}

export default About;
