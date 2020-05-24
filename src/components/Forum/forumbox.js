import React, { useState, useEffect } from "react";
import "./forumbox.scss";
import data from "../../jsonData/forumreplydata.json";
import Forumreply from "./forumreply";
import forumData from "../../jsonData/forumdata.json";

const Forumbox = ({ id, name, imgUrl, title, date, message }) => {
  const newsfeeddata = data.reply;
  const [show, setShow] = useState(false);
  return (
    <a onClick={() => setShow(!show)}>
      <div className="forumbox">
        <div className="top">
          <div class="forumimage">
            <img src={process.env.PUBLIC_URL + imgUrl} alt={name} />
            <div className="forumname">
              <h4>{name}</h4>
            </div>
          </div>
          <div className="middle">
            <h2>{title}</h2>
            <p>{date}</p>
            <div className="forummessage">
              {show && (
                <div>
                  <p>{message}</p>
                </div>
              )}
            </div>
          </div>
          <div className="answers">
            <p>4 answers</p>
          </div>
        </div>
      </div>
      {show && (
        <div classname="replies">
          {newsfeeddata.map((forumdata) => (
            <Forumreply
              name={forumdata.name}
              imgUrl={forumdata.imgUrl}
              date={forumdata.date}
              message={forumdata.message}
            />
          ))}
        </div>
      )}
    </a>
  );
};

export default Forumbox;
