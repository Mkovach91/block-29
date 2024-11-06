import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/new-player">New Player</Link>
    </nav>
  );
}

export default NavBar;