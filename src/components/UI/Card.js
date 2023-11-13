import React from "react";
import "./Card.css";

export const Card = (props) => {
  // console.log(props) expense-item,expenses classes
  const classes = " card " + props.className;
  return <div className={classes}>{props.children}</div>; //children means everything b/w tags
};
