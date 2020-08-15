import React from "react";
import classes from "./SideDrawer.module.css";

const SideDrawer = (props) => {

  let drawerClasses = [classes.SideDrawer, classes.Close];

  if(props.show) {
    drawerClasses = [classes.SideDrawer, classes.Open];
  }
  
  return (
    <React.Fragment>
      <div className={drawerClasses.join(' ')}>
        <div>
          <a href="/">Matches</a>
        </div>
        <div>
          <a href="/">Heros</a>
        </div>
        <div>
          <a href="/">Teams</a>
        </div>
        <div>
          <a href="/">Combos</a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SideDrawer;
