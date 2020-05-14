import React, { Component } from "react";
import "./assignments.scss";
import Assignmentbox from "./assignmentbox/assignmentbox";
import QuizBox from "./quizbox/quixbox";
import assignmentData from "../../jsonData/assignments.json";



const Assignments = () => {
  const assignments = assignmentData.assignments;
  const quizes = assignmentData.quiz;

  return (
      <div className="assignments">
        <h1 className="assignmentHead">Assignments</h1>
        <div className="assignmentboxes">
          {
            assignments.map((assignment) => (
              <Assignmentbox 
                  assignment={assignment.title} 
                  id = {assignment.id}
                  corrected={assignment.corrected}
                  submitted={assignment.submitted} 
                  passed={assignment.passed} 
                  info={assignment.information}
                  duration={assignment.duration}/>
            ))
          }
        </div>

      <div className="quizes">
          <h1>Quiz and Tests</h1>
          <div className="quizboxes">
            {
              quizes.map((quiz) => (
                 <QuizBox 
                    quizName={quiz.quizName} 
                    submitted={quiz.submitted} 
                    information={quiz.information}
                    progress={quiz.progress}/>
              ))

            }
          </div>
      </div>
      </div> 
  );
};


export default Assignments;
