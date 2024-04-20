import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">Harmonogram Red Panda</div>
      <div>
        <Link to="/login">Logowanie</Link>
        <Link to="/register">Rejestracja</Link>
        <Link to="/forgot-password">Zapomniałem hasła</Link>
      </div>
    </div>
  );
}

export default Navbar;

// components/: Folder dla mniejszych, wielokrotnie używanych komponentów, takich jak pasek nawigacyjny.
// pages/: Folder dla komponentów reprezentujących całe strony.
// styles/: Folder dla plików CSS.