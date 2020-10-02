import React from "react";
import classes from "./Home.module.scss";

const Home = (props) => {
  return (
    <div className={classes.Home}>
      <h1>Home</h1>
      <h2>Full Stack Web Developer / Generalist</h2>
      <p>
        Hi, I'm Joshua Hua. I'm a software engineer with experience in full
        stack, but I like to experiment and work on new things!
      </p>
    </div>
  );
};

export default Home;
