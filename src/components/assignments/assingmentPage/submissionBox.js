import React from "react";
import "./submissionBox.scss"
import {GrDocumentUpload} from "react-icons/gr";
import{MdFileUpload} from "react-icons/md";


const SubmissionBox = ( ) => {
  return (
    
    <div className="submissionX">
      <div className="Up-container">
        <div className="deadline">
           <h3>Deadline: 20 may</h3>
        </div>
        <div className="handIn">
          <a className="handI"> <MdFileUpload/></a>
        </div>
      </div>
      <div className="submitted">
          <h3>Submitted</h3>
      </div>
      
    </div>  
  
  );
  
};

export default SubmissionBox;