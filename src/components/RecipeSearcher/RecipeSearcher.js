import React, { useEffect } from "react";
import { images } from "../../utils/constants";

const RecipeSearcher = () => {
  const RecipeSearcher = images.RecipeSearcher;
  useEffect(() => {
    document.title = "Tony Jin: Recipe Searcher";
  }, []);
  return (
    <div className="case__study">
      <h1 className="tmarg bmarg">
        <p>What's In My Fridge</p>
      </h1>

      <img src={RecipeSearcher.demo1} className="demoImage" />
      <div className="twintext tmarg bmarg  ">
        <div className="bmarg">
          <div className="bmarg">
            <p style={{ fontWeight: "bold" }}>Timespan</p>
            <p>5 weeks</p>
          </div>
          <div>
            <p style={{ fontWeight: "bold" }}>Role</p>
            <p>Full-Stack Developer / Designer</p>
          </div>
        </div>
        <div>
          <div className="bmarg">
            <p style={{ fontWeight: "bold" }}>Goal</p>
            <p>
              Design and create a website that searches aviliable recipes using
              a list of indigrients.
            </p>
          </div>
          <div className="wtwr__flex">
            <img src={RecipeSearcher.demo3} className="demoImage bmarg" />
          </div>
          <div>
            <p>
              For this project, I designed the website using Figma, then
              implemented it myself.
            </p>
            <p>
              This website searches recipes using a list of indigrients via the
              Spoontacular API. Users can view the recipe with links to the
              oprgin site and the Spoontacular site. A user can also save
              recipes that they like and view them in their collection.
            </p>
          </div>
        </div>
      </div>
      <img src={RecipeSearcher.demo4} className="demoImage bmarg" />
    </div>
  );
};

export default RecipeSearcher;
