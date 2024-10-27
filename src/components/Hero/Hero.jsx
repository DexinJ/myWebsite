import React from "react";
import styles from "./Hero.module.css";
import { useTheme } from "../../utils/ThemeContext";

const Hero = () => {
  const { isDarkMode } = useTheme();

  const skillIcons = [
    {
      name: "JavaScript",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "React",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Node.js",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Python",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "HTML5",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "TypeScript",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "Git",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "MongoDB",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "PostgreSQL",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "C++",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    },
    {
      name: "C",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    },
    {
      name: "Java",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    // Add more skill icons as needed
  ];

  return (
    <section className={`${styles.hero} ${isDarkMode ? styles.darkMode : ""}`}>
      <div className={styles.content}>
        <p className={styles.aboveTitle}>HI, I'M</p>
        <h1 className={styles.name}>
          Tony <span className={styles.highlight}>Jin.</span>
        </h1>
        <p className={styles.description}>
          I am a full-stack engineer focused on building creative and
          user-friendly software experiences.
        </p>
        <div className={styles.skillIcons}>
          {skillIcons.map((skill, index) => (
            <img
              key={index}
              src={skill.src}
              alt={`${skill.name} icon`}
              className={styles.skillIcon}
              title={skill.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
