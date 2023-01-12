import React, { useEffect } from "react";
import Subheader from "../components/subHeader";
import "../App.css"
import "./page.css"
import "./aiproject.css"
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
          </h1>
            
              <div className="textfold"> 
              <div className="smallimage">
              <img src={im1} className = "demoImage"/>
              </div>
              <div>
              <p style={{ fontWeight: 'bold' }}>Goal</p>
            <p>Explore multiple pathfinding and AI algorithms in a game.</p>
            <p style={{ fontWeight: 'bold' }}> 
                Role
              </p>
              <p>
                Programmer
              </p>
              </div> 
              </div>
              <p>These AI projects use the game Pacman to practice different AI and pathfinding techniques.                     
                I used python 3 to program searches like depth-first search. Breadth-first search, A* search, and more.
                I also use it to create different types of AI agents like knowledge-based agents and reactive agents.                
                </p>
                <p>At the end of the term, we pitted AIs against each other in a Pacman tournament to experience AIs in a competitive environment.</p>
               <div className="caption">
              <img src={im2} className = "demoImage"/>
              <p>A visualization of Depth-First Search. Pacman (the yellow circle) is trying to find
                 a path to the food (the white dot) at the bottom left. The algorithm searches the 
                 map and highlights its search path in a gradient, where it transitions 
                 from red to white as the search progresses.
              </p>
              </div>
              
        </div>
        <footer className='Page-footer'/>
    </div>
  );
};
  
export default AIproject;