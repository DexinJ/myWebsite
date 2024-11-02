import React from "react";
import styles from "./PortfolioModal.module.css";

const PortfolioModal = ({ item, onClose }) => {
  const images = item.images || [item.image];

  return (
    <div
      className={styles.modalOverlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>
        <div className={styles.scrollableContent}>
          <h2 id="modal-title">{item.title}</h2>

          <div
            className={styles.imageMontage}
            role="region"
            aria-label="Project images"
          >
            {images.map((image, index) => (
              <div key={index} className={styles.imageContainer}>
                <img
                  src={image}
                  alt={`${item.title} screenshot ${index + 1}`}
                  className={styles.montageImage}
                />
              </div>
            ))}
          </div>

          <div className={styles.projectInfo}>
            <div
              className={styles.tags}
              role="region"
              aria-label="Project tags"
            >
              {item.tag.map((tag, index) => (
                <span key={index} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>

            <p className={styles.description}>{item.description}</p>

            <div className={styles.technologies}>
              <h3 id="tech-list-title">Technologies Used:</h3>
              <div
                className={styles.techList}
                role="list"
                aria-labelledby="tech-list-title"
              >
                {item.technologies.map((tech, index) => (
                  <span key={index} className={styles.techItem} role="listitem">
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
                aria-label={`View ${item.title} project`}
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
