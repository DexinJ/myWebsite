import React, { useEffect } from "react";
import Subheader from "../components/subHeader";
import "../App.css"
import "./page.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'

import im1 from './website1.png'
import im2 from './website2.png'
import im3 from './website3.png'

  
const WebProject = () => {
  useEffect(() => {
    document.title = 'Tony Jin: Web Projects';
  }, []);
  return (
    <div className="Page">
       <Subheader/>
        <div className="Page-body">
        <h1>
          <p>Web Projects</p>
          Goal
          </h1>
          <h2>
          <p>‎ ‎ ‎ ‎ Creating websites with log-in and personal phone book for each user.</p>
          </h2>
          <h1>
          Role
          </h1>
          <h2>
          ‎ ‎ ‎ ‎ programmer
          </h2>
            <img src={im3} className = "projto"/>
            <h2>
            <p>
            ‎ ‎ ‎ ‎ These are class projects from the web development class.
            Created using py4web, these projects use a combination of python and javascript to create dynamic websites.
            </p>
            <img src={im2} className = "projto"/>
            <p>
            ‎ ‎ ‎ ‎ I created websites with a functioning login system. And a phone book app after the user has logged in. 
            </p>
            </h2> 
            <img src={im1} className = "projto"/>
        </div>
        <footer className='Page-footer'></footer>
    </div>
  );
};
  
export default WebProject;