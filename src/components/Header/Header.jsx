import React from "react";
import styles from "./Header.module.css";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import Button from "../Button/Button";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Navigation />
      <div className={styles.rightContent}>
        <ThemeToggle />
        <Button className={styles.resumeButton}>Resume</Button>
      </div>
    </header>
  );
};

export default Header;
