import React from 'react';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProgressBar =({inputProgress})=>{
    const setProgressbar = (progress) => {
        const percentage = progress;
        return (
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              textSize: "30px",
              pathColor: `rgba(115, 167, 144, ${percentage / 20})`,
              textColor: "#1f1f1f",
              trailColor: "#fafafa",
            })}
          />
        );
      };
    return(
        <div className="progressBar">{setProgressbar(inputProgress)}</div>
    )
}
export default ProgressBar;