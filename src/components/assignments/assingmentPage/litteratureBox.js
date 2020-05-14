import React from "react";
import "./litteratureBox.scss"
import { FaFilePdf } from "react-icons/fa";


const LitteratureBox = ( ) => {
  return (
    
    <div className="litteratureBox">
      <h2 className="literatureTitle">Relevant litterature</h2>
      <div className="literatureFiles">
          <a className="pdf" href={"https://www.tutorialspoint.com/oauth2.0/oauth2.0_tutorial.pdf"}>
              <FaFilePdf />
              <div><p>Tutorial</p></div>
          </a>
          <a className="pdf" href={"https://acrobat.adobe.com/se/sv/acrobat/about-adobe-pdf.html"}>
              <FaFilePdf />
              <div><p>Title</p></div>
          </a>
      </div>
      <div className="SoftwareBox">

      </div>
    </div>  
  );
  
};

export default LitteratureBox;