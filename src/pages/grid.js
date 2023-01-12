import React, { useEffect } from "react";
import Subheader from "../components/subHeader";
import "../App.css"
import "./page.css"
import"./grid.css"
import im1 from './fielread-sticky-header-c.PNG'
import im2 from './fielread-multiselect-c.gif'

const Gridtest = () => {
    return (
        <div>
            <Subheader/>
            <div className="Page grid-page">
                <div className = "grid-item grid-header">
                    <div className = "box-item"></div>
                    <div className = "box-item"></div>
                    <div className = "box-item"></div>
                </div>
                <div className = "grid-item grid-sidebar">
                </div>
                <div className = "grid-item">
                </div>
            </div>
        </div>
      );
};

export default Gridtest;