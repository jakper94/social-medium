import React, { useState } from "react";
import "./coursePage.scss";
import CourseInfo from "./courseInfo/courseInfo";
import Calendar from "./calendar/calendar";
import courseData from "../../../jsonData/courses.json";
const CoursePage = ({ match }) => {
  var ID = match.params.assignID;
  let id = ID -1;
  const course = courseData.courses;
  const teatchers =course[id].teatchers;

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
        <a href="#/assignments/">Assignment</a>
        <a href="#/forum/">Forum</a>
        </div>
        
      </div>
    </div>
  );
};
export default CoursePage;
