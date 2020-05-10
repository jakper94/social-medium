import React from "react";
import "./courseInfo.scss";

const CourseInfo = ({courseInfo}) => {
  return (
    <div className="courseInfo">
      <h3>Course Information</h3>
      <p>
        {courseInfo}
        In the first part of this course, we will go over some fundamentals of
        social media. Later, you will develop your own social medium and
        implement a prototype. This will be done in collaboration with marketing
        students at ECU Perth in Australia who perform a market analysis to
        identify gaps in current social media platforms. The results from the
        marketing analysis will be your starting point for your projects. We
        will run all lectures and meetings online through Zoom at
      </p>
    </div>
  );
};
export default CourseInfo;
