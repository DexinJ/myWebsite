import React from "react";
import styles from "./EducationItem.module.css";

const EducationItem = ({ institution, degree, period }) => {
  return (
    <article className={styles.educationItem} tabIndex="0">
      <div className={styles.header}>
        <div className={styles.circle} aria-hidden="true" />
        <h3 className={styles.institution}>{institution}</h3>
      </div>

      <div className={styles.details}>
        <p className={styles.degree}>
          <span className="visually-hidden">Degree: </span>
          {degree}
        </p>
        <p className={styles.period}>
          <span className="visually-hidden">Period: </span>
          {period}
        </p>
      </div>
    </article>
  );
};

export default EducationItem;
