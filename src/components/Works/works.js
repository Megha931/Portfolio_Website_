import React, { useState } from "react";
import "./works.css";
import ChessIcon from "../../assets/chess.png";
//import HateSpeechIcon from "../../assets/Hate-speech.png";
import BlogIcon from "../../assets/book.png";
import TextToSpeechIcon from "../../assets/text-to-speech.png";
import GitHubLogo from "../../assets/github_logo.png"; 
import Task from "../../assets/task.png";

const Works = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
   
    {
      id: 1,
      icon: BlogIcon,
      title: "Book Store",
      description: `Technologies/Languages: JS, React, MySQL.
      Developed a book store application capable of performing CRUD operations. Users can create, read, update, and delete book entries, offering an intuitive
      interface for managing book listings and enhancing user experience.`,
      github: "https://github.com/Megha931/book_store"
    },
    /*{
      id: 3,
      icon: HateSpeechIcon,
      title: "Hate Speech Detector on Twitter Tweet",
      description: `Created a machine learning model using Python and Natural Language Processing to identify hate speech in Twitter tweets, involving data preprocessing, hyperparameter tuning, and visualization techniques such as pie charts, word clouds, and confusion matrices.`,
      github: "https://github.com/Megha931/Hate-Speech-Detector-On-Twitter-Tweets"
    },*/
    {
      id: 2,
      icon: Task, // Use the new icon for the Task Manager project
      title: "Task Management System",
      description: `Developed a responsivetask management system with React, featuring drag-and-drop functionality. Users can add tasks, set priorities, and deadlines with a modern interface styled with Tailwind CSS.`,
      github: "https://github.com/Megha931/Task-Manager"
    },
    {
      id: 3,
      icon: TextToSpeechIcon,
      title: "Text to Speech Converter",
      description: `Developed a web-based Text-to-Speech application using JavaScript (Web Speech API), HTML, and CSS, allowing users to convert text into speech. Key features include voice selection, pause/resume functionality, and a modern user interface with enhanced typography using Google Fonts.`,
      github: "https://github.com/Megha931/Text-to-Speech-Converter-using-HTML-CSS-and-JavaScript"
    },
    {
      id: 4,
      icon: ChessIcon,
      title: "Chess Game",
      description: `Developed an interactive, C++ and object-oriented console-based chess game with comprehensive move validation, check and checkmate detection, and clear board representation. Implemented precise chess rules to ensure an authentic gaming experience.`,
      github: "https://github.com/Megha931/Chess-Game"
    },
  ];

  const handleMouseEnter = (id) => {
    setActiveProject(id);
  };

  const handleMouseLeave = () => {
    setActiveProject(null);
  };

  return (
    <section id="works">
      <h2 className="workTitle">Projects</h2>
      <p className="workDesc">
        Explore my portfolio to witness a diverse array of projects that demonstrate my expertise in both frontend and backend development. From dynamic web applications built with HTML, CSS, JavaScript, and React to robust backend systems utilizing C++, OOPS, Express.js, and database management with MongoDB and MySQL, my work reflects a deep commitment to quality and innovation. Each project showcases my strong problem-solving abilities and dedication to crafting efficient, user-friendly solutions. Delve into my creations to see the full spectrum of my technical skills and creativity.
      </p>
      <div className="workBars">
        {projects.map((project) => (
          <div
            key={project.id}
            className="workBar"
            onMouseEnter={() => handleMouseEnter(project.id)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={project.icon} alt={project.title} className="workBarImg" />
            <div className={`workBarText ${activeProject === project.id ? 'active' : ''}`}>
              <h3>{project.title}</h3>
              {activeProject === project.id && (
                <>
                  <p>{project.description}</p>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="githubLink">
                    <img src={GitHubLogo} alt="GitHub Logo" className="githubLogoIcon" />
                    GitHub Link
                  </a>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
