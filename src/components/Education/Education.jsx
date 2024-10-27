import React from "react";
import styles from "./Education.module.css";
import EducationItem from "./EducationItem";

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
    <section className={styles.education}>
      <div className={styles.header}>
        <div className={styles.aboveTitleLine} />
        <p className={styles.aboveTitle}>LEARNING PATH</p>
      </div>
      <h2 className={styles.title}>Education & Skills</h2>
      <div className={styles.content}>
        <div className={styles.educationList}>
          {educationData.map((item, index) => (
            <EducationItem key={index} {...item} />
          ))}
        </div>
        {/* <div className={styles.timeline} /> */}
      </div>
    </section>
  );
};

export default Education;
