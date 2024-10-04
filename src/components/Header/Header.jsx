import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import Button from "../Button/Button";

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [headerVisible, setHeaderVisible] = useState(true);

  useEffect(() => {
    const headerDiv = document.querySelector("header");
    const headerBottom = headerDiv.offsetTop + headerDiv.offsetHeight;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      console.log(
        prevScrollPos > currentScrollPos || currentScrollPos < headerBottom
      );
      if (prevScrollPos > currentScrollPos || currentScrollPos < headerBottom) {
        setHeaderVisible(true); // Show header
      } else {
        setHeaderVisible(false); // Hide header
      }

      setPrevScrollPos(currentScrollPos); // Update the previous scroll position
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up event listener on component unmount
    };
  }, [prevScrollPos]);

  return (
    <header
      className={`${styles.header} ${!headerVisible ? styles.hidden : ""}`}
    >
      <div className={styles.contents}>
        <Logo />
        <Navigation />
        <div className={styles.rightContent}>
          <ThemeToggle />
          <Button className={styles.resumeButton}>Resume</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
