import React, { useState } from "react";
import "./assingmentPage.scss";
import DescriptionBox from './descriptionBox';
import LitteratureBox from "./litteratureBox";
import SubmissionBox from "./submissionBox";
import DocumentBox from "./documentBox";
import GroupBox from "./groupBox";
import SoftwareBox from "./softwareBox";
import assignmentData from "../../../jsonData/assignments.json";
import assignments from "../assignments";
import { Route,Link } from 'react-router-dom';


const AssingmentPage = ({match} ) => {

  const assignments = assignmentData.assignments;
  var ID = match.params.assignID;
  let Id = ID -1;

  return (
    
    <div className="assignmentPage">
     <h1 className="assignmentName">{assignments[Id].title}</h1>     
      <div className="column-container">
        <div className="over-container">
             <div className ="decsBox">
                 <DescriptionBox 
                 desc = {assignments[Id].description}/>
              </div>
              <div className="right-container">
                  <div className="submissionBox"> 
                     <SubmissionBox 
                     submitted = {assignments[Id].submitted}
                     corrected = {assignments[Id].corrected}
                     passed = {assignments[Id].passed}
                     deadline = {assignments[Id].deadline}
                     /> 
                  </div>
                  <div className="groupBox">
                       <GroupBox groupBox
                      />
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
