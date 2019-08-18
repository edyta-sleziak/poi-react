import React from "react";
import AuthButton from "../authentication/authButton";

const Navigation = () => (
  <nav className="navbar navbar-dark bg-dark sticky-top">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <AuthButton />
      </li>
    </ul>
  </nav>
);

export default Navigation;