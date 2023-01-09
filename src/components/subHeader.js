import React, { useEffect } from "react";
import './subHeader.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import PDF from'../pages/Tony_Jin_Resume.pdf';

function subHeader() {
    const name = <span style={{color : 'white'}}>Tony Jin</span>
    return(
        <header className="Sub-header">
            <div id="HASH">
                <div>
                    <a style={{ fontWeight: 'bold' }} title="Home" href ='/'  className='link'>{name}</a>
                </div>
                <div className="link-list">
                    <a className="list-item" title="Resume" href = {PDF} target="_blank">Resume</a>
                    <a className="list-item" title="Linkedin" href='https://www.linkedin.com/in/dexin-jin/' target="_blank">Linkedin</a>
                    <a className="list-item" title="Github" href='https://github.com/DexinJ' target="_blank">Github</a>
                    <a className="list-item" title="jindexin6@gmail.com" href='mailto:jindexin6@gmail.com'>Email</a>
                </div>            
            </div> 
        </header>
    
    

    )
}

export default subHeader