import React from "react";
import styles from "../styles/home/home.module.css";

function Home() {
  return (
    <div className={styles.homecomponent}>
      <div className={styles.homecomponenttext}>
        “Subtracting from your list of priorities is as important as adding to
        it.”
      </div>
      <div className={styles.homecomponentimg}>
        <img src="/images/homeimg.svg" alt="" />
      </div>
    </div>
  );
}

export default Home;
