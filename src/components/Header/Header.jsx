import React, { useState, useEffect, useRef } from "react";
import styles from "./Header.module.css";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { useTheme } from "../../utils/ThemeContext";

const Header = ({ scrollToSection }) => {
  const { isDarkMode } = useTheme();
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 991);

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
      role="banner"
    >
      <div className={styles.contents}>
        <Logo />
        {isMobile ? (
          <>
            <button
              className={styles.menuButton}
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke={isDarkMode ? "#ffffff" : "#000000"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div
              className={`${styles.mobileMenu} ${
                isMenuOpen ? styles.open : ""
              }`}
              ref={menuRef}
              role="navigation"
              aria-label="Mobile navigation"
            >
              <ThemeToggle />
              <Navigation
                onItemClick={handleMenuItemClick}
                scrollToSection={scrollToSection}
              />
              <a
                href="/Resume/Tony_Jin_Resume.pdf"
                className={styles.resumeButton}
                onClick={handleMenuItemClick}
                aria-label="Download Resume"
              >
                Resume
              </a>
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
              <a
                href="/Resume/Tony_Jin_Resume.pdf"
                className={styles.resumeButton}
                aria-label="Download Resume"
                target="_blank"
              >
                Resume
              </a>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
