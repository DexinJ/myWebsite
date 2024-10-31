import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialMedia}>
        <a href="https://www.linkedin.com/in/dexin-jin/" aria-label="LinkedIn">
          <img
            src="/images/icons/linkedin-svgrepo-com.svg"
            alt=""
            className={styles.socialIcon}
          />
        </a>
        <a href="https://github.com/DexinJ" aria-label="Github">
          <img
            src="/images/icons/github-142-svgrepo-com.svg"
            alt=""
            className={styles.socialIcon}
          />
        </a>
      </div>
      <p className={styles.copyright}>© 2024 - Tony Jin</p>
    </footer>
  );
};

export default Footer;
