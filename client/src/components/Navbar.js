import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">GameGuideTV</Link>
      </div>
      <div className="navbar-search">
        <a>Search</a>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/upload">Upload</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;