import React from "react";
import subHeader from "../components/subHeader";
import "../App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import im1 from './pacman1.png'
import im2 from './pacman2.png'
  
const AIproject = () => {
  return (
    <div>
        <header className="App-header">
        <div className='icodiv'>
        <a className='ico' href='/'><FontAwesomeIcon icon={faArrowLeft} size="2xl"/></a>
        </div>
        </header>
        <h1>
        These AI projects use the game Pacman to practice different AI and pathfinding techniques.        
        </h1> 
        <img src={im1} className = "projto"/>
        <h1>
          I used python 3 to program searches like depth-first search. Breadth-first search, A* search, and more.
          </h1>
        <h1>
        I also use it to create different types of AI agents like knowledged based agents and reactive agents. 
        </h1> 
        <img src={im2} className = "projto"/>
        <h1>
        At the end of the term, we pitted ais against each other in a Pacman tournament to expierence AIs in a competative enviroment.
        </h1>
      <footer className='App-footer'></footer>
    </div>
  );
};
  
export default AIproject;