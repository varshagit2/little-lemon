import React from "react";
import './Header.css'

const Header = () => {
  return (
    <header>
      <nav aria-label="Main Navigation">
        <img src="/images/725cbe0ca5da8536fc99c51e00d4d13628bd9745.jpg" alt="Little Lemon Logo" />
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/main">Reservations</a></li>
          <li><a href="/order">Order Online</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
