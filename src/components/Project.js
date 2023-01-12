import React, { Component } from "react";
import'./Project.css'
import VModal from "./VModal";



function Project(props) {

    const [mouseHover, setMouseHover] = React.useState(false);
    const handleClick = (myLink) => {
        window.location.href=myLink;
    }
    return (
        <div className="article">
            <div className = "projtd">
                <img
                className = "projto"
                src = {props.cover}
                onClick={() => handleClick(props.link)}
                alt = "project"
                onMouseEnter={() => setMouseHover(true)}
                onMouseLeave = {() => setMouseHover(false)}
                />
                {mouseHover && <h1 className="header"
                onClick={() => handleClick(props.link)}
                onMouseEnter={() => setMouseHover(true)}
                onMouseLeave = {() => setMouseHover(false)}
                >
                    {props.content.title}
                </h1>}
            </div>
  

      </div>
    );
}

export default Project