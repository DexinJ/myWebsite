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
    <div className={styles.experienceItem}>
      <h3 className={styles.position}>
        {position} <span className={styles.company}>{company}</span>
      </h3>
      <p className={styles.location}>{location}</p>
      <p className={styles.period}>{period}</p>
      <div className={styles.tags}>
        {tags.map((tag, index) => (
          <span key={index} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
      <hr className={styles.divider} />
      <ul className={styles.responsibilities}>
        {responsibilities.map((responsibility, index) => (
          <li key={index} className={styles.responsibilityItem}>
            <div className={styles.bullet} />
            {responsibility}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceItem;
