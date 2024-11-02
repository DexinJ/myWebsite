import React from "react";
import styles from "./Services.module.css";
import ServiceItem from "./ServiceItem";

const servicesData = [
  {
    icon: "/images/icons/layer-svgrepo-com.svg",
    title: "Application Development",
    description:
      "Designing, building, and implementing applications, complete with thorough documentation.",
  },
  {
    icon: "/images/icons/globe-svgrepo-com.svg",
    title: "Web Development",
    description:
      "Developing and maintaining websites, ensuring optimal performance and handling traffic capacity efficiently.",
  },
  {
    icon: "/images/icons/bar-chart-5-svgrepo-com.svg",
    title: "AI & Data Analytics",
    description:
      "Conducting AI-powered analysis, interpretation, and visualization of datasets, ensuring accuracy and scalability.",
  },
];

const Services = () => {
  return (
    <section className={styles.services} aria-labelledby="services-heading">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.aboveTitleLine} aria-hidden="true" />
          <p className={styles.aboveTitle} aria-hidden="true">
            SERVICES
          </p>
        </div>

        <h2 id="services-heading" className={styles.title}>
          Specialized in
        </h2>

        <div className={styles.items} role="list" aria-label="Services offered">
          {servicesData.map((service, index) => (
            <div key={index} role="listitem">
              <ServiceItem {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
