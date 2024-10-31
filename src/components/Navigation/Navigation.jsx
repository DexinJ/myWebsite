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
    <nav
      className={styles.navigation}
      role="navigation"
      aria-label="Main navigation"
    >
      <button
        className={styles.navButton}
        onClick={() => handleClick("hero")}
        aria-label="Go to Home section"
      >
        Home
      </button>
      <button
        className={styles.navButton}
        onClick={() => handleClick("services")}
        aria-label="Go to Services section"
      >
        Services
      </button>
      <button
        className={styles.navButton}
        onClick={() => handleClick("portfolio")}
        aria-label="Go to My Works section"
      >
        My Works
      </button>
      <button
        className={styles.navButton}
        onClick={() => handleClick("experience")}
        aria-label="Go to Experiences section"
      >
        Experiences
      </button>
      <button
        className={styles.navButton}
        onClick={() => handleClick("education")}
        aria-label="Go to Education section"
      >
        Education
      </button>
      <button
        className={styles.navButton}
        onClick={() => handleClick("contact")}
        aria-label="Go to Contact section"
      >
        Contact
      </button>
    </nav>
  );
};

export default React.memo(Navigation);
