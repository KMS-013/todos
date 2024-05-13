import React from "react";
import Styles from "../Styles/Layouts/Navbar.module.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className={Styles.navbarcomponent}>
        <div>
          <img src="/images/logo.svg" alt="logo" />
          <h1>Todos</h1>
        </div>
        <div>
          <ul className={Styles.navbarlist}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => {
                  console.log("isActive", isActive);
                  return isActive ? Styles.activePage : Styles.inAactivePage;
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Dashbord"
                className={({ isActive }) => {
                  console.log("isActive", isActive);
                  return isActive ? Styles.activePage : Styles.inAactivePage;
                }}
              >
                Dashbord
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/todo"
                className={({ isActive }) => {
                  console.log("isActive", isActive);
                  return isActive ? Styles.activePage : Styles.inAactivePage;
                }}
              >
                Todo
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
