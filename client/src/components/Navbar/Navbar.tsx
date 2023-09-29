import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import navbarStyles from './Navbar.module.css';

export default function Navbar(): JSX.Element  {
  return (
    <div className={navbarStyles.navbar}>
      <NavLink to="/" style={{ textDecoration: 'none' }}>
        <span className={navbarStyles.navbarImem}>🏠 Home</span>
      </NavLink>
      <Link to="/todolist" style={{ textDecoration: 'none' }}>
        <span className={navbarStyles.navbarImem}>Список дел</span>
      </Link>
    </div>
  );
}
