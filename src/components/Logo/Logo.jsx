import React from "react";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <button
      className={styles.logo}
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      aria-label="Tony Jin - Back to top"
    >
      <img
        src="/images/icons/icon.svg"
        alt="Logo icon"
        className={styles.logoIcon}
        aria-hidden="true"
      />
      <img
        src="/images/icons/Name.svg"
        alt="Logo text"
        className={styles.logoText}
        aria-hidden="true"
      />
    </button>
  );
};

export default Logo;
