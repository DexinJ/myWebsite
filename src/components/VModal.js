import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import 'bootstrap/dist/css/bootstrap.min.css';

function NewlineText(props) {
    const text = props.text;
    const newText = text.split('\n').map(str => <p>{str}</p>);
    
    return newText;
}

function VModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>{props.date}</h5>
        <NewlineText text = {props.content}/>
        <img src={props.image}display= "block"
        height= "319px"
        width= "477px" 
        />
        <NewlineText text = {props.content}/>
        <NewlineText text = {props.content}/>
        <NewlineText text = {props.content}/>
        <NewlineText text = {props.content}/>
        <NewlineText text = {props.content}/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default VModal