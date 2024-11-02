import React, { useEffect } from "react";
import { images } from "../../../utils/constants";
const Rage = () => {
  const rage = images.rage;
  useEffect(() => {
    document.title = "Tony Jin: Platform Game";
  }, []);
  return (
    <div className="case__study">
      <h1 className="tmarg bmarg">
        <p>Platform Game Design</p>
      </h1>
      <div className="bmarg">
        <img src={rage.demo1} className="demoImage" />
      </div>
      <div className="twintext bmarg">
        <div className="bmarg">
          <div>
            <p style={{ fontWeight: "bold" }}>Timespan</p>

            <p>10 weeks</p>
          </div>
          <div>
            <p style={{ fontWeight: "bold" }}>Role</p>

            <p>Level designer, Programmer</p>
          </div>
          <div>
            <p style={{ fontWeight: "bold" }}>Team</p>

            <p>
              1 Artist,
              <br /> 2 Programmers including myself
            </p>
          </div>
        </div>
        <div>
          <img src={rage.demo2} className="demoImage" />
        </div>
      </div>
      <div className="twintexttwo bmarg">
        <div>
          <div className="bmarg">
            <p style={{ fontWeight: "bold" }}>Goal</p>

            <p>Create a platform game with phaser</p>
          </div>
          <div>
            <p style={{ fontWeight: "bold" }}>Process</p>
            <p>For this project, I teamed up with two other classmates.</p>
            <p>We decided to create a game with phaser for this project.</p>
            <p>
              After discussion, we decided to make a platformer, and I would be
              the level designer and programmer.
            </p>
          </div>
        </div>
        <div className="caption">
          <img src={rage.tileset} className="demoImage" />
          <p className="twincaption">
            The tile sheet. It is converted into a tile map and is the basis for
            this game's platforms.
          </p>
        </div>
      </div>
      <div className="bmarg">
        <p>
          I converted the images sent by our artist into tile maps and used
          these tiles to create the level.
        </p>

        <p>
          I also used javascript to program character movement, collision
          behavior, and more.
        </p>

        <p>
          After completing the game, we conducted playtest sessions where other
          classmates play-tested our game and gave feedback and suggestions,
          after which we adjusted our game accordingly.
        </p>
      </div>

      <a
        href="https://dexinjin.itch.io/rage"
        title="https://dexinjin.itch.io/rage"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h1 className="bmarg">Try the Game</h1>
      </a>
    </div>
  );
};

export default Rage;
