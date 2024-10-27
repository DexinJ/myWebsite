import React from "react";
import styles from "./ServiceItem.module.css";

const ServiceItem = ({ icon, title, description }) => {
  return (
    <div className={styles.serviceItem}>
      <div className={styles.icon}>
        <img src={icon} alt="" className={styles.iconImage} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default ServiceItem;
