import React from "react";
import subHeader from "../components/subHeader";
import "../App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'

import im1 from './website1.png'
import im2 from './website2.png'
import im3 from './website3.png'

  
const webProject = () => {
  return (
    <div>
        <header className="App-header">
        <div className='icodiv'>
        <a className='ico' href='/'><FontAwesomeIcon icon={faArrowLeft} size="2xl"/></a>
        </div>
        </header>
        <div>
            <img src={im3} className = "projto"/>
            <h1>
            These are class projects from web developement class.
            Created using py4web, these projects uses a combination of python and javascript to create dynamic websites.
            </h1> 
            <img src={im2} className = "projto"/>
            <h1>
            I created websites with a functioning login system. And an phone book app after the user have logged in. 
            </h1> 
            <img src={im1} className = "projto"/>
        </div>
    </div>
  );
};
  
export default webProject;