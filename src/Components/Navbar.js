import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav>
      <ul>
        <Link to="/about">
          <li className="pill">About</li>
        </Link>
        <Link to="/activities">
          <li className="pill">Activities</li>
        </Link>
        <Link to="/posts">
          <li className="pill">Posts</li>
        </Link>
        <Link to="/contact">
          <li className="pill">Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
