import React, { useState } from "react";
import "./right-side-bar.scss";
import { BsCalendarFill } from "react-icons/bs";
import { BsFillChatSquareDotsFill } from "react-icons/bs";
import Calendar from "../courses/coursePage/calendar/calendar";

const RightSideBar = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="bar">
      <div className="iconBar">
        <BsCalendarFill
          className="icon"
          size={40}
          onClick={() => setShowCalendar(!showCalendar)}
        />
        <BsFillChatSquareDotsFill
          className="icon"
          size={40}
          onClick={() => setShowMessage(!showMessage)}
        />
      </div>
      <div className="expanded">
        {showCalendar && (
          <div className="calendar">
            <Calendar />
          </div>
        )}
        {showMessage && (
          <div className="message">
            <p>messafe</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RightSideBar;
