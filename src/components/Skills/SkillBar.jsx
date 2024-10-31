import React from "react";
import styles from "./SkillBar.module.css";

const SkillBar = ({ name, percentage }) => {
  return (
    <div className={styles.skillBar}>
      <label className={styles.label} id={`skill-${name.toLowerCase()}`}>
        {name}
      </label>
      <div
        className={styles.barContainer}
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-labelledby={`skill-${name.toLowerCase()}`}
      >
        <div
          className={styles.bar}
          style={{ width: `${percentage}% ` }}
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

export default SkillBar;
