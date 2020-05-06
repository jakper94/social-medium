import React from "react";
import "./quizbox.scss"

const QuizBox = ( {type, status}) => {

  //Progress bars of how well the user did on the test?

  return (
      <div>
    <div className="quizBox">
        {/*  Add image? */}

    </div>
    <h4>{type}</h4>
      </div>
  );
};

export default QuizBox;