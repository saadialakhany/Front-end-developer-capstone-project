import React from "react";
import logo from "../images/Logo.svg";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav>
        <img src={logo} alt="logo for Little Lemon"></img>
        <ul>
          <li key="home">
            <Link to="/">Home</Link>
          </li>
          <li key="about">
            <Link to="/main/about">About</Link>
          </li>
          <li key="menu">
            <Link to="/main/highlights">Menu</Link>
          </li>
          <li key="reservations">
            <Link to="/reservation">Reservation</Link>
          </li>
          <li key="order online">
            <Link to="/main/highlights">Order Online</Link>
          </li>
          <li key="login">
            <Link to="">Login</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
