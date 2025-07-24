import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" aria-label="Site Footer">
      <div className="footer-container">
        {/* Logo on the left */}
        <div className="footer-logo">
          <img src="/images/725cbe0ca5da8536fc99c51e00d4d13628bd9745.jpg" alt="Little Lemon Logo" />
        </div>

        {/* Link Columns */}
        <div className="footer-columns">
          <section>
            <h3>Doormat Navigation</h3>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Menu</li>
              <li>Reservation</li>
              <li>Order online</li>
              <li>Login</li>
            </ul>
          </section>
          <section>
            <h3>Contact</h3>
            <ul>
              <li>Address</li>
              <li>Phone number</li>
              <li>Email</li>
            </ul>
          </section>
          <section>
            <h3>Social-media Links</h3>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Google Reviews</li>
            </ul>
          </section>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
