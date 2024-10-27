import React from "react";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/51301a574a763bff0b55c46263777e105738af271b59d1db7ac49b55459c789a?placeholderIfAbsent=true&apiKey=f68351809d1b498a88d39fd40ad3ba29"
        alt="Logo icon"
        className={styles.logoIcon}
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/494ece1d7a5fc3c65603424a913f7c8cd6934e435ead9d1e7defd73a1b2daeb9?placeholderIfAbsent=true&apiKey=f68351809d1b498a88d39fd40ad3ba29"
        alt="Logo text"
        className={styles.logoText}
      />
    </div>
  );
};

export default Logo;
