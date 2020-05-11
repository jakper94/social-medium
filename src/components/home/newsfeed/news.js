import React from "react";
import "./news.scss";

const News = ({ name, imgUrl, message }) => {
  return (
    <div className="newsbox">
      <div class="profileimage">
        <img src={process.env.PUBLIC_URL + imgUrl} alt={name} />
      </div>
      <div className="name">
        <h2>{name}</h2>
      </div>
      <div className="message">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default News;
