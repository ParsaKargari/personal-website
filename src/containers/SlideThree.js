import React from "react";
import "./slide.css";
import ProjectCard from "../components/ProjectCard";

export default function SlideThree() {
  const projects = [
    {
      title: "Project Species",
      description:
        "A Python-based data analysis project on threatened species.",
      githubLink: "https://github.com/ParsaKargari/threatened-species",
      moreInfo:
        "Read files of over 350 inputs about threatened species and generated statistics and graphs. This raised awareness about endangered species during presentations to clients and others.",
      languages: ["Python"],
    },
    {
      title: "Cipher Message",
      description:
        "A Python program for encoding and decoding texts using custom ciphers.",
      githubLink: "https://github.com/ParsaKargari/cipher-message",
      moreInfo:
        "Designed a cipher algorithm, implemented functions for mapping, outputting encoded or decoded text, and handling invalid input. String manipulation techniques were used for efficiency and reliability.",
      languages: ["Python"],
    },
    {
      title: "Museum Database",
      description:
        "A Python and MySQL based museum database management system.",
      githubLink: "https://github.com/ParsaKargari/museum-database",
      moreInfo:
        "Developed a login system, implemented functions to execute and process SQL queries, and manipulate and display data. Implemented error handling for secure user login and failed connections.",
      languages: ["Python", "MySQL"],
    },
    {
      title: "Wordle Clone",
      description: "A clone of the New York Times' Wordle game.",
      githubLink: "https://github.com/ParsaKargari/Wordle-Clone",
      moreInfo:
        "This project is a clone of the popular Wordle game by the New York Times. It was built using HTML, CSS, and JavaScript to replicate the gameplay and design of the original game.",
      languages: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Lotion",
      description: "A note-taking app inspired by Notion.",
      githubLink: "https://github.com/ParsaKargari/lotionParsa",
      moreInfo:
        "Lotion is a note-taking app that uses local storage for storing notes. It was built using React, JavaScript, CSS, and HTML to provide a user-friendly interface for note-taking.",
      languages: ["React", "JavaScript", "CSS", "HTML"],
    },
    {
      title: "Obituaries",
      description: "Showcases obituaries of people with AI generated texts.",
      githubLink: "https://github.com/ParsaKargari/Obituaries",
      moreInfo:
        "React for the frontend and AWS for the backend by Terraform, connects to AWS Polly, ChatGPT and more to showcase obituaries of people with custom names, images and AI generated texts.",
      languages: ["React", "JavaScript", "CSS", "HTML", "Terraform", "Python"],
    },
  ];

  return (
    <>
      <div className="main-slide">
        <div className="top-placeholder"></div>
        <div className="main-slide-content">
          <div className="main-slide-three">
            <div className="main-slide-three-content">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
