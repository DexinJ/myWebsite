import React from "react";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <section className={styles.contactForm}>
      <form className={styles.form}>
        <input
          type="text"
          placeholder="Name"
          className={styles.input}
          aria-label="Name"
        />
        <input
          type="email"
          placeholder="Email"
          className={styles.input}
          aria-label="Email"
        />
        <textarea
          placeholder="Message"
          className={styles.textarea}
          aria-label="Message"
        ></textarea>
        <button type="submit" className={styles.submitButton}>
          Send Message
        </button>
      </form>
      <div className={styles.contactInfo}>
        <div className={styles.contactList}>
          <div className={styles.infoItem}>
            <div className={styles.icon}>
              <img
                src="/images/icons/phone-calling-svgrepo-com.svg"
                alt=""
                className={styles.iconImage}
              />
            </div>
            <div className={styles.infoContent}>
              <h3 className={styles.infoTitle}>Phone</h3>
              <p className={styles.infoText}>(818) 614-8868</p>
            </div>
          </div>
          <div className={styles.infoItem}>
            <div className={styles.icon}>
              <img
                src="/images/icons/mail-svgrepo-com.svg"
                alt=""
                className={styles.iconImage}
              />
            </div>
            <div className={styles.infoContent}>
              <h3 className={styles.infoTitle}>E-Mail</h3>
              <p className={styles.infoText}>jindexin6@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
