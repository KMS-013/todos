import React from "react";
import Styles from "../Styles/Layouts/Navbar.module.css";
import { Link } from "react-router-dom";

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
              <Link to="/" className={Styles.navbarlink}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/Dashbord" className={Styles.navbarlink}>
                Dashbord
              </Link>
            </li>
            <li>
              <Link to="/todo" className={Styles.navbarlink}>
                Todo
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
