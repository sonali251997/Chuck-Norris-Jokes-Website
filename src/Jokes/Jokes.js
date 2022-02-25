import React, { Fragment } from "react";
import Styles from "./Jokes.module.css"

const Jokes = (props) => {
    const { jokesContainer } = Styles;
    return(
      <Fragment>
         <h3>SELECTED CATEGORY - {props.category}</h3>
         <div className={jokesContainer}>{props.joke}</div>
      </Fragment>
    );
};

export default Jokes;