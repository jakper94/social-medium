import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import "./app.scss";
import "../../resources/site.scss";
import Navigation from "../navigation/navigation";
import Home from "../home/home";
import Courses from "../courses/courses";
import Projects from "../projeccts/projects";
import Assignments from "../assignments/assignments";
import RightSideBar from "../right-side-bar/right-side-bar";
import CoursePage from "../courses/coursePage/coursePage";
import CompletedCoursePage from "../courses/coursePage/completedCourse";
import AssingmentPage from "../assignments/assingmentPage/assingmentPage";

import courseData from "../../jsonData/courses.json";
import assignmentData from "../../jsonData/assignments.json";
import Forum from "../Forum/forum";
const App = () => {
  const courses = courseData.courses;
  const assignments = assignmentData.assignments;

  return (
    <HashRouter>
      <div className="app">
        <RightSideBar />
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/courses" component={Courses} />
          <Route path="/assignments" component={Assignments} />
          <Route path="/projects" component={Projects} />
          {courses.map((cours) => (
            <Route path={"/course/:assignID"} component={CoursePage} />
          ))}
          {assignments.map((assignment) => (
            <Route path={"/assignment/:assignID"} component={AssingmentPage} />
          ))}
          {assignments.map((assignment) => (
            <Route
              path={"/assignment/" + assignment.id}
              component={AssingmentPage}
            />
          ))}
          <Route path="/forum" component={Forum} />

          <Route from="*" to="/" component={Home} />
        </Switch>
      </div>
    </HashRouter>
  );
};

export default App;
