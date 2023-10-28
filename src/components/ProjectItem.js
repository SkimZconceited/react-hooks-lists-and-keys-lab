import React from "react";

function ProjectItem(props) {

  console.log(props)
  return (
    <div className="project-item">
      <h3>{props.name}</h3>
      <p>{props.about}</p>
      <div className="technologies">
        {props.technologies.map((tech, id) => <span key={id = tech}>{tech}</span>)}
      </div>
    </div>
  );
}

function ProjTech({techs, id}) {
  let eachTech = techs.map((tech, id) => <span key={id + tech}>{tech}</span>);
  return <div>{eachTech}</div>;
}


export default ProjectItem;
