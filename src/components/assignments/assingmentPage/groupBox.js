import React from "react";
import "./groupBox.scss"
import assignmentData from "../../../jsonData/assignments.json";


const GroupBox = ({groupName, assignId} ) => {

    const assignments = assignmentData.assignments;
    const members = assignments[assignId].groupMembers;

  return (
    
    <div className="groupBoxx">
    <div className="groupName">
        <h2>{groupName}</h2>
        <div className="groupMembers">
            
        {
            members.map((member) => (
                <div className="member">
                <div className="profImage">
                     <img src={process.env.PUBLIC_URL + member.profileImg}  alt={<h2>alt</h2>}/>
                 </div>
            <p className="memName">{member.name}</p>
            </div>
            ))
          }
            

           
            
        </div>
    </div>  
    </div>
  
  );
  
};

export default GroupBox;