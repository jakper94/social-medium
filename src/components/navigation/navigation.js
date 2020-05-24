import React from "react";
import { NavLink } from "react-router-dom";
import "./navigation.scss";
import Oauth from "../oauth/oauth";
const Navigation = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="navigation">
      <div className="oauth">
        <Oauth />
      </div>
      <div className="menu">
        <NavLink exact to="/" onClick={() => scrollToTop()}>
          Home
        </NavLink>
        <NavLink exact to="/courses" onClick={() => scrollToTop()}>
          Courses
        </NavLink>
        <NavLink exact to="/assignments" onClick={() => scrollToTop()}>
          Assignments
        </NavLink>
        <NavLink exact to="/projects" onClick={() => scrollToTop()}>
          projects
        </NavLink>
        <NavLink exact to="/forum" onClick={() => scrollToTop()}>
          Forum
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
