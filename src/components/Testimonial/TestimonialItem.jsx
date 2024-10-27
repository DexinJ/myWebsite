import React from "react";
import styles from "./TestimonialItem.module.css";

const TestimonialItem = ({ image, content, name, position }) => {
  return (
    <div className={styles.testimonialItem}>
      <img src={image} alt={name} className={styles.image} />
      <p className={styles.content}>{content}</p>
      <p className={styles.name}>{name}</p>
      <p className={styles.position}>{position}</p>
    </div>
  );
};

export default TestimonialItem;
