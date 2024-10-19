import React, { useEffect, useRef, useState } from "react";
import Banner from "./Banner/Banner";
import styles from "./Home.module.css"; // Import the CSS module
import { motion } from "framer-motion";

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
      <div className={styles.jumbotron} style={{ textAlign: "center" }}>
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
        >
          Our Services
        </motion.h1>

        <div className="row mt-4" ref={serviceRef}>
          {[
            "Residential Junk Removal",
            "Commercial Junk Removal",
            "Construction Debris Removal",
          ].map((service, index) => (
            <motion.div
              className={`col-md-4 mb-4 ${styles.cardContainer}`}
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className={styles.card}>
                <img
                  src={`path/to/${service.toLowerCase().replace(/ /g, "-")}.jpg`}
                  className={`${styles.cardImgTop} card-img-top`} // Use the new class for image
                  alt={service}
                />
                <div className="card-body">
                  <h5 className="card-title">{service}</h5>
                  <p className="card-text">
                    Detailed description of {service} to inform potential customers about the service.
                  </p>
                  <a href="/" className="btn btn-primary">
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
        >
          Local To You In Atlanta
        </motion.h1>
      </div>
    </>
  );
};

export default Home;
