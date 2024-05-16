import React from "react";
import Styles from "../Styles/Pages/Home.module.css";

function Home() {
  return (
    <div className={Styles.homecomponent}>
      <div className={Styles.homecomponenttext}>
        “Subtracting from your list of priorities is as important as adding to
        it.”
      </div>
      <div className={Styles.homecomponentimg}>
        <img src="/images/homeimg.svg" alt="" />
      </div>
    </div>
  );
}

export default Home;
