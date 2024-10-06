import React from "react";
import "./techstack.css";

const TechStack = () => {
  return (
    <section id="techstackSection">
      <div className="techstackBox">
        <h2 className="techstackTitle">Skills</h2>
        <ul className="techstackList">
          <li className="techstackItem">
            <span>Languages: C, C++, OOPs, JavaScript (JS), React, Java</span>
          </li>
          <li className="techstackItem">
            <span>Coursework: Data Structures and Algorithms (DSA), Database Management Systems (DBMS), Web Development, SQL</span>
          </li>
          <li className="techstackItem">
            <span>Database: MongoDB, MySQL</span>
          </li>
          <li className="techstackItem">
            <span>Tools/Software: VS Code, Google Colab, Replit, GDB</span>
          </li>
          <li className="techstackItem">
            <span>Web Technologies: HTML, CSS, Bootstrap, React.js</span>
          </li>
          <li className="techstackItem">
            <span>Version Control: Git, GitHub</span>
          </li>
          <li className="techstackItem">
            <span>Software Development Life Cycle (SDLC): Familiar with all phases, including planning, design, development, testing, deployment, and maintenance.</span>
          </li>
          <li className="techstackItem">
            <span>Soft Skills: Goal-oriented and independent, dedicated to high-quality work with strong communication and interpersonal skills. Quickly acclimates to new environments.</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default TechStack;
