import React from "react";
import styles from "./PhoneMenu.module.css";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";

const PhoneMenu = () => {
  return (
    <div className={`${styles.phonemenu} ${!menuVisible ? styles.hidden : ""}`}>
      <div className={styles.contents}>
        <Logo />
        <Button className={styles.resumeButton}>Resume</Button>
      </div>
    </div>
  );
};

export default PhoneMenu;
