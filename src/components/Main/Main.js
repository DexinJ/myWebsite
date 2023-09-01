import React from "react";
import Profile from "../Profile/Profile";
import Project from "../Project/Project";
import { images, data } from "../../utils/constants";

const Main = () => {
  return (
    <div>
      <Profile />
      <div className="rowt">
        <Project cover={images.rage.cover} content={data.p1} link="/rage" />
        <Project cover={images.ai.cover} content={data.p2} link="/AI" />
        <Project cover={images.web.cover} content={data.p3} link="/web" />
        <Project
          cover={images.fileread.cover}
          content={data.p4}
          link="/fileread"
        />
        <Project
          cover={images.tripleTen.cover}
          content={data.p5}
          link="/tripleten"
        />
      </div>
      <footer className="App-footer"></footer>
    </div>
  );
};

export default Main;
