import React from "react";
import styles from "./EducationItem.module.css";

const EducationItem = ({ institution, degree, period }) => {
  return (
    <div className={styles.educationItem}>
      <div className={styles.header}>
        <div className={styles.circle} />
        <h3 className={styles.institution}>{institution}</h3>
      </div>
      <div className={styles.details}>
        <p className={styles.degree}>{degree}</p>
        <p className={styles.period}>{period}</p>
      </div>
    </div>
  );
};

export default EducationItem;
