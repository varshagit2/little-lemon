import React from "react";
import './Testimonials.css';

const testimonials = [
  { name: "Alice", rating: 5, review: "Excellent food!" },
  { name: "Bob", rating: 4, review: "Loved the service!" },
  { name: "Cara", rating: 5, review: "Would visit again!" }
];

const Testimonials = () => {
  return (
    <section className="testimonials" aria-labelledby="testimonials-heading">
      <h2 id="testimonials-heading">Testimonials</h2>
      <div className="testimonials-grid">
        {testimonials.map((t) => (
          <article key={t.name} className="testimonial">
            <h3>Rating: {t.rating} ⭐</h3>
            <p><strong>{t.name}</strong></p>
            <p>{t.review}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
