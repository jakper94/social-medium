import React from "react";
import "./notifications.scss";
import Notis from "./notis";
import data from "../../../jsonData/notificationdata.json";

const Notifications = () => {
  const notisdata = data.notifications;
  return (
    <div className="info">
      <h1>Notifications</h1>
      {notisdata.map((nodata) => (
        <Notis icon={nodata.icon} message={nodata.message} />
      ))}
    </div>
  );
};

export default Notifications;
