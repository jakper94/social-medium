import React from "react";
import "./litteratureBox.scss"
import { FaFilePdf } from "react-icons/fa";
import assignmentData from "../../../jsonData/assignments.json";



const LitteratureBox = ( {assignmentId}) => {
  const assignments = assignmentData.assignments;
  const litteratures = assignments[assignmentId].litteratures;

  const checkLitterature =(title, link) =>{
    return(
    <a className="pdf" href={link}>
    <FaFilePdf />
     <div><p>{title}</p></div>
</a>
     ); }
  return (
    
    <div className="litteratureBox">
      <h2 className="literatureTitle">Relevant litterature</h2>
      <div className="literatureFiles">
        {litteratures.map((litterature) =>
          checkLitterature(litterature.title, litterature.link )
        )}
      </div>
      <div className="SoftwareBox">

      </div>
    </div>  
  );
  
};

export default LitteratureBox;