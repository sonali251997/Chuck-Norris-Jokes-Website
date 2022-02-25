import React, { Fragment, useEffect, useState } from "react";
import Styles from "./JokeList.module.css";
import axios from "axios";
import Jokes from "../Jokes/Jokes";

const JokeList = () => {
  const { chips, jokesListContainer } = Styles;
  const [jokesList, setJokesList] = useState([]);
  const [jokes, setJoke] = useState([]);

  useEffect(() => {
    axios.get(`https://api.chucknorris.io/jokes/categories`).then((res) => {
      setJokesList(res.data);
    });
  }, []);
  const getJokes = (items) => {
    axios
      .get(`https://api.chucknorris.io/jokes/random?category=${items}`)
      .then((res) => {
        setJoke(res.data);
        console.log(res);
      });
  };
  return (
    <Fragment>
      <div style={{ overflow: "hidden", width: "100%" }}>
        <h2>Chuck Norris</h2>
        <div className={jokesListContainer}>
          {jokesList?.map((items, index) => (
            <div key={index} className={chips} onClick={() => getJokes(items)}>
              {items.charAt(0).toUpperCase() + items.slice(1)}
            </div>
          ))}
        </div>
        {jokes?.categories && (
          <>
            <Jokes
              category={jokes?.categories.map(function (e) {
                return e.toUpperCase();
              })}
              joke={jokes?.value}
            />
            <h3
              style={{ color: "#3395ff", cursor: "pointer" }}
              onClick={() => getJokes(jokes?.categories)}
            >
              New Joke
            </h3>
          </>
        )}
      </div>
    </Fragment>
  );
};

export default JokeList;
