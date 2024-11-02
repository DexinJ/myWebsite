import React from "react";
import styles from "./Skills.module.css";
import SkillBar from "./SkillBar";

const skillsData = [
  { name: "React", percentage: 100 },
  { name: "Python", percentage: 100 },
  { name: "SQL", percentage: 100 },
  { name: "Data Visulization", percentage: 100 },
];

const Skills = () => {
  return (
    <section className={styles.skills} aria-labelledby="skills-title">
      <h2 id="skills-title" className="visually-hidden">
        Technical Skills
      </h2>
      <p className={styles.description} role="doc-subtitle">
        I have spent over five years continuously expanding my knowledge in
        front-end, back-end, data analysis, and machine learning, while
        experimenting with new technologies and frameworks. Here you can see a
        summary of my skills.
      </p>
      <div role="list" aria-label="Skills list" className={styles.skillsList}>
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
