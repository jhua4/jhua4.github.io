import React, { Component } from "react";
import "./Home.scss";
import { gsap } from "gsap";

class Home extends Component {
  componentDidMount() {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
    tl.to(".home__title-border", { width: "215px", duration: .5 });
  }

  render() {
    return (
      <div>
        <h1 className="home__title">home</h1>
        <div className="home__title-border"></div>
        <h3>full stack web developer</h3>
        <p>
          Hi, I'm Joshua Hua. I'm a software engineer with experience in full
          stack, but I like to experiment and work on new things!
        </p>
      </div>
    );
  }
};

export default Home;
