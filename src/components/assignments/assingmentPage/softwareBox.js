import React from "react";
import "./softwareBox.scss"
import { AiFillGithub} from "react-icons/ai";
import {DiVisualstudio} from "react-icons/di";
import {FaReact} from "react-icons/fa";


const SoftwareBox = ( ) => {
  return (
    
    <div className="softwareeBox">
      <h2 className="softwareTitle">Software needed</h2>
      <div className="softwareFiles">
          <a className="pdf" href={"https://acrobat.adobe.com/se/sv/acrobat/about-adobe-pdf.html"}>
              <AiFillGithub />
              <div><p>GitHub</p></div>
          </a>
          <a className="pdf" href={"https://acrobat.adobe.com/se/sv/acrobat/about-adobe-pdf.html"}>
              <DiVisualstudio />
              <div><p>Visual Studio</p></div>
          </a>
          <a className="pdf" href={"https://acrobat.adobe.com/se/sv/acrobat/about-adobe-pdf.html"}>
              <FaReact />
              <div><p>React</p></div>
          </a>
      </div>
      
    </div>  
  );
  
};

export default SoftwareBox;