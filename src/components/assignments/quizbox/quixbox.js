import React from "react";
import "./quizbox.scss"
import ProgressBar from "../../progressBar/progressBar";


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
            <div className="infoInfo">
            <p>{information}</p>
            </div>
              <div className="progress">
              <ProgressBar inputProgress={progress} />
              </div>
          </div>
          
      </div>
      <h4>{quizName}</h4>
    </div>
  );
};

export default QuizBox;