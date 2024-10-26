import React from "react";
import styles from "./PortfolioModal.module.css";

const PortfolioModal = ({ item, onClose }) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <div className={styles.scrollableContent}>
          <h2>{item.title}</h2>
          <img
            src={item.image}
            alt={item.title}
            className={styles.modalImage}
          />
          <p>
            <strong>Tag:</strong> {item.tag}
          </p>
          <p>
            <strong>Description:</strong> {item.description}
          </p>
          <p>
            <strong>Technologies:</strong> {item.technologies.join(", ")}
          </p>
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectLink}
            >
              View Project
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;
