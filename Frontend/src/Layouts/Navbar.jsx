import React from "react";
import styles from "../styles/layouts/navbar.module.css";
import { Link } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";

function Navbar() {
  const { logout, user } = useAuth();
  return (
    <nav className={styles.navbar + " "}>
      <div className={styles.logoContainer}>
        <img src="/images/logo.svg" alt="" className={styles.logo} />
        <h1>Todos</h1>
      </div>
      <ul className={styles.links}>
        <li>
          <Link to="/">Home</Link>
        </li>
        {user ? (
          <li>
            <Link to="/admin/todos">Dashboard</Link>
          </li>
        ) : (
          <li>
            <Link to="/login">Login/Register</Link>
          </li>
        )}

        {user && (
          <>
            <li>
              <button
                className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 rounded-full"
                onClick={logout}
              >
                Logout
              </button>
            </li>
            <li>
              <img
                className="h-10 w-10 rounded-full border-2 border-[#388e3c]"
                src={user.image}
                alt=""
              />
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
