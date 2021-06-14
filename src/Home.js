import React from "react";
import classes from "./Home.module.css";
import Banner from "./Banner";

function Home() {
  return (
    <div className={classes.home}>
      <Banner />
    </div>
  );
}

export default Home;
