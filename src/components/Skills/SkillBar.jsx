import React from "react";
import styles from "./SkillBar.module.css";

const SkillBar = ({ name, percentage }) => {
  return (
    <div className={styles.skillBar}>
      <label className={styles.label}>{name}</label>
      <div className={styles.barContainer}>
        <div className={styles.bar} style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
};

export default SkillBar;
