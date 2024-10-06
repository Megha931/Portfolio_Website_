import React from "react";
import "./about.css";
import CollegeLogo from "../../assets/college.png";

const About = () => {
  return (
    <section id="aboutSection">
      <span className="aboutTitle">About Me</span>
      <div className="aboutContent">
        <div className="aboutDesc">
          <p>
            I am Megha, an aspiring software developer currently pursuing a B.Tech at Indira Gandhi Delhi Technical University for Women. With a strong passion for technology and problem-solving, I specialize in both frontend and backend development. Proficient in languages like C++, JavaScript, and frameworks such as React, my coursework includes Data Structures & Algorithms, Database Management Systems, Web Development, and SQL. I am adept with tools like VS Code, Google Collab, and Replit, and have hands-on experience with databases including MongoDB and MySQL. Proficient in version control using Git and GitHub. Currently, I am exploring AI-ML and deep learning techniques to expand my knowledge and skills.
          </p>
        </div>
        <div className="aboutDesc">
          <p>
            Beyond the tech realm, I am passionate about crafting and creating from waste materials. I also enjoy performing in nukkad natak (street plays) and stage plays, having been certified by National School of Drama (NSD).
          </p>
        </div>
      </div>

      <div className="aboutEducationSection">
        <h2 className="aboutEducationTitle">Education</h2>
        <div className="aboutEducationBox">
          <img src={CollegeLogo} alt="College Logo" className="aboutCollegeLogo" />
          <div className="aboutEducationDetails">
            <h3>Indira Gandhi Delhi Technical University for Women (IGDTUW)</h3>
            <p>B.Tech in Electronics and Communication Engineering</p>
            <p>2021 - Present</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
