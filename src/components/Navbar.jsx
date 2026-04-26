
import "./navbar.css"
import { Link, NavLink } from "react-router-dom";
import logo1 from "../assets/logo1.png"
import logo2 from "../assets/logo2.png"
import { useLocation } from "react-router-dom";
import { useState } from "react";
export default function Navbar() {
  const [open, setOpen] = useState(false);



  
  const location = useLocation();
const isHome =
  location.pathname === "/photography" ||
  location.pathname === "/photography/portfolio";


  return (
    <>
    <nav className={`navbar ${isHome ? "home-navbar" : "other-navbar"}`}>
    <figure ><img  className="logo" src={isHome? logo1:logo2} alt="logo" /></figure>
      <ul  className={`nav-links ${open ? "active" : ""}`} >
        <li>
          <NavLink className="isActive" to="/" onClick={() => setOpen(false)}>Home</NavLink>
        </li>
        <li>
          <NavLink  className="isActive" to="/photography/portfolio"  onClick={() => setOpen(false)}>Portfolio</NavLink>
        </li>
        <li>
          <NavLink  className="isActive" to="/photography/about" onClick={() => setOpen(false)} >About</NavLink>
        </li>
     
        <li>
          <NavLink  className="isActive"  to="/photography/contact"  onClick={() => setOpen(false)}>Contact</NavLink>
        </li> </ul>
          {/* Toggle */}
      <div className="toggle" onClick={() => setOpen(!open)}>
        {open ? "✖" : "☰"}
      </div>
        </nav>
    </>
  );
}
