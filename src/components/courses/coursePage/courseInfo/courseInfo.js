import React from "react";
import "./courseInfo.scss";
import ProfileBox from "./profileBox/profileBox";
import { IoIosPeople } from "react-icons/io";
import ProgressBar from "../../../progressBar/progressBar";
import courseData from "../../../../jsonData/courses.json";
const CourseInfo = ({ teatchers, assId, courseInfo, progress }) => {
  const courses = courseData.courses;
  


  return (
    <div className="courseInfo">
      <h2>Course Information</h2>
      <p>{courseInfo}</p>
      <div className="profiles">
        {teatchers.map((teatcher) => (
          <ProfileBox
            employment={teatcher.employment}
            profileImage={teatcher.profileImg}
            email={teatcher.email}
            name={teatcher.name}
            linkedIn={teatcher.linkedIn}
          />
        ))}
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
        <IoIosPeople className="peopleicon" /> <h4> {courses[assId].participants} participants</h4>
      </div>
      <ProgressBar inputProgress={progress} />
    </div>
  );
};
export default CourseInfo;
