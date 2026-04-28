import React from "react";
import logo from "../assets/logo2.png";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


import "./footer.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <footer>
        <section className="footer">
          <ul>
            <h3>Useful Links</h3>
            <li>
              <Link className="footer-links" to="/">
                Home
              </Link>{" "}
            </li>
            <li>
              <Link className="footer-links" to="/photography/portfolio">
                Portfolio
              </Link>{" "}
            </li>
            <li>
              <Link className="footer-links" to="/photography/about">
                About
              </Link>{" "}
            </li>
            <li>
              <Link className="footer-links" to="/photography/contact">
                Contact
              </Link>{" "}
            </li>
          </ul>
          <figure>
            <img className="logo" src={logo} alt="" />
          </figure>
          <ul>
            <h3>Social Media</h3>
            <li>
              <Link className="footer-links" to="https://www.instagram.com/smlifeedits?igsh=MXExYm43ZGZkaHZjYQ==">
              <FaInstagram />
              </Link>{" "}
            </li>
            <li>
              <Link className="footer-links" to="https://pin.it/5PU3NCnzD">
              <FaPinterest />
              </Link>{" "}
            </li>
            <li>
              <Link className="footer-links" to="https://www.youtube.com/@sunitamirza3">
            <FaYoutube />

              </Link>{" "}
            </li>
          </ul>
        </section>
      </footer>
    </>
  );
}  