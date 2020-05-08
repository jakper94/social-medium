import React from "react";
import "./courses.scss";
import CourseBox from "./courseBox/courseBox";
import courseData from "../../jsonData/courses.json";

const Courses = () => {
  const courses = courseData.courses;
  return (
    <div className="onGoing">
      <h1>Ongoing courses</h1>
      <div className="coursBoxes">
        {courses.map((cours) => (
          <CourseBox courseName={cours.courseName} imgUrl={cours.imgUrl} info={cours.info} newCourse={cours.newCourse}/>
          
        ))}
      </div>
    </div>
  );
};

export default Courses;
