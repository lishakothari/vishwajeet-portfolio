import React from 'react';
import { Link } from "react-router-dom";
import "./header.css";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navlinks'>
        <Link to="/" style={{ padding: 15 }}>
          Home
        </Link>
        <Link to="/academic-articles" style={{ padding: 15 }}>
          Academic Articles
        </Link>
        <Link to="/media-articles" style={{ padding: 15 }}>
          Media Articles
        </Link>
        <Link to="/interviews" style={{ padding: 15 }}>
          Interviews
        </Link>
        <Link to="/resume" style={{ padding: 15 }}>
          Resume
        </Link>
      </div>
    </nav>
  );
}
export default Navbar;

