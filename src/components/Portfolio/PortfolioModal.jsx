import React from "react";
import styles from "./PortfolioModal.module.css";

const PortfolioModal = ({ item, onClose }) => {
  const images = item.images || [item.image]; // Fallback to single image if images array not provided

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <div className={styles.scrollableContent}>
          <h2>{item.title}</h2>

          <div className={styles.imageMontage}>
            {images.map((image, index) => (
              <div key={index} className={styles.imageContainer}>
                <img
                  src={image}
                  alt={`${item.title} - ${index + 1}`}
                  className={styles.montageImage}
                />
              </div>
            ))}
          </div>

          <div className={styles.projectInfo}>
            <div className={styles.tags}>
              {item.tag.map((tag, index) => (
                <span key={index} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>

            <p className={styles.description}>{item.description}</p>

            <div className={styles.technologies}>
              <h3>Technologies Used:</h3>
              <div className={styles.techList}>
                {item.technologies.map((tech, index) => (
                  <span key={index} className={styles.techItem}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

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
    </div>
  );
};

export default PortfolioModal;
