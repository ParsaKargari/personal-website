import React, { useState } from "react";
import "./projectCard.css";
import { FaGithub } from "react-icons/fa";

function ProjectCard({ project }) {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const handleMoreInfoClick = (event) => {
    event.stopPropagation(); // Prevent event bubbling to card
    setShowMoreInfo(true);
  };

  const handleCloseInfoClick = () => {
    setShowMoreInfo(false);
  };

  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p className="languages">Languages: {project.languages.join(", ")}</p>
      <hr />
      <div className="card-footer">
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          <FaGithub />
        </a>
        <button onClick={handleMoreInfoClick} className="info-button">
          More Info
        </button>
      </div>
      {showMoreInfo && (
        <div onClick={handleCloseInfoClick} className="more-info show">
          <h4>More Info</h4>
          <p>{project.moreInfo}</p>
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
