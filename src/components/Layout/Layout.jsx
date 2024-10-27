import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.css";
import { useTheme } from "../../utils/ThemeContext";

const Layout = ({ children, scrollToSection }) => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`${styles.layout} ${isDarkMode ? styles.darkMode : ""}`}>
      <Header scrollToSection={scrollToSection} />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
