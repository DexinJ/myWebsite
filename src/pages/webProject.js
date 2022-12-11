import React, { useEffect } from "react";
import subHeader from "../components/subHeader";
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
        <header className="App-header">
        <div className='icodiv'>
        <a className='ico' href='/'><FontAwesomeIcon icon={faArrowLeft} size="2xl"/></a>
        </div>
        </header>
        <div className="Page-body">
        <h1>
          Goal
          </h1>
          <h2>
          Creating websites with log-in and personal phone book for each user.
          </h2>
          <h1>
          Role
          </h1>
          <h2>
          programmer
          </h2>
            <img src={im3} className = "projto"/>
            <h2>
            <p>
            These are class projects from web developement class.
            Created using py4web, these projects uses a combination of python and javascript to create dynamic websites.
            </p>
            <img src={im2} className = "projto"/>
            <p>
            I created websites with a functioning login system. And an phone book app after the user have logged in. 
            </p>
            </h2> 
            <img src={im1} className = "projto"/>
        </div>
        <footer className='Page-footer'></footer>
    </div>
  );
};
  
export default WebProject;