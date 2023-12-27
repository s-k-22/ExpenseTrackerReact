import React from "react";
import "./Card.css";

export const Card = (props) => {
  // console.log(props); contains className and children
  const classes = " card " + props.className;
  return <div className={classes}>{props.children}</div>; //children means everything b/w card tag in expenseItem.js file
};
