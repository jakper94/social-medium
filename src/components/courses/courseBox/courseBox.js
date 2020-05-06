import React from "react";
import "./courseBox.scss";
const CourseBox = ({ courseName, imgUrl}) => {

    
  return (
    <div className="courseBox">
        <div className="imageBox">
      <img src={process.env.PUBLIC_URL + imgUrl} alt={courseName}/>
      </div>
      <h2>{courseName}</h2>
    </div>
  );
};

export default CourseBox;
