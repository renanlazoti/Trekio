import React from "react";
import logo from "../../assets/img/trekio.png";
import "./header.css";

export const Header = () => {
  return (
    <header>
      <img src={logo} alt="Logo da Trekio" className="app__header-logo" />
      <nav>
        <ul className="app__header-navbarList">
          <li className="app__header-navbarList-item">
            <a href="#" className="app__header-navbarList-item">
              Início
            </a>
          </li>
          <li className="app__header-navbarList-item">
            {" "}
            <a
              href="#app__about-section"
              className="app__header-navbarList-item"
            >
              Sobre
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
