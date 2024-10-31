import React from "react";
import styles from "./Skills.module.css";
import SkillBar from "./SkillBar";

const skillsData = [
  { name: "React", percentage: 67 },
  { name: "Python", percentage: 64 },
  { name: "C++", percentage: 62 },
  { name: "SQL", percentage: 60 },
  { name: "Data Visulization", percentage: 55 },
];

const Skills = () => {
  return (
    <section className={styles.skills} aria-labelledby="skills-title">
      <h2 id="skills-title" className="visually-hidden">
        Technical Skills
      </h2>
      <p className={styles.description} role="doc-subtitle">
        I have spent over five years continuously expanding my knowledge in
        front-end, back-end, and data analysis, while experimenting with new
        technologies and frameworks. Here you can see a summary of my skills.
      </p>
      <div role="list" aria-label="Skills list">
        {skillsData.map((skill, index) => (
          <div key={index} role="listitem">
            <SkillBar {...skill} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
