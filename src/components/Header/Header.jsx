// Header.js

import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <a href="/"><h1 className="header__logo">Cruisin</h1></a>
      <nav className="header__nav">
        <a href="/" className="header__link">Home</a>
        <a href="/aboutpage" className="header__link">About</a>
        <a href="/warningLightsPage" className="header__link">Warning Lights</a>
        <a href="/maintenancePage" className="header__link">Maintenance</a>
        <a href="/troubleshootPage" className="header__link">Troubleshoot</a>
        <a href="/chatBotPage" className="header__link">ChatBot</a>
      </nav>
    </header>
  );
};

export default Header;
