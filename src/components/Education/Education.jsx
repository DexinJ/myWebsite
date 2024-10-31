import React from "react";
import styles from "./Education.module.css";
import EducationItem from "./EducationItem";
import Skills from "../Skills/Skills";

const educationData = [
  {
    institution: "TripleTen",
    degree: "Fullstack Development specialization",
    period: "2023 - 2024",
  },
  {
    institution: "UC Santa Cruz",
    degree: "Bachelor's degree - Computer Science",
    period: "2016 - 2022",
  },
];

const Education = () => {
  return (
    <section className={styles.education} aria-labelledby="education-heading">
      <div className={styles.header}>
        <div className={styles.aboveTitleLine} aria-hidden="true" />
        <p className={styles.aboveTitle} aria-hidden="true">
          LEARNING PATH
        </p>
      </div>

      <h2 id="education-heading" className={styles.title}>
        Education & Skills
      </h2>

      <div className={styles.content}>
        <div
          className={styles.educationList}
          role="list"
          aria-label="Education history"
        >
          {educationData.map((item, index) => (
            <div key={index} role="listitem">
              <EducationItem {...item} />
            </div>
          ))}
        </div>
        <Skills />
      </div>
    </section>
  );
};

export default Education;
