import React, { useState } from "react";
import "./calendar.scss";
import Calendar from "react-calendar";

const ReactCalendar = () => {
  const [date, setDate] = useState({ date: new Date() });

  const onChange = (date) => setDate({ date });
  return (
    <div className="calendar">
      <Calendar onChange={onChange} value={date.date} />
    </div>
  );
};
export default ReactCalendar;
