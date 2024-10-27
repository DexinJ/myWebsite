import React from "react";
import styles from "./Testimonial.module.css";
import TestimonialItem from "./TestimonialItem";

const testimonialData = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4b10e9d5398a0b7858bcf6028157c94a482ba7be350d31781726aa598680ac3e?placeholderIfAbsent=true&apiKey=f68351809d1b498a88d39fd40ad3ba29",
    content:
      "We were very pleased to hear how you resolved our website's user interface issues and challenges.",
    name: "Amelia Miller",
    position: "Designer",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e1b10d2bd313bfff1dba874fbd291749b393e4377eb02c16a61fccf3134770a8?placeholderIfAbsent=true&apiKey=f68351809d1b498a88d39fd40ad3ba29",
    content:
      "I'm glad I decided to work with you. The project was delivered on time with all the requirements.",
    name: "James Delaney",
    position: "Developer",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/95707f506e4dc07278bccada580a5157fc41d3c2fb5a51e15372002fe225bd64?placeholderIfAbsent=true&apiKey=f68351809d1b498a88d39fd40ad3ba29",
    content:
      "The management of our projects was always faced with difficulties, but you handled these well.",
    name: "Isabella Bennett",
    position: "Manager",
  },
];

const Testimonial = () => {
  return (
    <section className={styles.testimonial}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.aboveTitleLine} />
          <p className={styles.aboveTitle}>MY CLIENTS</p>
        </div>
        <h2 className={styles.title}>Testimonials</h2>
        <div className={styles.items}>
          {testimonialData.map((item, index) => (
            <TestimonialItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
