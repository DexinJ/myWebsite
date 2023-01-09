import React, { useEffect } from "react";
import subHeader from "../components/subHeader";
import "../App.css"
import "./page.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import im1 from './mainmenu.png'
import im2 from './groundEnemy.png'
import im3 from './playerSheet.png'
import im4 from './tileset.png'
import'../components/Project.css'
  

const Rage = () => {
  useEffect(() => {
    document.title = 'Tony Jin: Platform Game';
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
          <p>Platform Game Design</p>
          Goal
          </h1>
          <h2>
          ‎ ‎ ‎ ‎ Create a platform game with phaser
          </h2>
          <h1>
          Role
          </h1>
          <h2>
          ‎ ‎ ‎ ‎ Level designer and programmer
          </h2>
          <h1>
          Team
          </h1>
          <h2>
          <p>
          ‎ ‎ ‎ ‎ 1 Artist, 2 programmers including myself
          </p>
          <p>
          We decided to create a game with phaser for this project.
          </p> 
          <img src={im1} className = "projto"/>
            <p>
            For this project, I teamed up with two other classmates.
            </p>
          
          <p>
          After discussion, we decided that we will make a platformer, and I will be the level designer and programmer.
          </p>
          

          <img src={im4}/>
          <p> 
          I took the images sent by our artist and converted them into tile maps, and used these tiles to create the level.
          </p>
         
          <p> 
          I also used javascript to program character movement, collision behavior, and more.
          </p>
         
          <img src={im3} className = "projto"/>
          <p>
          After completing the game, we conducted playtest sessions where other classmates playtested 
          our games and gave feedback and suggestions, after which we adjusted our game accordingly.
          </p>
          </h2>
          <a href="https://dexinjin.itch.io/rage" target="_blank" rel="noopener noreferrer">
            <h1>Try the Game</h1>
          </a>
        </div>
        <footer className='Page-footer'></footer>
    </div>
  );
};

export default Rage;