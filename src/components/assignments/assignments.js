import React, { Component } from "react";
import "./assignments.scss";
import Assignmentbox from "./assignmentbox/assignmentbox";
import QuizBox from "./quizbox/quixbox";

const Assignments = () => {
  return (
    <section>
      <div className="assignments">
        <h1>Assignments</h1>
        <div className="assignmentboxes">
          <Assignmentbox assignment={"Assignment 1"} status={"Passed"}/>
          <Assignmentbox assignment={"Assignment 2"} status={"Not Passed"}/>
          <Assignmentbox assignment={"Assignment 3"} status={"Submitted"}/>
          <Assignmentbox assignment={"Assignment 4"} status={"Not Submitted"}/>
      </div>
      </div>

      <div className="quizes">
          <h1>Quiz and Tests</h1>
          <div className="quizboxes">
          <QuizBox type={"Quiz 1"} status={""}/>
          <QuizBox type={"Test 1"} status={""}/>
          <QuizBox type={"Test 2"} status={""}/>
      </div>
      </div>
    </section>
  );
};

export default Assignments;
