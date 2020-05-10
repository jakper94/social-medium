import React from "react";
import "./coursePage.scss";
import CourseInfo from './courseInfo/courseInfo'
const CoursePage = () => {
  return (
    <div className="coursePage-container">
        <div className="course-info">
        <CourseInfo/>
        </div>
    </div>
  );
};
export default CoursePage;
