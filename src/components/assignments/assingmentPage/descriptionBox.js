import React from "react";
import "./descriptionBox.scss";
import assignmentData from "../../../jsonData/assignments.json";




const DescriptionBox = ({desc}) => {
  const assignments = assignmentData.assignments;
  /* var ID = match.params.assignID;
  let Id = ID -1; */

  return (
    
    <div className="assigDescription">
      <div className="assignInfo"> 
      <h2 className="assignDes">Description of assignment</h2>

      <p>{desc}</p>
     <h2 className="assignPresentation">Presentation</h2>
     <p>For this assignment, you will write a report and manage your source code in a git repository, for example at GitHub, GitLab, or Bitbucket. In the report, you should explain how OAuth2 works and how you have solved the assignment. You should also include a link to the repository where you keep your source code (and make sure we have access to it</p>
</div>

    </div>  
  
  );
  
};

export default DescriptionBox;