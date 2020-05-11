import React from "react";
import "./quizbox.scss"

const QuizBox = ( {quizName, information, submitted, progress}) => {

  const checkStatus=()=>{
    if(submitted){
      return(
        <div className="submitted">
          <h2>Submitted</h2>
        </div>
      )
    } else{
      return(
        <div className="notSubmitted">
          <h2>Not started</h2>
        </div>
      )
    }
  }

  return (
    <div className="quiz">
      <div className="quizBox">
          {checkStatus()}
          <div className="quizInfo">
              <p>{information}</p>
              <div className="progress">
                  <p>Progress: {progress}%</p>
              </div>
          </div>
          
      </div>
      <h4>{quizName}</h4>
    </div>
  );
};

export default QuizBox;