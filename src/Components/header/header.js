import React from 'react';
import { Link } from "react-router-dom";
import "./header.css";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navlinks'>
        <Link to="/" className="navlink">
          Home
        </Link>
        <Link to="/academic-articles" className="navlink">
          Academic Articles
        </Link>
        <Link to="/media-articles"  className="navlink">
          Media Articles
        </Link>
        <Link to="/interviews"  className="navlink">
          Interviews
        </Link>
        <Link to="/resume"  className="navlink">
          Resume
        </Link>
      </div>
    </nav>
  );
}
export default Navbar;

