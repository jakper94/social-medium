import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Navigation from "../navigation/navigation";
import Home from "../home/home";
import Courses from "../courses/courses"
import Projects from "../projeccts/projects"
import "./app.scss";
import "../../resources/site.scss";


const App = () => {
  return (
    <HashRouter>
      <div className="app">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/courses" component={Courses}/>
          <Route path="/projects" component={Projects}/>
          <Route from="*" to="/" component={Home} />
        </Switch>
      </div>
    </HashRouter>
  );
};

export default App;
