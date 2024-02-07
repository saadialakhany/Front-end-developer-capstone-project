import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        <img src={logo} alt="Little lemon logo" className="footer--logo" />
      </div>
      <div className="footer--main">
        <div className="footer--navigation">
          <h3>Useful links</h3>
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
        </div>
        <div className="contact--links">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <a href="#">Locations</a>
            </li>
            <li>
              <a href="#">Contact Details</a>
            </li>
            <li>
              <a href="#">Email</a>
            </li>
          </ul>
        </div>
        <div className="socials">
          <h3>Find us at Social Media Platforms</h3>
          <ul>
            <li>
              <FaFacebook className="socials--icon" />
            </li>
            <li>
              <FaInstagramSquare className="socials--icon" />
            </li>
            <li>
              <FaTiktok className="socials--icon" />
            </li>
            <li>
              <FaTripadvisor className="socials--icon" />
            </li>
            <li>
              <FaTwitter className="socials--icon" />
            </li>
            <li>
              <FaPinterestSquare className="socials--icon" />
            </li>
            <li>
              <FaLinkedin className="socials--icon" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
