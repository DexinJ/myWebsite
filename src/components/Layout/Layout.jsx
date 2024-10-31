import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.css";
import { useTheme } from "../../utils/ThemeContext";

const Layout = ({ children, scrollToSection }) => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`${styles.layout} ${isDarkMode ? styles.darkMode : ""}`}>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header role="banner">
        <Header scrollToSection={scrollToSection} />
      </header>

      <main id="main-content" role="main" tabIndex="-1">
        {children}
      </main>

      <footer role="contentinfo">
        <Footer />
      </footer>

      <div
        aria-live="polite"
        className="visually-hidden"
        role="status"
        id="announcements"
      ></div>
    </div>
  );
};

export default Layout;
