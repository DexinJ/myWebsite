import React, { Component } from "react";
import'./Project.css'
import VModal from "./VModal";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Project(props) {
    const [modalShow, setModalShow] = React.useState(false);
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
  
            <VModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            title = {props.content.title}
            date = {props.content.date}
            content = {props.content.content}
            image = {props.cover}
            />
      </div>
    );
}

export default Project