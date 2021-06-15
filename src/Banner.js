import React, { useState } from "react";
import classes from "./Banner.module.css";
import { Button } from "@material-ui/core";
import Search from "./Search";
import { useHistory } from "react-router-dom";

function Banner() {
  const history = useHistory();

  const [showSearch, setShowSearch] = useState(false);
  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };
  return (
    <div className={classes.banner}>
      <div className={classes.banner__search}>
        {showSearch && <Search />}
        <Button
          onClick={toggleSearch}
          className={classes.banner__searchButton}
          variant="outline"
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>

      <div className={classes.banner__info}>
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you.
        </h5>
        <Button onClick={() => history.push("/search")} variant="outlined">
          Explore Nearby
        </Button>
      </div>
    </div>
  );
}

export default Banner;
