import React, { useState, useEffect, useRef } from "react";
import styles from "./Header.module.css";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import Button from "../Button/Button";
import { useTheme } from "../../utils/ThemeContext";

const Header = ({ scrollToSection }) => {
  const { isDarkMode } = useTheme();
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

  const menuRef = useRef(null);

  useEffect(() => {
    const headerDiv = document.querySelector("header");
    const headerBottom = headerDiv.offsetTop + headerDiv.offsetHeight;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (!isMenuOpen) {
        if (
          prevScrollPos > currentScrollPos ||
          currentScrollPos < headerBottom
        ) {
          setHeaderVisible(true); // Show header
        } else {
          setHeaderVisible(false); // Hide header
        }
      }
      setPrevScrollPos(currentScrollPos); // Update the previous scroll position
    };

    window.addEventListener("scroll", handleScroll);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    window.addEventListener("resize", handleResize);

    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.classList.contains(styles.menuButton)
      ) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [prevScrollPos, isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    setHeaderVisible(true); // Ensure header is visible when menu is toggled
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleMenuItemClick = () => {
    closeMenu();
    // Add any additional logic for menu item clicks
  };

  return (
    <header
      className={`${styles.header} ${!headerVisible ? styles.hidden : ""} ${
        isDarkMode ? styles.darkMode : ""
      }`}
    >
      <div className={styles.contents}>
        <Logo />
        {isMobile ? (
          <>
            <Button className={styles.menuButton} onClick={toggleMenu}>
              <img
                src={
                  isDarkMode
                    ? "/images/icons/white-menu-svgrepo-com.svg"
                    : "/images/icons/menu-svgrepo-com.svg"
                }
                alt="Menu"
                className={styles.menuIcon}
              />
            </Button>
            <div
              className={`${styles.mobileMenu} ${
                isMenuOpen ? styles.open : ""
              }`}
              ref={menuRef}
            >
              <ThemeToggle />
              <Navigation
                onItemClick={handleMenuItemClick}
                scrollToSection={scrollToSection}
              />
              <Button
                className={styles.resumeButton}
                onClick={handleMenuItemClick}
              >
                Resume
              </Button>
            </div>
          </>
        ) : (
          <>
            <Navigation
              onItemClick={handleMenuItemClick}
              scrollToSection={scrollToSection}
            />
            <div className={styles.rightContent}>
              <ThemeToggle />
              <Button className={styles.resumeButton}>Resume</Button>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
