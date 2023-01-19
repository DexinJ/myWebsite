import React from 'react';
import photo from './head.jpg';
import './Profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import PDF from'../pages/Tony_Jin_Resume.pdf';
import { Link } from 'react-router-dom';

function Profile() {
    const name = <span style={{color : '#ffffff'}}>Tony Jin</span>
    return(
    <div className='container'>
      <div className='bmarg htmarg'>
      <img src={photo} style={{ borderRadius: '50%', display: "block" }} className="photo" alt="photo" />
      </div>
      <div className='bmarg'>
        <p style={{ color : '#7F7F7F'}}>
          Hello, I am {name}<br/>I am a software engineer specialized in <span style={{color : '#ffffff'}}>Python, C++, Java, and React.js</span>
        </p>
      </div>
      <div className='bmarg'>
      <p><a title="Resume" href = {PDF} className='link botton' target="_blank">View Resume</a></p>
      </div>
        <div className='icodiv'>
        <a className='ico' title="Linkedin" href='https://www.linkedin.com/in/dexin-jin/' target="_blank"><FontAwesomeIcon icon={faLinkedin} size="xl"/></a>
        <a className='ico' title="Github" href='https://github.com/DexinJ' target="_blank"><FontAwesomeIcon icon={faGithub} size="xl"/></a>
        <a className='ico' title="Email" href='mailto:jindexin6@gmail.com'><FontAwesomeIcon icon={faEnvelope} size="xl"/></a>
        </div>
    </div>

    )
}

export default Profile