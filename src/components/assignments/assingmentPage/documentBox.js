import React from "react";
import "./documentBox.scss"
import {FaFileWord, FaFileExcel, FaFileCode, FaFile} from "react-icons/fa";
import{AiFillFileExcel} from "react-icons/ai"
import {TiDocumentAdd} from "react-icons/ti";


const DocumentBox = ( ) => {
  return (
    
    <div className="documentbox">
      <h2 className="documentTitle">Documents</h2>
      <div className="documents">
    
        <a className="file" href={"https://drive.google.com/drive/"}>
          <FaFileWord />
          <div className="fileTitle">
            <p>Title</p>
            </div>
        </a>
        <a className="file" href={"https://drive.google.com/drive/"}>
          <FaFileWord />
          <div className="fileTitle">
          <p>Title</p>
          </div>
        </a>
        <a className="file" href={"https://drive.google.com/drive/"}>
          <FaFileExcel />
          <div className="fileTitle">
          <p>Title</p>
          </div>
        </a>
        <a className="file" href={"https://drive.google.com/drive/"}>
          <FaFileCode />
          <div className="fileTitle">
          <p>Title</p>
          </div>
        </a>
        <a className="file" href={"https://drive.google.com/drive/"}>
          < FaFile/>
          <div className="fileTitle">
          <p>Title</p>
          </div>
        </a>
        
        </div>

        <div className="newDoc">
        <a className="newDo">
          <TiDocumentAdd/>
        </a>
        </div>

       
    </div>  
  
  );
  
};

export default DocumentBox;