import React from "react";
import classes from "./MainImage.module.css"


const jugg = require("../../assets/images/jugg_wallpaper.jpg");

const MainImage = () => (
    <div className={classes.MainImage}>
        <img className={classes.CenterFit} src={jugg} alt="" />
    </div>
)




export default MainImage;