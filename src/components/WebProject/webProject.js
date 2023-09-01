import React, { useEffect } from "react";
import { images } from "../../utils/constants";
const WebProject = () => {
  const web = images.web;
  useEffect(() => {
    document.title = "Tony Jin: Web Projects";
  }, []);
  return (
    <div className="case__study">
      <h1 className="tmarg">
        <p className="bmarg">Web Projects</p>
      </h1>
      <img src={web.demo2} className="demoImage " />
      <div className="twintext5050 tmarg bmarg">
        <div className="box">
          <div>
            <p style={{ fontWeight: "bold" }}>Timespan</p>
            <p>3 weeks</p>
          </div>
          <div>
            <p style={{ fontWeight: "bold" }}>Role</p>
            <p>Programmer</p>
          </div>
        </div>
        <div className="box">
          <div>
            <div className="bmarg">
              <p style={{ fontWeight: "bold" }}>Goal</p>
              <p>
                Create a personalized phonebook website with a login system.
              </p>
            </div>
            <div>
              <p>
                Using py4web, these projects utilizes a combination of python
                and javascript to create dynamic websites.
              </p>
              <p>
                I created a website with a login function. Users can add, edit,
                and delete their contacts and the contacts' phone numbers after
                logging in.
              </p>
            </div>
          </div>
        </div>
      </div>
      <img src={web.demo1} className="demoImage bmarg" />
    </div>
  );
};

export default WebProject;
