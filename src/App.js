import "./App.css";
import "./page.css";
import React, { useEffect } from "react";
import Rage from "./components/Rage/rage";
import AIproject from "./components/AIProject/aiproject";
import WebProject from "./components/WebProject/webProject";
import FSileread from "./components/Fileread/fileread";
import Main from "./components/Main/Main";
import Subheader from "./components/SubHeader/subHeader";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom";
import TripleTen from "./components/TripleTen/TripleTen";

function App() {
  useEffect(() => {
    document.title = "Tony Jin";
  }, []);
  return (
    <div className="Page">
      <Subheader />
      <div className="Page-body">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/rage">
            <Rage />
          </Route>
          <Route path="/AI">
            <AIproject />
          </Route>
          <Route path="/web">
            <WebProject />
          </Route>
          <Route path="/fileread">
            <FSileread />
          </Route>
          <Route path="/tripleten">
            <TripleTen />
          </Route>
        </Switch>
      </div>
      <footer className="Page-footer" />
    </div>
  );
}

export default App;
