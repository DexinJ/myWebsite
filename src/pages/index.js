import React from 'react';
import Profile from '../components/Profile';
import Project from '../components/Project';
import p1 from'../1c.png';
import data from'../data';
import p2 from './pacman1.png'
import p3 from './website3.png'

const Home = () => {
  return (
    <div className="App">
        <header className="App-header">
        <Profile/>
        </header>
        <div className = "rowt">
              <Project cover = {p1} content = {data.p1} link = "/rage"/>
              <Project cover = {p2} content = {data.p2}link = "/AI"/>
              <Project cover = {p3} content = {data.p3}link = "/fileread"/>
        </div>
        <footer className='App-footer'></footer>
    </div> 
  );
};
  
export default Home;