import React from "react";
import "./Header.css";
import icon from "../../assets/icon.jpg";

function Header() {
  return (
    <header>
      <div className="title">
        <img src={icon} alt="icon" className="icon-img" />
        <h1>Title</h1>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Content</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
