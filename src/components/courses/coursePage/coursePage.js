import React, { useState } from "react";
import "./coursePage.scss";
import CourseInfo from "./courseInfo/courseInfo";
import Calendar from "./calendar/calendar";
const CoursePage = ({ info, courseName }) => {
  return (
    <div className="coursePage">
      <h1 className="courseName">Technology for social media </h1>
      <div className="coursePage-container">

        <div className="course-info">
          <CourseInfo courseInfo={info} />
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
export default CoursePage;
