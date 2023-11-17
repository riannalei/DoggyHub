import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/create-post">Create Post</Link></li>
        {/* Add other navigation links as needed */}
      </ul>
    </nav>
  );
}

export default Navbar;
