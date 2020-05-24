import React, { useState } from "react";
import "./coursePage.scss";
import CourseInfo from "./courseInfo/courseInfo";
import Calendar from "./calendar/calendar";
import courseData from "../../../jsonData/courses.json";
const CompletedCoursePage = ({ match }) => {
  var ID = match.params.id;
  let id = ID -1;
  const course = courseData.completedCourses;
    const teatchers = course[id].teatchers;
  return (
    <div className="coursePage">
      <h1 className="courseName">{course[id].courseName}</h1>
      <div className="coursePage-container">

        <div className="course-info">
          <CourseInfo teatchers={teatchers} assId={id} courseInfo={course[id].longInfo} progress={course[id].progress}/>
        </div>
        <div className="right">
          <div className="calendar-box">
            <Calendar />
          </div>
          <div className="news">
            <h2>Newsfeed</h2>
          </div>
        </div>
      </div>
      <div className="quick-Links">
        <h2>Quicklinks</h2>
        <div className="links">
        <a href="#/assignments/">assignment</a>
        <a href="#/assignments/">assignment</a>
        </div>
        
      </div>
    </div>
  );
};
export default CompletedCoursePage;
