import React, { useEffect } from "react";
import subHeader from "../components/subHeader";
import "../App.css"
import "./page.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import im1 from './pacman1.png'
import im2 from './pacman2.png'
  
const AIproject = () => {
  useEffect(() => {
    document.title = 'Tony Jin: AI projects';
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
            <p>AI Class projects</p>
            Goal
            </h1>
            <h2>
              <p>Learn and practice multiple pathfinding and other AI algorithms</p>
              <div className="textfold">  
                <p className="smalltext">These AI projects use the game Pacman to practice different AI and pathfinding techniques.                     
                  I used python 3 to program searches like depth-first search. Breadth-first search, A* search, and more.
                  I also use it to create different types of AI agents like knowledged based agents and reactive agents.                
                </p>
                <img src={im1} className = "projto"/>
              </div> 
              <img src={im2} className = "projto"/>
              <p>At the end of the term, we pitted ais against each other in a Pacman tournament to expierence AIs in a competative enviroment.</p>
          </h2>
        </div>
        <footer className='Page-footer'/>
    </div>
  );
};
  
export default AIproject;