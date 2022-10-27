import React from "react";
import subHeader from "../components/subHeader";
import "../App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import im1 from './mainmenu.png'
import im2 from './groundEnemy.png'
import im3 from './playerSheet.png'
import im4 from './tileset.png'
import'../components/Project.css'
  
const Rage = () => {
  return (
    <div>
        <header className="App-header">
        <div className='icodiv'>
        <a className='ico' href='/'><FontAwesomeIcon icon={faArrowLeft} size="2xl"/></a>
        </div>
        </header>
        <img src={im1} className = "projto"/>
        <h1>
        This is a class project that required us to create a game with phaser.
        </h1> 
        <h1>
        For this project, I teamed up with two other classmates. 
        </h1> 
        <h1>
        After discussion, we had decided that we will make a platformer, and I will be the level designer and programmer.
        </h1>
        <img src={im4}/>
        <h1>
        I took the images sent by our artist and converted them into tile maps, and used these tiles to 
        create the level. 
        </h1> 
        <h1>
        I also used javascript to program character movement, collision behavior and more.
        </h1> 
        <img src={im3} className = "projto"/>
        <h1>
        After compliting the game, we conducted playtest sessions where other classmates playtest our games
        and gave feedback and suggestions, after which we adjust our game in accordingly.
        </h1>
    </div>
  );
};
  
export default Rage;