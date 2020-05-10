import React from "react";
import "./coursePage.scss";
import CourseInfo from './courseInfo/courseInfo'
const CoursePage = ({info}) => {
  return (
    <div className="coursePage-container">
        <div className="course-info">
        <CourseInfo courseInfo={info}/>
        </div>
    </div>
  );
};
export default CoursePage;
