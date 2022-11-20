import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header>
      <h1>Bookstore CMS</h1>
      <nav>
        <Link to="/">BOOKS</Link>
        <Link to="/categories">CATEGORIES</Link>
      </nav>
    </header>
  );
}

export default Navbar;
