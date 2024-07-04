import React from 'react';
import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom';



const Navbar = (props) => {
  return <nav className={s.nav}>
    <div className={s.item}>
      <NavLink
        to="/profile"
        style={({ isActive }) => {
          return {
            fontWeight: isActive ? "bold" : 'normal',
            color: isActive ? "gold" : 'white',
          };
        }}>
        Profile
      </NavLink>
    </div>

    <div className={s.item}>
      <NavLink
        to="/Dialogs"
        style={({ isActive }) => {
          return {
            fontWeight: isActive ? "bold" : 'normal',
            color: isActive ? "gold" : 'white',
          };
        }}>
        Messages
      </NavLink>
    </div>

    <div className={s.item}>
      <NavLink
        to="/News"
        style={({ isActive }) => {
          return {
            fontWeight: isActive ? "bold" : 'normal',
            color: isActive ? "gold" : 'white',
          };
        }}>
        News
      </NavLink>
    </div>

    <div className={s.item}>
      <NavLink
        to="/music"
        style={({ isActive }) => {
          return {
            fontWeight: isActive ? "bold" : 'normal',
            color: isActive ? "gold" : 'white',
          };
        }}>
        Music
      </NavLink>
    </div>

    <div className={s.item}>
      <NavLink
        to="/settings"
        style={({ isActive }) => {
          return {
            fontWeight: isActive ? "bold" : 'normal',
            color: isActive ? "gold" : 'white',
          };
        }}>
        Settings
      </NavLink>
    </div>
  </nav>
}

export default Navbar;