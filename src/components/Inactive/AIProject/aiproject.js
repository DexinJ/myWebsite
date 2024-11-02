import React, { useEffect } from "react";
import "./aiproject.css";
import { images } from "../../../utils/constants";

const AIproject = () => {
  const ai = images.ai;
  useEffect(() => {
    document.title = "Tony Jin: AI projects";
  }, []);
  return (
    <div className="case__study">
      <h1 className="tmarg bmarg">
        <p>AI Projects</p>
      </h1>
      <div className="smallimage">
        <img src={ai.demo1} className="demoImage" />
      </div>
      <div className="twintext bmarg">
        <div>
          <div className="bmarg">
            <p style={{ fontWeight: "bold" }}>Timespan</p>
            <p>10 weeks</p>
          </div>
          <div>
            <p style={{ fontWeight: "bold" }}>Role</p>
            <p>Programmer</p>
          </div>
        </div>

        <div className="bmarg">
          <div className="bmarg">
            <p style={{ fontWeight: "bold" }}>Goal</p>
            <p>Explore multiple pathfinding and AI algorithms in a game.</p>
          </div>
          <p>
            These AI projects use the game Pacman to practice different AI and
            pathfinding techniques. I used python 3 to program searches like
            depth-first search. Breadth-first search, A* search, and more. I
            also use it to create different types of AI agents like
            knowledge-based agents and reactive agents.
          </p>
          <p>
            At the end of the term, we pitted AIs against each other in a Pacman
            tournament to experience AIs in a competitive environment.
          </p>
        </div>
      </div>
      <div className="caption bmarg">
        <img src={ai.demo2} className="demoImage" />
        <p>
          A visualization of Depth-First Search. Pacman (the yellow circle) is
          trying to find a path to the food (the white dot) at the bottom left.
          The algorithm searches the map and highlights its search path in a
          gradient, where it transitions from red to white as the search
          progresses.
        </p>
      </div>
    </div>
  );
};

export default AIproject;
