import React from "react";
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-text">
        <h1 id="hero-heading">Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
        </p>
        <a href="/main">
          <button aria-label="Reserve a Table">Reserve a Table</button>
        </a>
      </div>
      <div className="hero-image">
        <img src="/images/3d3cce7a3104bf255ed0e69195e2a157338c1bff.jpg" alt="Restaurant dishes being served" />
      </div>
    </section>
  );
};

export default HeroSection;
