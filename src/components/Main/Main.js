import React from "react";
import Profile from "../Profile/Profile";
import Project from "../Project/Project";
import { images, data } from "../../utils/constants";

const Main = () => {
  return (
    <div>
      <Profile />
      <div className="rowt">
        <Project
          cover={images.RecipeSearcher.cover}
          content={data.p7}
          link="/recipe-searcher"
        />
        <Project cover={images.wtwr.cover} content={data.p6} link="/wtwr" />
        <Project
          cover={images.tripleTen.cover}
          content={data.p5}
          link="/tripleten"
        />
        <Project
          cover={images.fileread.cover}
          content={data.p4}
          link="/fileread"
        />
        <Project cover={images.rage.cover} content={data.p1} link="/rage" />
        <Project cover={images.ai.cover} content={data.p2} link="/AI" />
        <Project cover={images.web.cover} content={data.p3} link="/web" />
      </div>
      <footer className="App-footer"></footer>
    </div>
  );
};

export default Main;
