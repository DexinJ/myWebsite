import React from 'react';
import photo from './head.jpg';
import './Profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'

function Profile() {
    const name = <span style={{color : 'white'}}>Tony Jin</span>
    return(
    <div className='container'>
      <img src={photo} style={{ borderRadius: '50%', display: "block" }} className="photo" alt="photo" />
      <p style={{ fontSize: 30, color : 'grey'}}>
        Hello, I am {name}</p>
        <p style={{ fontSize: 30, color : 'grey'}}>I am a software engineer specialized in <span style={{color : 'white'}}>Python, C++, Java, and React.js</span>
      </p>
        <div className='icodiv'>
        <a className='ico' href='https://www.linkedin.com/in/dexin-jin/'><FontAwesomeIcon icon={faLinkedin} size="xl"/></a>
        <a className='ico' href='https://github.com/DexinJ'><FontAwesomeIcon icon={faGithub} size="xl"/></a>
        <a className='ico' href='mailto:jindexin6@gmail.com'><FontAwesomeIcon icon={faEnvelope} size="xl"/></a>
        </div>
    </div>

    )
}

export default Profile