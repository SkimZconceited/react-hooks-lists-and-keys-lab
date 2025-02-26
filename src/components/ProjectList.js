import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  let spanProj = projects.map((project, id) => <ProjectItem key={id} name={project.name} about={project.about} technologies={project.technologies} />)

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
      {spanProj}
      </div>
    </div>
  );
}

export default ProjectList;
