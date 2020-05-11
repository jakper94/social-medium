import React, { useState } from "react";
import "./coursePage.scss";
import CourseInfo from "./courseInfo/courseInfo";
const CoursePage = ({ info, courseName }) => {

 
  return (
    <div className="coursePage-container">
       <h1 className="courseName">course 1</h1>
      <div className="course-info">
        <CourseInfo courseInfo={info} />
      </div>
      <div className="calendar">
          
      </div>
    </div>
  );
};
export default CoursePage;
