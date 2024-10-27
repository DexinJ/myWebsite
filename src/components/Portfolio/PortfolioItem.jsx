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

          <img
            src={
              "https://cdn.builder.io/api/v1/image/assets/TEMP/dd2091c14ab2e8f79777f01bc51f84fd01c6eb3a92f235c48db99fbf48faab87?placeholderIfAbsent=true&apiKey=f68351809d1b498a88d39fd40ad3ba29"
            }
            alt=""
            className={styles.tagIcon}
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
