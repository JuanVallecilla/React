import React, { Fragment } from "react";

import img from "../../assets/meals.jpg";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div className={styles["main-image"]}>
        <img src={img} alt="Table full of food" />
      </div>
    </Fragment>
  );
};

export default Header;
