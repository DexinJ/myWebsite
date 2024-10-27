import React from "react";
import styles from "./Experience.module.css";
import ExperienceItem from "./ExperienceItem";
import { useState } from "react";

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

  const activeExperience = experienceData.find(
    (exp) => exp.company === activeCompany
  );

  return (
    <section className={styles.experience}>
      <div className={styles.header}>
        <div className={styles.aboveTitleLine} />
        <p className={styles.aboveTitle}>career path</p>
      </div>
      <h2 className={styles.title}>Work Experiences</h2>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <div className={styles.companyList}>
            {experienceData.map((exp, index) => (
              <button
                key={index}
                className={`${styles.companyButton} ${
                  activeCompany === exp.company ? styles.activeButton : ""
                }`}
                onClick={() => handleCompanyClick(exp.company)}
              >
                {exp.company}
                {activeCompany === exp.company && (
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/cca51eb5c9fbc81de644342e432b34aca3567585850ba65854afcd26eca24d9d?placeholderIfAbsent=true&apiKey=f68351809d1b498a88d39fd40ad3ba29"
                    alt=""
                    className={styles.companyIcon}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
        <div className={styles.content}>
          <ExperienceItem {...activeExperience} />
        </div>
      </div>
    </section>
  );
};

export default Experience;
