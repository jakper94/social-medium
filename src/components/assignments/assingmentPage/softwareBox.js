import React from "react";
import "./softwareBox.scss"
import { AiFillGithub} from "react-icons/ai";
import {DiVisualstudio} from "react-icons/di";
import {FaReact, FaAdobe} from "react-icons/fa";
import assignmentData from "../../../jsonData/assignments.json";



const SoftwareBox = ( {assignmentId}) => {
  const assignments = assignmentData.assignments;
    const softwares = assignments[assignmentId].softwares;

const checkSoftware=(software)=>{
 
  if (software.github){
    return (
      <a className="pdf" href={"https://acrobat.adobe.com/se/sv/acrobat/about-adobe-pdf.html"}>
              <AiFillGithub />
              <div><p>Git Hub</p></div>
          </a>
    );
  } else if (software.react){
    return (
      <a className="pdf" href={"https://acrobat.adobe.com/se/sv/acrobat/about-adobe-pdf.html"}>
      <FaReact />
      <div><p>React</p></div>
  </a>
    );
  } else if (software.visualStudio){
    return (
      <a className="pdf" href={"https://acrobat.adobe.com/se/sv/acrobat/about-adobe-pdf.html"}>
      <DiVisualstudio />
      <div><p>Visual Studio</p></div>
  </a>
    );
  } else if (software.adobeXD){
    return(
      <a className="pdf" href={"https://acrobat.adobe.com/se/sv/acrobat/about-adobe-pdf.html"}>
      <FaAdobe />
      <div><p>Adobe XD</p></div>
  </a>
    );
  }
}


  return (
    
    <div className="softwareeBox">
      <h2 className="softwareTitle">Software needed</h2>
      <div className="softwareFiles">
      

      {
      softwares.map((software) => (
        
        checkSoftware(software)
      ))
    
    
  }
         
          
      </div>
      
    </div>  
  );
  
};

export default SoftwareBox;