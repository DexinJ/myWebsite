import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialMedia}>
        <a href="https://www.linkedin.com/in/dexin-jin/" aria-label="LinkedIn">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/54c90fe26f3f9faad3ceebe410473315dd116124ba3b9191681d49a691189cd8?placeholderIfAbsent=true&apiKey=f68351809d1b498a88d39fd40ad3ba29"
            alt=""
            className={styles.socialIcon}
          />
        </a>
      </div>
      <p className={styles.copyright}>
        © 2024 - TOny<span className={styles.highlight}>Jin</span>
      </p>
    </footer>
  );
};

export default Footer;
