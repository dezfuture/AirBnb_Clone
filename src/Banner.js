import React from "react";
import classes from "./Banner.module.css";
import { Button } from "@material-ui/core";

function Banner() {
  return (
    <div className={classes.banner}>
      <div className={classes.banner__search}>
        <Button className={classes.banner__searchButton} variant="outline">
          Search Dates
        </Button>
      </div>

      <div className={classes.banner__info}>
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you.
        </h5>
        <Button>Explore Nearby</Button>
      </div>
    </div>
  );
}

export default Banner;
