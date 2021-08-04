import React, { Component } from "react";
import "./Projects.scss";
import { gsap } from "gsap";

class Projects extends Component {
  componentDidMount() {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
    tl.to(".projects__title-border", { width: "215px", duration: .5 });
  }

  render() {
    return (
      <div>
        <h1 className="projects__title">projects</h1>
        <div className="projects__title-border"></div>
        <p>Coming soon...</p>
      </div>
    );
  }
};

export default Projects;
