import React from "react";
import styles from "./Skills.module.css";
import SkillBar from "./SkillBar";

const skillsData = [
  { name: "React", percentage: 67 },
  { name: "Angular", percentage: 52 },
  { name: "Javascript", percentage: 64 },
];

const Skills = () => {
  return (
    <section className={styles.skills}>
      <p className={styles.description}>
        For 5+ years, I have been continuously learning in the field of
        front-end and experimenting with new technologies and frameworks, and
        here you can see a summary of my skills.
      </p>
      {skillsData.map((skill, index) => (
        <SkillBar key={index} {...skill} />
      ))}
    </section>
  );
};

export default Skills;
