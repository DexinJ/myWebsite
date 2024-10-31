import React from "react";
import styles from "./PortfolioItem.module.css";

const PortfolioItem = ({ title, tag, image }) => {
  return (
    <div className={styles.portfolioItem}>
      <div className={styles.imageContainer}>
        <img src={image} alt="" className={styles.image} />
      </div>
      <div className={styles.details}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.tagContainer}>
          {tag.map((tags, index) => (
            <span key={index} className={styles.tag}>
              {tags}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
