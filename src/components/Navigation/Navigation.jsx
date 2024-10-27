import React from "react";
import styles from "./Navigation.module.css";

const Navigation = ({ onItemClick, scrollToSection }) => {
  const handleClick = (sectionId) => {
    if (typeof scrollToSection === "function") {
      scrollToSection(sectionId);
      onItemClick();
    } else {
      console.error("scrollToSection is not a function");
    }
  };

  return (
    <nav className={styles.navigation}>
      <button className={styles.navButton} onClick={() => handleClick("hero")}>
        Home
      </button>
      <button
        className={styles.navButton}
        onClick={() => handleClick("services")}
      >
        Services
      </button>
      <button
        className={styles.navButton}
        onClick={() => handleClick("portfolio")}
      >
        Projects
      </button>
      <button
        className={styles.navButton}
        onClick={() => handleClick("experience")}
      >
        Experience
      </button>
      <button
        className={styles.navButton}
        onClick={() => handleClick("education")}
      >
        Education
      </button>
      <button
        className={styles.navButton}
        onClick={() => handleClick("contact")}
      >
        Contact
      </button>
    </nav>
  );
};

export default React.memo(Navigation);
