import React, { useEffect } from "react";
import { images } from "../../../utils/constants";
import "./WhatToWear.css";

const WhatToWear = () => {
  const wtwr = images.wtwr;
  useEffect(() => {
    document.title = "Tony Jin: WhatToWear";
  }, []);
  return (
    <div className="case__study">
      <h1 className="tmarg bmarg">
        <p>What to Wear</p>
      </h1>

      <img src={wtwr.demo1} className="demoImage" />
      <div className="twintext tmarg bmarg  ">
        <div className="bmarg">
          <div className="bmarg">
            <p style={{ fontWeight: "bold" }}>Timespan</p>
            <p>7 weeks</p>
          </div>
          <div>
            <p style={{ fontWeight: "bold" }}>Role</p>
            <p>Full-Stack Developer</p>
          </div>
        </div>
        <div>
          <div className="bmarg">
            <p style={{ fontWeight: "bold" }}>Goal</p>
            <p>
              This project expands from previous website created at TripleTen,
              adding more functionalities.
            </p>
          </div>
          <div className="wtwr__flex">
            <img src={wtwr.demo2} className="demoImage bmarg wtwr__mx-w" />
            <img src={wtwr.demo3} className="demoImage bmarg wtwr__mx-w" />
          </div>
          <div>
            <p>
              For this project, I created a website based on a set of
              instructions.
            </p>
            <p>
              This website automatically detects it's user's location and sends
              it to an wheather api, which returns the wheather data for that
              location. After which the site recommends clothings using the
              temperature data.
            </p>
            <p>
              Users can register, login, upload and edit their own clothing, and
              like clothings posted by others.
            </p>
          </div>
        </div>
      </div>
      <img src={wtwr.demo4} className="demoImage bmarg" />
    </div>
  );
};

export default WhatToWear;
