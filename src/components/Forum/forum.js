import React from "react";
import "./forum.scss";
import Forumbox from "./forumbox";
import data from "../../jsonData/forumdata.json";

const Forum = () => {
  const newsfeeddata = data.forums;
  return (
    <div className="forum">
      <h1>Forum</h1>

      <div className="forums">
        {newsfeeddata.map((forumdata) => (
          <Forumbox
            id={forumdata.id}
            name={forumdata.name}
            imgUrl={forumdata.imgUrl}
            message={forumdata.message}
            date={forumdata.date}
            title={forumdata.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Forum;
