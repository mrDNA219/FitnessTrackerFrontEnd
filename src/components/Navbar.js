// create the navbar
// if not logged in:
// home, public routines, activities, login, register
// if logged in:
// home, routines, activities, my routines, profile, logout
import { react, Fragment } from "react";
import { Link } from "react-router-dom";
import "../style.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className="navbar-links" to="/">Home</Link>
      <Link className="navbar-links" to="routines">Routines</Link>
      <Link className="navbar-links" to="activities">Activities</Link>
      <Link className="navbar-links" to="register">Register</Link>
      <Link className="navbar-links" to="login">Login</Link>
      
    </nav>
  );
};

export default Navbar;
