import React, { useEffect } from "react";
import { images } from "../../utils/constants";

const Fileread = () => {
  const fileread = images.fileread;
  useEffect(() => {
    document.title = "Tony Jin: Fileread";
  }, []);
  return (
    <div className="case__study">
      <h1 className="tmarg bmarg">
        <p>Fileread AI</p>
      </h1>

      <img src={fileread.demo1} className="demoImage" />
      <div className="twintext tmarg bmarg  ">
        <div className="bmarg">
          <div className="bmarg">
            <p style={{ fontWeight: "bold" }}>Timespan</p>
            <p>3 weeks</p>
          </div>
          <div>
            <p style={{ fontWeight: "bold" }}>Role</p>
            <p>Programmer</p>
          </div>
        </div>
        <div>
          <div className="bmarg">
            <p style={{ fontWeight: "bold" }}>Goal</p>
            <p>
              Implement a sticky header and bulk editing function for a
              documents table
            </p>
          </div>
          <div>
            <p>
              For this project, I reported to a manager who assigned various
              tasks for me to tackle.
            </p>
            <p>
              I implemented a fixed header for a dynamically generated table so
              the table header stays on the top as the table was scrolled for
              better space management.
            </p>
            <p>
              I also implemented a multi-selection feature by Shift + Click.
              Using this feature, a user can select everything between two items
              on the table by selecting one item, then holding shift and
              selecting the other item. These selections will add to any other
              selections the user has already made and will not replace them,
              making it a useful tool for selecting continuous items on the
              table.
            </p>
            <p>
              After finishing each task, I demonstrated my implementations to my
              manager.
            </p>
          </div>
        </div>
      </div>
      <img src={fileread.demo2} className="demoImage bmarg" />
    </div>
  );
};

export default Fileread;
