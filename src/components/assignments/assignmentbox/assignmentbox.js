import React from "react";
import "./assignmentbox.scss"

const Assignmentbox = ( {assignment, status}) => {

    //Add to database if assignment is submitted or not. (Sumbitted text?)
    //If passed .... (change text to passed?)
    //If not passed ... (change text to not passed?)
  return (
      <div>
    <div className="assignmentBox">
        {/*  Add image? */}
       
        <h2>{status}</h2>

    </div>
    <h4>{assignment}</h4>
      </div>
  );
};

export default Assignmentbox;