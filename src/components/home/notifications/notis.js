import React from "react";
import "./notis.scss";
import { GoBell } from "react-icons/go";

import { AiFillUnlock } from "react-icons/ai";
import { AiOutlineForm } from "react-icons/ai";

const getIcon = (type) => {
  if (type === "goBell") {
    return <GoBell />;
  } else if (type === "lock") {
    return <AiFillUnlock />;
  } else if (type === "form") {
    return <AiOutlineForm />;
  }
};
const Notis = ({ message, icon }) => {
  return (
    <div className="notisbox">
      <div className="notisicon">{getIcon(icon)}</div>
      <div className="notismsg">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Notis;
