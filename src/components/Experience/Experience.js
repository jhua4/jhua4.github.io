import React, { Component } from "react";
import "./Experience.scss";
import { gsap } from "gsap";

class Experience extends Component {
  componentDidMount() {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
    tl.to([".right", ".left"], { x: "0%", duration: 1.25 });
  }

  render() {
    return (
      <div className="timeline-content">
        <h1>Experience</h1>
        <div className="timeline color1">
          <div className="item right">
            <div className="content">
              <b>August 2020 - Present</b>
              <br />
              Front End Engineer, CREXi
            </div>
          </div>
        </div>
        <div className="timeline color1">
          <div className="item left">
            <div className="content">
              <b>October 2018 - June 2020</b>
              <br />
              Senior Software Developer, American Airlines
              <br />
              <br />
              Built two full stack applications used by frontline workers to
              order parts for aircraft maintenance.
              <br />
              Developed .NET Core WebAPI and Node.js backends, and Angular
              frontends.
              <br />
              Integrated with other backend services and SQL/Oracle databases.
              <br />
              Setup CI/CD pipeline, monitor application health using Dynatrace.
              <br />
              Work with other teams to facilitate development/testing and debug
              issues with data and infrastructure.
              <ul>
                <li>
                  Languages: C#, TypeScript, JavaScript, HTML, Less, GraphQL
                </li>
                <li>Libraries: Kendo UI for Angular, nrwl/nx</li>
                <li>
                  Frameworks: .NET Core, Angular 7, EF Core, Node.js, xUnit,
                  Jasmine, Protractor
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="timeline color1">
          <div className="item right">
            <div className="content">
              <b>May 2018 - October 2018</b>
              <br />
              Software Developer, Global Payments
              <br />
              <br />
              Added new features and debugged issues in ASP.NET web application.
              <ul>
                <li>Languages: C#, HTML, CSS, JavaScript</li>
                <li>Libraries: jQuery</li>
                <li>Frameworks: ASP.NET</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="timeline color1">
          <div className="item right">
            <div className="content">
              <b>May 2018</b>
              <br />
              Graduated ASU, B.S. Computer Science
            </div>
          </div>
        </div>
        <div className="timeline color1">
          <div className="item left">
            <div className="content">
              <b className="color1">September 2016 - May 2018</b>
              <br />
              Software Engineer, Alpha Connect
              <br />
              <br />
              Added new features to .NET desktop application, and built new
              applications.
              <br />
              Installed and integrated SQL server for storage.
              <br />
              Mentored a junior developer.
              <ul>
                <li>Languages: C#, VB.NET</li>
                <li>Frameworks: .NET Framework, WinForms</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
