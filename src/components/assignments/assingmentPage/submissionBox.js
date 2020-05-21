import React from "react";
import "./submissionBox.scss"
import{MdFileUpload} from "react-icons/md";

const SubmissionBox = ({submitted,corrected, passed, deadline} ) => {

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
    
    <div className="submissionX">
      <div className="Up-container">
        <div className="deadline">
           <h3>Deadline: {deadline}</h3>
        </div>
        <div className="handIn">
          <a className="handI"> <MdFileUpload/></a>
        </div>
      </div>
       {checkStatus()}
    </div>  
  );
};

export default SubmissionBox;