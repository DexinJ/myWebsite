import React, { useRef, useState, useEffect } from "react";
import styles from "./Portfolio.module.css";
import PortfolioItem from "./PortfolioItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PortfolioModal from "./PortfolioModal";

const portfolioData = [
  {
    title: "Recipe Searcher",
    tag: ["React.js", "CSS", "MongoDB", "Node.js", "API", "HTML"],
    image: "/images/RecipeSearcher/RecipeSearcher2.png",
  },
  {
    title: "TripleTen Projects",
    tag: ["React.js", "HTML", "CSS", "API", "MongoDB", "Node.js"],
    image: "/images/TripleTen/tripleten1.png",
  },
  {
    title: "What to Wear",
    tag: ["React.js", "HTML", "CSS", "API", "MongoDB", "Node.js"],
    image: `/images/wtwr/wtwr5.png`,
  },
  {
    title: "UC Projects",
    tag: ["HTML", "CSS"],
    image: "/images/Web/websitec.png",
  },
  {
    title: "Platform Game",
    tag: ["Phaser.js", "Javascript"],
    image: "/images/Rage/1c.png",
  },
  {
    title: "Fileread AI",
    tag: ["React.js", "HTML", "CSS", "API"],
    image: "/images/Fileread/fileread-sticky-header-c.png",
  },
];

const portfolioDetails = [
  {
    title: "Recipe Searcher",
    tag: ["React.js", "HTML", "CSS", "API", "MongoDB", "Node.js"],
    description:
      "A full-stack recipe search application that allows users to find and save their favorite recipes. Features include user authentication, recipe saving, and advanced search filters.",
    technologies: [
      "React.js",
      "HTML",
      "CSS",
      "RESTful API",
      "MongoDB",
      "Node.js",
      "Express.js",
    ],
    link: "https://github.com/DexinJ/recipe-searcher-frontend",
    images: [
      "/images/RecipeSearcher/RecipeSearcher1.png",
      "/images/RecipeSearcher/RecipeSearcher2.png",
      "/images/RecipeSearcher/RecipeSearcher3.png",
      "/images/RecipeSearcher/RecipeSearcher4.png",
    ],
  },
  {
    title: "TripleTen Projects",
    tag: ["React.js", "HTML", "CSS", "API", "MongoDB", "Node.js"],
    images: [
      "/images/TripleTen/tripleten1.png",
      "/images/TripleTen/tripleten2.png",
      "/images/TripleTen/tripleten3.png",
      "/images/TripleTen/tripleten5.png",
      "/images/TripleTen/tripleten4.png",
      "/images/TripleTen/tripleten6.png",
    ],
    description:
      "A comprehensive collection of projects completed during the TripleTen bootcamp, showcasing various web development skills and technologies.",
    technologies: [
      "React.js",
      "HTML",
      "CSS",
      "RESTful API",
      "MongoDB",
      "Node.js",
      "Express.js",
    ],
    link: "https://github.com/DexinJ/se_project_aroundtheus",
  },
  {
    title: "What to Wear",
    tag: ["React.js", "HTML", "CSS", "API", "MongoDB", "Node.js"],
    images: [
      `/images/wtwr/wtwr1.png`,
      `/images/wtwr/wtwr3.png`,
      `/images/wtwr/wtwr4.png`,
      `/images/wtwr/wtwr2.png`,
      `/images/wtwr/wtwr5.png`,
    ],
    description:
      "A weather-based clothing recommendation app that suggests appropriate outfits based on current weather conditions and user preferences.",
    technologies: [
      "React.js",
      "HTML",
      "CSS",
      "Weather API",
      "MongoDB",
      "Node.js",
    ],
    link: "https://github.com/DexinJ/se_project_react",
  },
  {
    title: "UC Projects",
    tag: ["HTML", "CSS"],
    images: [
      "/images/Web/website1.png",
      "/images/Web/website2.png",
      "/images/Web/website3.png",
    ],
    description:
      "A collection of web development projects completed during university coursework, demonstrating fundamental web design and development principles.",
    technologies: ["HTML5", "CSS3", "Responsive Design", "Web Accessibility"],
    link: "https://github.com/DexinJ/CSE183",
  },
  {
    title: "Platform Game",
    tag: ["Phaser.js", "Javascript"],
    images: [
      "/images/Rage/1c.png",
      "/images/Rage/groundEnemy.png",
      "/images/Rage/1.png",
      "/images/Rage/playerSheet.png",

      "/images/Rage/tileset.png",
    ],
    description:
      "An engaging platform game built using Phaser.js framework, featuring custom character animations, and physics-based gameplay.",
    technologies: ["Phaser.js", "JavaScript", "HTML5 Canvas", "Game Design"],
    link: "https://github.com/DexinJ/Rage",
  },
  {
    title: "Fileread AI",
    tag: ["React.js", "HTML", "CSS", "API"],
    images: [
      "/images/Fileread/fileread-sticky-header-cc.png",
      "/images/Fileread/fileread-sticky-header-c.png",
      "/images/Fileread/fileread-multiselect-c.gif",
    ],
    description:
      "Implemented a shift-select feature and a sticky header in FileRead AI to enhance user experience by allowing seamless multi-selection and improved navigation.",
    technologies: [
      "React.js",
      "HTML",
      "CSS",
      "AI API Integration",
      "File Processing",
    ],
    link: "https://fileread.com/",
  },
];

const Portfolio = () => {
  let sliderRef = useRef(null);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (selectedItem) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    // Cleanup function to remove the class when component unmounts
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [selectedItem]);

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const openModal = (item) => {
    const details = portfolioDetails.find(
      (detail) => detail.title === item.title
    );
    setSelectedItem(details);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
    centerMode: true,
    className: styles.slider,
    responsive: [
      {
        breakpoint: 1205,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0",
        },
      },
    ],
  };
  return (
    <section className={styles.portfolio} aria-label="Portfolio section">
      <div className={styles.header}>
        <div className={styles.aboveTitleLine} aria-hidden="true" />
        <p className={styles.aboveTitle}>MY WORKS</p>
      </div>
      <div className={styles.content}>
        <h2 className={styles.title} id="portfolio-title">
          Featured Portfolios
        </h2>
        <div
          className={styles.buttons}
          role="group"
          aria-label="Portfolio navigation"
        >
          <button
            className={`${styles.navButton} ${styles.navButtonLeft}`}
            onClick={previous}
            aria-label="Previous portfolio items"
          >
            <div
              className={`${styles.arrow} ${styles.left}`}
              aria-hidden="true"
            />
          </button>
          <button
            className={`${styles.navButton} ${styles.navButtonRight}`}
            onClick={next}
            aria-label="Next portfolio items"
          >
            <div
              className={`${styles.arrow} ${styles.right}`}
              aria-hidden="true"
            />
          </button>
        </div>
        <div className={styles.items} aria-labelledby="portfolio-title">
          <Slider
            ref={(slider) => {
              sliderRef = slider;
            }}
            {...settings}
          >
            {portfolioData.map((item, index) => (
              <div
                key={index}
                onClick={() => openModal(item)}
                role="button"
                tabIndex={0}
                aria-label={`View details for ${item.title}`}
                onKeyPress={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    openModal(item);
                  }
                }}
              >
                <PortfolioItem {...item} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {selectedItem && (
        <PortfolioModal item={selectedItem} onClose={closeModal} />
      )}
    </section>
  );
};

export default Portfolio;
