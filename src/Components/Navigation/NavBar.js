import React from "react";
import classes from "./NavBar.module.css";
import DrawerToggleButton from "../DrawerToggleButton/DrawerToggleButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const NavBar = (props) => (
  <header className={classes.NavBar}>
    <div className={classes.Section}>
      <div className={classes.Section}>
        <DrawerToggleButton click={props.drawerClickHandler} />
        <div>
          <a href="/" style={{ textDecoration: "none" }}>
            <span>Dota Guild </span>
          </a>
        </div>
      </div>
      <div className={classes.Section}>
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
    </div>
    <div className={classes.Section}>
      <div>
        <FontAwesomeIcon icon={faSearch} size="1x" />
      </div>
      <form style={{ width: 280 }}>
        <div className={classes.DivStyle}>
          <div
            style={{
              position: "absolute",
              opacity: 1,
              color: "rgba(255, 255, 255, 0.3)",
              bottom: 12,
              paddingLeft: 5,
              transition: "all 450ms cubicBezier(0.23, 1, 0.32, 1) 0ms",
            }}
          >
            Search by player name, match ID...
          </div>
          <input type="text" id="searchField" className={classes.inputStyle} />
          <div>
            <hr aria-hidden="true" className={classes.hrStyle1}></hr>
            <hr aria-hidden="true" className={classes.hrStyle2}></hr>
          </div>
        </div>
      </form>
    </div>
    <div className={classes.Section}> Steam Logo</div>
  </header>
);

export default NavBar;
