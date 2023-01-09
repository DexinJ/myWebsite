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
    const name = <span style={{color : 'white'}}>Tony Jin</span>
    return(
    <div className='container'>
      <img src={photo} style={{ borderRadius: '50%', display: "block" }} className="photo" alt="photo" />
      <p style={{ fontSize: 30, color : 'grey'}}>
        Hello, I am {name}</p>
        <p style={{ fontSize: 30, color : 'grey'}}>I am a software engineer specialized in <span style={{color : 'white'}}>Python, C++, Java, and React.js</span>
      </p>
      <p><a title="Resume" href = {PDF} className='link' target="_blank">Resume</a></p>
        <div className='icodiv'>
        <a className='ico' title="Linkedin" href='https://www.linkedin.com/in/dexin-jin/' target="_blank"><FontAwesomeIcon icon={faLinkedin} size="xl"/></a>
        <a className='ico' title="Github" href='https://github.com/DexinJ' target="_blank"><FontAwesomeIcon icon={faGithub} size="xl"/></a>
        <a className='ico' title="Email" href='mailto:jindexin6@gmail.com'><FontAwesomeIcon icon={faEnvelope} size="xl"/></a>
        </div>
    </div>

    )
}

export default Profile