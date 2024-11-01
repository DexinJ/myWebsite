import React from "react";
import styles from "./EducationItem.module.css";

const EducationItem = ({ institution, degrees, period }) => {
  return (
    <article className={styles.educationItem} tabIndex="0">
      <div className={styles.header}>
        <div className={styles.circle} aria-hidden="true" />
        <h3 className={styles.institution}>{institution}</h3>
      </div>

      <div className={styles.details}>
        <div className={styles.degreeList}>
          <span className="visually-hidden">Degrees: </span>
          {degrees.map((degree, index) => (
            <p key={index} className={styles.degree}>
              {degree}
            </p>
          ))}
        </div>
        <p className={styles.period}>
          <span className="visually-hidden">Period: </span>
          {period}
        </p>
      </div>
    </article>
  );
};

export default EducationItem;
