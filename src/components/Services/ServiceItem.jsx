import React from "react";
import styles from "./ServiceItem.module.css";

const ServiceItem = ({ icon, title, description }) => {
  return (
    <article className={styles.serviceItem} tabIndex="0">
      <div className={styles.icon} aria-hidden="true">
        <img
          src={icon}
          alt=""
          className={styles.iconImage}
          aria-hidden="true"
        />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </article>
  );
};

export default ServiceItem;
