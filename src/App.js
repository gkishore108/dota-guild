import React, { useState } from "react";
import "./App.css";
import "./Components/Navigation/NavBar";
import NavBar from "./Components/Navigation/NavBar";
import MainImage from "./Components/MainImage/MainImage";
import Backdrop from "./Components/Backdrop/Backdrop";
import SideDrawer from "./Components/SideDrawer/SideDrawer";

function App() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  function drawerToggleClickHandler() {
    setSideDrawerOpen(true);
  }

  function backdropClickHandler() {
    setSideDrawerOpen(false);
  }

  let backdrop;

  if (sideDrawerOpen) {
    backdrop = <Backdrop click={backdropClickHandler} />;
  }

  return (
    <div className="App">
      <NavBar drawerClickHandler={drawerToggleClickHandler} />
      <SideDrawer show={sideDrawerOpen} />
      {backdrop}
      <MainImage />
    </div>
  );
}

export default App;
