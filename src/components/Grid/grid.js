import React from "react";
import "./grid.css";

const Gridtest = () => {
  return (
    <div>
      <div className="Page grid-page">
        <div className="grid-item grid-header">
          <div className="box-item"></div>
          <div className="box-item"></div>
          <div className="box-item"></div>
        </div>
        <div className="grid-item grid-sidebar"></div>
        <div className="grid-item"></div>
      </div>
    </div>
  );
};

export default Gridtest;
