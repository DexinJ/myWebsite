import React from "react";
import styles from "./ThemeToggle.module.css";
import { useTheme } from "../../utils/ThemeContext";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      className={`${styles.themeToggle} ${isDarkMode ? styles.darkMode : ""}`}
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <img
        src={
          isDarkMode
            ? "/images/icons/sun-2-svgrepo-com.svg"
            : "/images/icons/moon-svgrepo-com.svg"
        }
        alt=""
        className={styles.toggleIcon}
      />
    </button>
  );
};

export default ThemeToggle;
