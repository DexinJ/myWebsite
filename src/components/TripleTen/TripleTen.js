import React, { useEffect } from "react";
import { images } from "../../utils/constants";
const TripleTen = () => {
  const tripleTen = images.tripleTen;

  useEffect(() => {
    document.title = "Tony Jin: Triple Ten";
  }, []);
  return (
    <div className="case__study">
      <h1 className="tmarg bmarg">
        <p>TripleTen</p>
      </h1>
      <div className="bmarg">
        <img src={tripleTen.demo1} className="demoImage" />
      </div>
      <div className="twintext bmarg">
        <div className="bmarg">
          <div>
            <p style={{ fontWeight: "bold" }}>Timespan</p>

            <p>10 weeks</p>
          </div>
        </div>
        <div>
          <img src={tripleTen.demo3} className="demoImage" />
        </div>
      </div>
      <div className="twintexttwo bmarg">
        <div>
          <div className="bmarg">
            <p style={{ fontWeight: "bold" }}>Goal</p>

            <p>
              Develope Projects that will further improve my front-end and
              back-end development skills.
            </p>
          </div>
          <div>
            <p style={{ fontWeight: "bold" }}>Process</p>
            <p>
              For these series of projects, I joined TripleTen to create dynamic
              websites.
            </p>
            <p>
              I created these projects using HTML, CSS, Javascript, and react.js
              under the guidence of a description and a figma design. I send my
              code to be passed by a code reviewer when I was done.
            </p>
          </div>
        </div>
        <div className="caption">
          <img src={tripleTen.demo4} className="demoImage bmarg" />
          <img src={tripleTen.demo5} className="demoImage" />
        </div>
      </div>
      <div className="bmarg">
        <div className="caption">
          <img src={tripleTen.demo2} className="demoImage" />
          <p className="twincaption">
            Screenshot of one of the project built, where user can change their
            name, title, profile picture, and add, like and delete images.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TripleTen;
