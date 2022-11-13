import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header>
      <h1>Bookstore CMS</h1>
      <nav>
        <Link to="/">Books</Link>
        <Link to="/categories">Categories</Link>
      </nav>
    </header>
  );
}

export default Navbar;
