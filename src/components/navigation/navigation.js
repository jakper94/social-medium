import React, { useState }from "react";
import { NavLink } from "react-router-dom";
import "./navigation.scss";
import Oauth from "../oauth/oauth";
import data from "../../jsonData/courses.json";
import assignmentData from "../../jsonData/assignments.json";

const Navigation = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
    setCourseNavState(false);
    setassignNavState(false);
  };

  const [courseNavState, setCourseNavState] = useState(false);
  const [assignNavState, setassignNavState] = useState(false);


  return (
    <div className="navigation">
      <div className="oauth">
        <Oauth />
      </div>
      <div className="menu">
        <ul>
          <li><NavLink exact to="/" onClick={() => scrollToTop()}>Home</NavLink></li>
          <li><NavLink exact to="/courses" onClick={() => setCourseNavState(true)}>Courses</NavLink></li>
          { courseNavState && (
            <>
              <ul className="sub-menu">
                {data.courses.map((course) => (
                  <li><NavLink exact to={'/' + course.id} onClick={() => setassignNavState(true)}>{course.courseName}</NavLink></li>
                ))}
              </ul>
            </>
          )}
          <li><NavLink exact to="/assignments" onClick={() => scrollToTop()}>Assignments</NavLink></li>
          <li><NavLink exact to="/projects" onClick={() => scrollToTop()}>Projects</NavLink></li>
          <li><NavLink exact to="/forum" onClick={() => scrollToTop()}>Forum</NavLink></li>
       </ul>
      </div>
    </div>
  );
};

export default Navigation;
