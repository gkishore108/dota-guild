import React from "react";
import classes from "./DrawerToggleButton.module.css";

const DrawerToggleButton = (props) => (
  <div>
    <button className={classes.ToggleButton} onClick={props.click}>
      <div className={classes.ToggleButtonLine} />
      <div className={classes.ToggleButtonLine} />
      <div className={classes.ToggleButtonLine} />
    </button>
  </div>
);

export default DrawerToggleButton;
