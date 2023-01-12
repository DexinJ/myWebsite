import React, { useEffect } from "react";
import Subheader from "../components/subHeader";
import "../App.css"
import "./page.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import im1 from './fielread-sticky-header-c.PNG'
import im2 from './fielread-multiselect-c.gif'

  
const Fileread = () => {
  useEffect(() => {
    document.title = 'Tony Jin: Fileread';
  }, []);
  return (
    <div className="Page">
        <Subheader/>
        <div className="Page-body">
          <h1>
            <p>Fileread AI</p>
          </h1>
          
          <img src={im1} className = "demoImage"/> 
          <div className="twintext">
            <div>
              <p style={{ fontWeight: 'bold' }}>
                Goal
              </p>
              <p className="Parallel-text">
              Implement a sticky header and bulk editing function for a documents table
              </p>
              <p style={{ fontWeight: 'bold' }}> 
                Role
              </p>
              <p>
                Programmer
              </p>
            </div>
            <div>
              <p>
                For this project, I reported to a manager who assigned various tasks for me to tackle.
              </p>
              <p>
                I implemented a fixed header for a dynamically generated table so the table header stays
                on the top as the table was scrolled for better space management.
              </p>
              <p>
                I also implemented a multi-selection feature by Shift + Click. Using this feature, 
                a user can select everything between two items on the table by selecting one item, 
                then holding shift and selecting the other item. These selections will add to any 
                other selections the user has already made and will not replace them, making it a 
                useful tool for selecting continuous items on the table.
              </p>
              <p>
                After finishing each task, I demonstrated my implementations to my manager.
              </p>
            </div>
          </div>
          <img src={im2} className = "demoImage"/>
          
          
        </div>
        <footer className='Page-footer'></footer>
    </div>
  );
};
  
export default Fileread;