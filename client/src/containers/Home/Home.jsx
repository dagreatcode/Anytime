import React, { useEffect, useRef, useState } from "react";
import Banner from "./Banner/Banner";
import styles from "./Home.module.css"; // Import the CSS module
import { motion } from "framer-motion";
import Img1 from "./Img/bree1.jpg";
import Img2 from "./Img/bree2.jpg";
import Img3 from "./Img/bree3.jpg";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const serviceRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once the component is visible
        }
      });
    });

    const currentRef = serviceRef.current; // Store the current ref in a variable
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <>
      <Banner />
      <div className={styles.jumbotron}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="display-4">Junk Removal & Hauling Services</h1>
          </motion.div>
        </div>
      </div>

      <div className="container my-5">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={styles.sectionTitle}
        >
          Our Services
        </motion.h1>

        <div className="row mt-4" ref={serviceRef}>
          {[{ name: "Residential Junk Removal", image: Img1 },
            { name: "Commercial Junk Removal", image: Img2 },
            { name: "Construction Debris Removal", image: Img3 }].map((service, index) => (
              <motion.div
                className={`col-md-4 mb-4 ${styles.cardContainer}`}
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className={styles.card}>
                  <img
                    src={service.image}
                    className={`${styles.cardImgTop} card-img-top`}
                    alt={service.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{service.name}</h5>
                    <p className="card-text">
                      Detailed description of {service.name} to inform potential customers about the service.
                    </p>
                    <a href="/Service" className={`${styles.btn} btn`}>
                      Learn More
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>

      <div className="container my-5">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={styles.sectionTitle}
        >
          How It Works
        </motion.h1>

        <p className="lead mt-4">Follow these simple steps:</p>
        <ul className="list-unstyled">
          <li>1. Schedule a pickup.</li>
          <li>2. Get a free estimate.</li>
          <li>3. We handle the rest!</li>
        </ul>
      </div>

      <div className="container my-5">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={styles.sectionTitle}
        >
          Local To You In Atlanta
        </motion.h1>
      </div>
    </>
  );
};

export default Home;
