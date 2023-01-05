
import './App.css';
import React from "react";
import Rage from './pages/rage';
import AIproject from './pages/aiproject';
import WebProject from './pages/webProject';
import FSileread from './pages/fileread';
import Home from './pages';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

function App() {
    return (
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/rage' element={<Rage/>} />
            <Route path='/AI' element={<AIproject/>} />
            <Route path='/web' element={<WebProject/>} />
            <Route path='/fileread' element={<FSileread/>} />
          </Routes>
        </Router>
      

    );
}

export default App;