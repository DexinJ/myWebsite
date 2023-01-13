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
          <h1 className="tmarg">
            <p className="bmarg">Web Projects</p>          
          </h1>
          <img src={im2} className = "demoImage "/>
          <div className="twintext5050 tmarg bmarg">
              <div className="box">
                <div>
                  <p style={{ fontWeight: 'bold' }}>Timespan</p>
                  <p>3 weeks</p>
                </div>
                <div>
                  <p style={{ fontWeight: 'bold' }}>Role</p>
                  <p>Programmer</p>
                </div>
              </div>
              {/*<img src={im3} className = "projto"/>*/}
              <div className="box">
                
                <div>
                  <div className="bmarg">
                    <p style={{ fontWeight: 'bold' }}>Goal</p>
                    <p>Create a personalized phonebook website with a login system.</p>
                  </div>
                  <div>
                    <p>                
                      Using py4web, these projects utilizes a combination of python and javascript 
                      to create dynamic websites.
                    </p>
                    <p>
                      I created a website with a login function. Users can add, edit, and delete 
                      their contacts and the contacts' phone numbers after logging in.
                    </p>
                  </div>
                </div>
              </div>
          </div>
          <img src={im1} className = "demoImage bmarg"/>
          
            
        </div>
        <footer className='Page-footer'></footer>
    </div>
  );
};
  
export default WebProject;