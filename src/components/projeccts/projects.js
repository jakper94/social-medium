import React from "react";
import "./projects.scss";
import ProjectBox from "./projectBox/projectBox";
import projecData from "../../jsonData/projects.json";

const Projects = () => {

  const projectss = projecData.projects;

  return (
    <div className="projects">
      <h1 className="projectsHead">Projects</h1>
      <div className="projectsboxes">

        {
          projectss.map((project) => (
            <ProjectBox
              projectName = {project.projectName}
              projectImg = {project.projectImg}
              year = {project.year}
            
            />
            ))
        }
       
       
      </div>
    </div>
  ); 
};

export default Projects;
