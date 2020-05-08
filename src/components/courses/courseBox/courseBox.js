import React from "react";
import "./courseBox.scss";

const CourseBox = ({ courseName, imgUrl, info, newCourse}) => {

 const checkIfNewCourse=()=>{
   if(newCourse){
  return(
    <div className="newCourseBox">
        <h4>NEW</h4>
      </div>
  )
   }
 }
    
  return (
    <div className="courseBox">
        <div className="imageBox">
      <img src={process.env.PUBLIC_URL + imgUrl} alt={courseName}/>
      </div>
      
      
      <h2>{courseName}</h2>
  <p>{info}</p>
  {checkIfNewCourse()}

    </div>
  );
};

export default CourseBox;
