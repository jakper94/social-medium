import React, { useState } from "react";
import "./courseBox.scss";
import { FaGraduationCap } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

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
  const setProgressbar = (progress) => {
    const percentage = progress;
    return (
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textSize: "30px",
          pathColor: `rgba(119, 185, 74, ${percentage / 20})`,
          textColor: "#1f1f1f",
          trailColor: "#fafafa",
        })}
      />
    );
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
        <div className="progressBar">{setProgressbar(inputProgress)}</div>
      </div>
      <div className="open">
        <h2>Click to open</h2>
      </div>
    </a>
  );
};

export default CourseBox;
