import React from "react";

import { Dark, Globe, Light } from "../assets/icons";

function Header({ isDark, toggleMode }) {
  return (
    <header className="header-container">
      <img src={Globe} alt="An icon of a globe" />
      <h4 className="header-h4">Gaurav's Travel Journal</h4>
      <button
        className="toggle-btn"
        onClick={toggleMode}
        title={isDark ? "Turn on light mode" : "Turn on dark mode"}
      >
        <img
          className="toggle-img"
          src={isDark ? Dark : Light}
          alt={isDark ? "Turn on light mode" : "Turn on dark mode"}
        />
      </button>
    </header>
  );
}

export default Header;
