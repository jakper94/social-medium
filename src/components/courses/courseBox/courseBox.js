import React, { useState } from "react";
import "./courseBox.scss";
import { FaGraduationCap } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import ProgressBar from "../../progressBar/progressBar";

const CourseBox = ({
  courseName,
  imgUrl,
  info,
  newCourse,
  id,
  hp,
  participants,
  inputProgress,
}) => {
  const checkIfNewCourse = () => {
    if (newCourse) {
      return (
        <div className="newCourseBox">
          <h4>New</h4>
        </div>
      );
    }
  };

  return (
    <a href={"#/course/" + id} className="courseBox">
      <div className="box">
        <div className="imageBox">
          <img src={process.env.PUBLIC_URL + imgUrl} alt={courseName} />
          {checkIfNewCourse()}
        </div>
        <h2>{courseName}</h2>
        <div className="hp">
          <FaGraduationCap className="graduationCap" />
          <h4>{hp}hp</h4>
        </div>
        <p>{info}</p>
        <div className="participants">
          <IoIosPeople className="peopleicon" />{" "}
          <h4>{participants} participants</h4>
        </div>
        <ProgressBar inputProgress={inputProgress} />
      </div>
      <div className="open">
        <h2>Click to open</h2>
      </div>
    </a>
  );
};

export default CourseBox;
