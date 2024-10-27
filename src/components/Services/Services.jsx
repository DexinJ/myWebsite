import React from "react";
import styles from "./Services.module.css";
import ServiceItem from "./ServiceItem";

const servicesData = [
  {
    icon: "/images/icons/layer-svgrepo-com.svg",
    title: "Application Development",
    description:
      "Standard designing, building, and implementing your applications with documentation.",
  },
  {
    icon: "/images/icons/globe-svgrepo-com.svg",
    title: "Web Development",
    description:
      "Create and maintain your websites and also take care of its performance and traffic capacity.",
  },
  {
    icon: "/images/icons/bar-chart-5-svgrepo-com.svg",
    title: "AI & Data Analytics",
    description:
      "AI-powered analysis, interpretation, and visualization of datasets with accuracy and scalability.",
  },
];

const Services = () => {
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.aboveTitleLine} />
          <p className={styles.aboveTitle}>SERVICES</p>
        </div>
        <h2 className={styles.title}>Specialized in</h2>
        <div className={styles.items}>
          {servicesData.map((service, index) => (
            <ServiceItem key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
