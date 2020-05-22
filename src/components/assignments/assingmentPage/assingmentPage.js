import React, { useState } from "react";
import "./assingmentPage.scss";
import DescriptionBox from './descriptionBox';
import LitteratureBox from "./litteratureBox";
import SubmissionBox from "./submissionBox";
import DocumentBox from "./documentBox";
import GroupBox from "./groupBox";
import SoftwareBox from "./softwareBox";
import assignmentData from "../../../jsonData/assignments.json";



const AssingmentPage = ({match} ) => {

  var ID = match.params.assignID;
  let Id = ID -1;

  const assignments = assignmentData.assignments;

  const checkGroupStatus = () =>{
    if (assignments[Id].group){
      return (     
      <div className="groupBox">
        <GroupBox
          groupName = {assignments[Id].groupName}
          assignId = {Id}
            />
      </div>
      );
    }
  }

 
  return (
    <div className="assignmentPage">
     <h1 className="assignmentName">{assignments[Id].title}</h1>     
      <div className="column-container">
        <div className="over-container">
             <div className ="decsBox">
                 <DescriptionBox 
                 description = {assignments[Id].description}
                 presentation = {assignments[Id].presentation}
                 />
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
                  {checkGroupStatus()}
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
