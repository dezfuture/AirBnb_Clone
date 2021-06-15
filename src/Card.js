import React from "react";

import classes from "./Card.module.css";

function Card({ src, title, description, price }) {
  return (
    <div className={classes.card}>
      <img src={src} alt="" />
      <div className={classes.card__info}>
        <h2>{title}</h2>
        <h3>{description}</h3>
        <h4>{price}</h4>
      </div>
    </div>
  );
}

export default Card;
