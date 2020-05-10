import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Navigation from "../navigation/navigation";
import Home from "../home/home";
import Courses from "../courses/courses";
import Projects from "../projeccts/projects";
import Assignments from "../assignments/assignments";
import RightSideBar from "../right-side-bar/right-side-bar";
import "./app.scss";
import "../../resources/site.scss";
import CoursePage from "../courses/coursePage/coursePage";
import courseData from "../../jsonData/courses.json"
const App = () => {
  const courses = courseData.courses;
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
          {courses.map((cours)=>(
            <Route path ={"/course/" + cours.id} component={CoursePage} />
          ))}
          
          <Route from="*" to="/" component={Home} />
        </Switch>
        
      </div>
    </HashRouter>
  );
};

export default App;
