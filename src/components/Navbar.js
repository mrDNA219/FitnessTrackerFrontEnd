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
      <Link classname="navbar-links" to="/">Home</Link>
      <Link classname="navbar-links" to="routines">Routines</Link>
    </nav>
  );
};

export default Navbar;
