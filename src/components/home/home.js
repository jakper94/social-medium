import React from "react";
import "./home.scss";
import Newsfeed from "./newsfeed/newsfeed";
import Notifications from "./notifications/notifications";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <div className="grid-container">
        <div className="item1">
          {" "}
          <Newsfeed />
        </div>
        <div className="item2">
          {" "}
          <Notifications />
        </div>
      </div>
    </div>
  );
};

export default Home;
