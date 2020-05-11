import React from "react";
import "./assignmentbox.scss"

const Assignmentbox = ( {assignment,corrected, submitted, passed, info, duration}) => {
 
  const checkStatus=()=>{
    if (submitted)  {
      if(corrected){
        if(passed){
          return (
            <div className="passed">
              <h2>Passed</h2>
            </div>
          )
        } else if(!passed){
          return(
            <div className="notPassed">
              <h2>Not passed</h2>
            </div>
          )
        } 
      } else{
        return(
        <div className="submitted">
            <h2>Submitted</h2>
        </div>
         ) }
    } else{
        return(
          <div className="notSubmitted">
            <h2>Not submitted</h2>
          </div>
        )
      } 
  }

  return (
    <div className="assignment">
      <div className="assignmentBox">
        {checkStatus()}
        <div className="assigInfo">
          <p>{info}</p> 
            <div className="duration">
              <p>Expected duration: {duration} hours</p>
            </div>
        </div>
      </div>
          <h4>{assignment} </h4>
    </div>  
      
  );
};

export default Assignmentbox;