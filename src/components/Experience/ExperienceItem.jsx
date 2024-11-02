import React from "react";
import styles from "./ExperienceItem.module.css";

const ExperienceItem = ({
  company,
  position,
  location,
  period,
  tags,
  responsibilities,
}) => {
  return (
    <article className={styles.experienceItem}>
      <header>
        <h3 className={styles.position}>
          <span>{position}</span>{" "}
          <span className={styles.company}>{company}</span>
        </h3>

        <div className={styles.metadata}>
          <p className={styles.location}>
            <span className="visually-hidden">Location: </span>
            {location}
          </p>
          <p className={styles.period}>
            <span className="visually-hidden">Period: </span>
            {period}
          </p>
        </div>

        <div className={styles.tags} role="list" aria-label="Technologies used">
          {tags.map((tag, index) => (
            <span key={index} className={styles.tag} role="listitem">
              {tag}
            </span>
          ))}
        </div>
      </header>

      <hr className={styles.divider} aria-hidden="true" />

      <div className={styles.responsibilitiesContainer}>
        <h4 className="visually-hidden">Responsibilities</h4>
        <ul
          className={styles.responsibilities}
          aria-label="Job responsibilities"
        >
          {responsibilities.map((responsibility, index) => (
            <li key={index} className={styles.responsibilityItem}>
              <div className={styles.bullet} aria-hidden="true" />
              {responsibility}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceItem;
