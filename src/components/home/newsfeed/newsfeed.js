import React from "react";
import "./newsfeed.scss";
import News from "./news";
import data from "../../../jsonData/newsfeeddata.json";

const Newsfeed = () => {
  const newsfeeddata = data.news;
  return (
    <div className="newsfeed">
      <h1>Newsfeed</h1>
      <div classname="newsbox">
        {newsfeeddata.map((newsdata) => (
          <News
            name={newsdata.name}
            imgUrl={newsdata.imgUrl}
            message={newsdata.message}
          />
        ))}
      </div>
    </div>
  );
};

export default Newsfeed;
