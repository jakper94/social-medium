import React from "react";
import "./courses.scss";
import CourseBox from "./courseBox/courseBox";
import courseData from "../../jsonData/courses.json";

const Courses = () => {
  
  const courses = courseData.courses;
  const completedCourses= courseData.completedCourses
  return (
    <div className="onGoing">
      <h1>Ongoing courses</h1>
      <div className="coursBoxes">
        {courses.map((cours) => (
          <CourseBox
            courseName={cours.courseName}
            imgUrl={cours.imgUrl}
            info={cours.info}
            newCourse={cours.newCourse}
            id={cours.id}
            hp={cours.hp}
            participants={cours.participants}
            inputProgress={cours.progress}
          />
        ))}
      </div>
      <h1>Completed courses</h1>
      <div className="coursBoxes">
        {completedCourses.map((completedCours) => (
          <CourseBox
            courseName={completedCours.courseName}
            imgUrl={completedCours.imgUrl}
            info={completedCours.info}
            newCourse={completedCours.newCourse}
            id={completedCours.id}
            hp={completedCours.hp}
            participants={completedCours.participants}
            inputProgress={completedCours.progress}
          />
        ))}
      </div>
    </div>
  );
};

export default Courses;
