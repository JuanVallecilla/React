import { Fragment } from "react";

import MainNavitaion from "./MainNavitaion";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavitaion />
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
