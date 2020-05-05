import React from "react";
import "./courseBox.scss";
const CourseBox = ({ courseName, imgUrl }) => {
  return (
    <div className="courseBox">
      <img src={process.env.PUBLIC_URL + imgUrl} alt=""/>
      <h2>{courseName}</h2>
    </div>
  );
};

export default CourseBox;
