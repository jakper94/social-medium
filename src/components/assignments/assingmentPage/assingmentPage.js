import React, { useState } from "react";
import "./assingmentPage.scss";
import DescriptionBox from './descriptionBox';
import LitteratureBox from "./litteratureBox";
import SubmissionBox from "./submissionBox";
import DocumentBox from "./documentBox";
import GroupBox from "./groupBox";
import SoftwareBox from "./softwareBox";
import assignmentData from "../../../jsonData/assignments.json";
import Assignments from "../assignments";




const AssingmentPage = ({ id }) => {
  const assignments = assignmentData.assignments;


/*   function filterById(assignments, id) {
    return assignments.filter(function(assignments) 
        {return (assignments['id'] == id);})[0];} */

  return (
    <div className="assignmentPage">
      <h1 className="assignmentName">Course 1  >  Ouath2 </h1>
      <div className="column-container">
        <div className="over-container">
             <div className ="decsBox">
                 <DescriptionBox descriptionBox/>
              </div>
              <div className="right-container">
                  <div className="submissionBox"> 
                     <SubmissionBox submissionBox/>
                  </div>
                  <div className="groupBox">
                       <GroupBox groupBox/>
                   </div>
              </div>
        </div>
        <div className="literatureAndSoftware">
          <div className="literatureBox"> 
            <LitteratureBox literatureBox/>
          </div>
          <div className="softwareBox">
            <SoftwareBox softwareBox/>
          </div>
        </div>
        <div className="documentBox"> 
          <DocumentBox documentBox/>
        </div>
      </div>
      
        
          
  </div>
  );
};
export default AssingmentPage;
