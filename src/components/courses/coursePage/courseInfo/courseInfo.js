import React from "react";
import "./courseInfo.scss";
import ProfileBox from "./profileBox/profileBox";
import { IoIosPeople } from "react-icons/io";
import ProgressBar from "../../../progressBar/progressBar"

const CourseInfo = ({ courseInfo }) => {
  
  return (
    <div className="courseInfo">
      <h2>Course Information</h2>
      <p>
        {courseInfo}
        In the first part of this course, we will go over some fundamentals of
        social media. Later, you will develop your own social medium and
        implement a prototype. This will be done in collaboration with marketing
        students at ECU Perth in Australia who perform a market analysis to
        identify gaps in current social media platforms. The results from the
        marketing analysis will be your starting point for your projects. We
        will run all lectures and meetings online through Zoom at
      </p>
      <div className="profiles">
        <ProfileBox
          employment="Head Teacher"
          profileImage="/images/profile2.jpg"
          email="something@school.com"
          name="Carole Jones"
          linkedIn="https://www.linkedin.com/in/"
        />
        <ProfileBox
          employment="Teacher"
          profileImage="/images/profile3.jpg"
          email="something@school.com"
          name="Steve Johnson"
          linkedIn="https://www.linkedin.com/in/"
        />
        <ProfileBox
          employment="Supervisor"
          profileImage="/images/profile1.jpg"
          email="something@school.com"
          name="Leif Andersson"
          linkedIn="https://www.linkedin.com/in/"
        />
      </div>
      <div className="literature">
        <h2>Literature</h2>
        <a
          href="https://www.googleapis.com/books/v1/volumes?q=isbn:9780593076118"
          target="_blank"
        >
          <div className="book1">
            <img
              src={process.env.PUBLIC_URL + "/images/sprint.jpg"}
              alt="book"
            />
          </div>
        </a>
      </div>
      <div className="software">
        <h2>Software needed</h2>

        <a href="https://www.adobe.com/se/products/xd.html" target="_blank">
          <div className="program1">
            <img
              className="logo"
              src={process.env.PUBLIC_URL + "/images/adobeXD.png"}
              alt="program"
            />
          </div>
        </a>
      </div>
      <div className="participants">
        <IoIosPeople className="peopleicon" /> <h4> 11 participants</h4>
      </div>
    <ProgressBar inputProgress={45}/>
    </div>
  );
};
export default CourseInfo;
