import React, { useEffect } from "react";
import Subheader from "../components/subHeader";
import "../App.css"
import "./page.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'

import im1 from './fielread-sticky-header-c.PNG'
import im2 from './fielread-multiselect-c.gif'


  
const WebProject = () => {
  useEffect(() => {
    document.title = 'Tony Jin: Fileread';
  }, []);
  return (
    <div className="Page">
        <Subheader/>
        <div className="Page-body">
        <h1>
            <p>Fileread AI</p>
          Goal
          </h1>
          <h2>
          ‎ ‎ ‎ ‎ Implementing a sticky header and shift-multi-select for the documents table.
          </h2>
          <h1>
          Role
          </h1>
          <h2>
          ‎ ‎ ‎ ‎ programmer
          </h2>
          <img src={im1} className = "projto"/> 
            <h2>
            <p>
            ‎ ‎ ‎ ‎ For this project, I reported to a manager who assigned 
            various tasks for me to tackle. I implemented a fixed header for a dynamically generated 
            table and shift-multi-select for elements within that table. After finishing each task, 
            I reported to my manager and demonstrated my product.
            </p>
            </h2>
            <img src={im2} className = "projto"/>
        </div>
        <footer className='Page-footer'></footer>
    </div>
  );
};
  
export default WebProject;