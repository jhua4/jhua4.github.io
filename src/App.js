import React from "react";
import classes from "./App.module.scss";
import Home from "./components/Home/Home";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import { HashRouter, Link, Route } from "react-router-dom";
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <HashRouter>
      <header className={classes.header}>
        <div>
          <a
            href="https://github.com/jhua4"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://twitter.com/_jhua4"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://www.linkedin.com/in/jhua4"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div>
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/experience">
            Experience
          </Link>
          <Link className="nav-link" to="/projects">
            Projects
          </Link>
        </div>
      </header>
      <div className={classes.content}>
        <Route path="/" exact component={Home} />
        <Route path="/experience" exact component={Experience} />
        <Route path="/projects" exact component={Projects} />
      </div>
    </HashRouter>
  );
}

export default App;
