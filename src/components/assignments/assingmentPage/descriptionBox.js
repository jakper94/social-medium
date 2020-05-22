import React from "react";
import "./descriptionBox.scss";
import assignmentData from "../../../jsonData/assignments.json";




const DescriptionBox = ({description, presentation}) => {
  const assignments = assignmentData.assignments;
  /* var ID = match.params.assignID;
  let Id = ID -1; */

  return (
    
    <div className="assigDescription">
      <div className="assignInfo"> 
      <h2 className="assignDes">Description of assignment</h2>

      <p>{description}</p>
     <h2 className="assignPresentation">Presentation</h2>
    <p>{presentation}</p>
</div>

    </div>  
  
  );
  
};

export default DescriptionBox;