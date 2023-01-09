import React, { useEffect } from "react";
import Subheader from "../components/subHeader";
import "../App.css"
import "./page.css"

import im1 from './pacman1.png'
import im2 from './pacman2.png'
  
const AIproject = () => {
  useEffect(() => {
    document.title = 'Tony Jin: AI projects';
  }, []);
  return (
    <div className="Page">
        <Subheader/>
        <div className="Page-body">
        <h1>
            <p>AI Class projects</p>
            Goal
            </h1>
            <h2>
              <p>‎ ‎ ‎ ‎ Learn and practice multiple pathfinding and other AI algorithms</p>
              <p>‎ </p>
              <div className="textfold">  
                <p className="smalltext">These AI projects use the game Pacman to practice different AI and pathfinding techniques.                     
                I used python 3 to program searches like depth-first search. Breadth-first search, A* search, and more.
                I also use it to create different types of AI agents like knowledge-based agents and reactive agents.                
                </p>
                <img src={im1} className = "projto"/>
              </div> 
              <img src={im2} className = "projto"/>
              <p>At the end of the term, we pitted AIs against each other in a Pacman tournament to experience AIs in a competitive environment.</p>
          </h2>
        </div>
        <footer className='Page-footer'/>
    </div>
  );
};
  
export default AIproject;