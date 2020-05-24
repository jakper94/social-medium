import React from "react";
import "./forumreply.scss";

const Forumreply = ({ name, imgUrl, message, date }) => {
  return (
    <div className="replybox">
      <div class="replyimage">
        <img src={process.env.PUBLIC_URL + imgUrl} alt={name} />
      </div>

      <div className="replyname">
        <h4>{name}</h4>
      </div>

      <div className="replydate">
        <p> {date}</p>
      </div>
      <div className="replymessage">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Forumreply;
