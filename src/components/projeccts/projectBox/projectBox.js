import React from "react";
import "./projectBox.scss"


const ProjectBox = ({projectName, projectImg, year} ) => {

  return (
    
    <div className="projectboxx">
        <div className = "projectImg"> 

             <img
              src={process.env.PUBLIC_URL + projectImg}
              alt="book"
            />
        
        </div>
        <div className="projectName">
            <h4>{projectName}</h4>
         </div>
        <div className="projectYear">{year}</div>
     
    </div>  
      
  ); 
};

export default ProjectBox;