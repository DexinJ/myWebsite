import React from 'react';
import photo from './head.jpg';
import './Profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'

function subHeader() {
    const name = <span style={{color : 'white'}}>Tony Jin</span>
    return(
    <div className="App">
        <header className="App-header">
        <div className='icodiv'>
        <a className='ico' href='mailto:jindexin6@gmail.com'><FontAwesomeIcon icon={faArrowLeft} size="2xl"/></a>
        </div>
        </header>
    </div> 
    

    )
}

export default subHeader