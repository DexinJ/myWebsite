import React, { useEffect } from "react";
import Subheader from "../components/subHeader";
import "../App.css"
import "./page.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import im1 from './mainmenu.png'
import im3 from'./1c.png';
import im4 from './tileset.png'
import'../components/Project.css'
  

const Rage = () => {
  useEffect(() => {
    document.title = 'Tony Jin: Platform Game';
  }, []);
  return (
    <div className="Page">
        <Subheader/>
        <div className="Page-body">
        
          <h1>
            <p>Platform Game Design</p>
          </h1>
          <div className="spacer">
            <img src={im1} className = "demoImage"/>
          </div>
          <div className="twintext">
            <div>
              <p style={{ fontWeight: 'bold' }}>Goal</p>
              
              <p>Create a platform game with phaser</p>
              
              <p style={{ fontWeight: 'bold' }}>Role</p>
              
              <p>Level designer and Programmer</p>
              
              <p style={{ fontWeight: 'bold' }}>Team</p>

              <p>
                1 Artist, 2 programmers including myself
              </p>
            </div>
            <div>
            
            <img src={im3} className = "demoImage"/>
            </div>
          </div>
          <div className="twintexttwo">  
            <div>
                <p>
                  For this project, I teamed up with two other classmates.
                </p>
                <p>
                  We decided to create a game with phaser for this project.
                </p> 
                <p>
                  After discussion, we decided to make a platformer, and I would be the level designer and programmer.
              </p>
            </div>        
            <div className="caption">
              <img src={im4} className = "demoImage"/>
              <p className="twincaption">The tile sheet, this will be converted into a tile map and be the bases for all of the platforms in the game.</p>
            </div>
          </div>
            <div>             
              <p> 
                I converted the images sent by our artist into tile maps and used these tiles to create the level.
              </p>
            
              <p> 
                I also used javascript to program character movement, collision behavior, and more.
              </p>
            
              
              <p>
                After completing the game, we conducted playtest sessions where other classmates play-tested 
                our game and gave feedback and suggestions, after which we adjusted our game accordingly.
              </p>
            </div>
            
          <a href="https://dexinjin.itch.io/rage" title="https://dexinjin.itch.io/rage" target="_blank" rel="noopener noreferrer">
            <h1>Try the Game</h1>
          </a>
        </div>
        <footer className='Page-footer'></footer>
      </div>
  );
};

export default Rage;