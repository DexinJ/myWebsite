import React, { useState } from "react";
import styles from "./Experience.module.css";
import ExperienceItem from "./ExperienceItem";

const experienceData = [
  {
    company: "Slopedia",
    position: "Full-stack Developer",
    location: "Remote, USA",
    period: "Jan 2024 - Mar 2024",
    tags: ["React.js", "SQL"],
    responsibilities: [
      "Conducted code reviews via GitHub pull requests, ensuring code quality and adherence to best practices.",
      "Created responsive front-end solutions using React.js and Tailwind CSS, and actively participated in team meetings.",
    ],
  },
  {
    company: "Fileread AI",
    position: "Frontend Developer",
    location: "Los Angeles, USA",
    period: "Mar 2022 - Dec 2022",
    tags: ["React.js"],
    responsibilities: [
      "Designed and implemented responsive front-end components using React.js, collaborating closely with product management and engineering teams.",
      "Spearheaded significant improvements to user experience.",
    ],
  },
  {
    company: "Jisan Research Institute",
    position: "Swarm Engineering Researcher",
    location: "Los Angeles, USA",
    period: "Jun 2013 - Dec 2015",
    tags: ["C++", "Swarm Engineering"],
    responsibilities: [
      "Led a team in Swarm Robotics research, utilizing simulations to optimize strategies and designing swarm behaviors.",
      "Published and presented “Utilizing Abstract Phase Spaces in Swarm Design and Validation.” at the Sixth International Conference on Swarm Intelligence",
    ],
  },
];

const Experience = () => {
  const [activeCompany, setActiveCompany] = useState(experienceData[0].company);

  const handleCompanyClick = (company) => {
    setActiveCompany(company);
  };

  const handleKeyPress = (e, company) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleCompanyClick(company);
    }
  };

  const activeExperience = experienceData.find(
    (exp) => exp.company === activeCompany
  );

  const handleKeyboardNavigation = (e, index) => {
    const buttons = document.querySelectorAll(`.${styles.companyButton}`);
    const currentIndex = Array.from(buttons).findIndex(
      (button) => button.getAttribute("aria-selected") === "true"
    );

    switch (e.key) {
      case "ArrowDown":
      case "ArrowRight":
        e.preventDefault();
        if (currentIndex < buttons.length - 1) {
          const nextCompany = experienceData[currentIndex + 1].company;
          handleCompanyClick(nextCompany);
          buttons[currentIndex + 1].focus();
        }
        break;
      case "ArrowUp":
      case "ArrowLeft":
        e.preventDefault();
        if (currentIndex > 0) {
          const prevCompany = experienceData[currentIndex - 1].company;
          handleCompanyClick(prevCompany);
          buttons[currentIndex - 1].focus();
        }
        break;
      case "Home":
        e.preventDefault();
        const firstCompany = experienceData[0].company;
        handleCompanyClick(firstCompany);
        buttons[0].focus();
        break;
      case "End":
        e.preventDefault();
        const lastCompany = experienceData[experienceData.length - 1].company;
        handleCompanyClick(lastCompany);
        buttons[buttons.length - 1].focus();
        break;
      default:
        break;
    }
  };

  return (
    <section className={styles.experience} aria-labelledby="experience-heading">
      <div className={styles.header}>
        <div className={styles.aboveTitleLine} aria-hidden="true" />
        <p className={styles.aboveTitle} aria-hidden="true">
          career path
        </p>
      </div>

      <h2 id="experience-heading" className={styles.title}>
        Work Experiences
      </h2>

      <div className={styles.container}>
        <nav className={styles.sidebar} aria-label="Company navigation">
          <div
            className={styles.companyList}
            role="tablist"
            aria-label="Work experience by company"
          >
            {experienceData.map((exp, index) => (
              <button
                key={index}
                className={`${styles.companyButton} ${
                  activeCompany === exp.company ? styles.activeButton : ""
                }`}
                onClick={() => handleCompanyClick(exp.company)}
                onKeyPress={(e) => handleKeyPress(e, exp.company)}
                role="tab"
                aria-selected={activeCompany === exp.company}
                aria-controls={`panel-${exp.company.toLowerCase()}`}
                id={`tab-${exp.company.toLowerCase()}`}
                tabIndex={activeCompany === exp.company ? 0 : -1}
                onKeyDown={(e) => handleKeyboardNavigation(e, index)}
              >
                <span>{exp.company}</span>
                {activeCompany === exp.company && (
                  <img
                    src="/images/icons/right-arrow-svgrepo-com.svg"
                    alt=""
                    className={styles.companyIcon}
                    aria-hidden="true"
                  />
                )}
              </button>
            ))}
          </div>
        </nav>

        <div
          className={styles.content}
          role="tabpanel"
          id={`panel-${activeCompany.toLowerCase()}`}
          aria-labelledby={`tab-${activeCompany.toLowerCase()}`}
          tabIndex={0}
        >
          <ExperienceItem {...activeExperience} />
        </div>
      </div>
    </section>
  );
};

export default Experience;
