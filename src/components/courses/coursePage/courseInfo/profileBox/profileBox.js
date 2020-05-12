import React from "react";
import "./profileBox.scss";
import { FiMail } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

const ProfileBox = ({ employment, profileImage, email, name, linkedIn }) => {
  return (
    <div className="profileBox">
      <h4>{employment}</h4>

      <img
        className="profileImage"
        src={process.env.PUBLIC_URL + profileImage}
        alt={name}
      />
      <h5>{name}</h5>
      <div className="quickLinks">
        <a href={"mailto:" + email}>
          <FiMail />
        </a>
        <a href={linkedIn}>
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};
export default ProfileBox;
