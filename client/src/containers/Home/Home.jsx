import React, { useEffect, useRef, useState } from "react";
import Banner from "./Banner/Banner";
import styles from "./Home.module.css"; // Import the CSS module
import { motion } from "framer-motion";
import Img1 from "./Img/bree1.jpg";
import Img2 from "./Img/bree2.jpg";
import Img3 from "./Img/bree3.jpg";
import Img4 from "./Img/bree4.jpg";
import Img5 from "./Img/mainImage.jpg";
import Img6 from "./Img/bottomImage.jpg";

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
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="lead"
            >
              Hassle-free junk removal at your convenience. We take care of it
              all, so you don't have to!
            </motion.p>
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

        <div>
          <motion.img
            src={Img5}
            className={`${styles.cardImgTop} card-img-top`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            alt="Main Junk Removal Image"
          />
        </div>

        <div className="row mt-4" ref={serviceRef}>
          {[
            { name: "Residential Junk Removal", image: Img1 },
            { name: "Commercial Junk Removal", image: Img2 },
            { name: "Construction Debris Removal", image: Img3 },
            { name: "Loved Ones' Estate Junk Removal", image: Img4 },
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
                  src={service.image}
                  className={`${styles.cardImgTop} card-img-top`}
                  alt={service.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{service.name}</h5>
                  <p className="card-text">
                    Need junk removed? Our {service.name} service is fast,
                    efficient, and affordable. Let us do the heavy lifting for
                    you!
                  </p>
                  <motion.a
                    href="/Service"
                    className={`${styles.btn} btn`}
                    whileHover={{ scale: 1.1 }}
                  >
                    Learn More
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div>
          <motion.img
            src={Img6}
            className={`${styles.cardImgTop} card-img-top`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            alt="Bottom Junk Removal Image"
          />
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

        <p className="lead mt-4">Follow these simple steps to get started:</p>
        <ul className="list-unstyled">
          <motion.li
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <strong>1. Schedule a Pickup:</strong> Book a time that works for
            you, and we'll be there.
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <strong>2. Get a Free Estimate:</strong> No hidden fees—just honest,
            transparent pricing.
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <strong>3. We Handle the Rest!</strong> We'll remove the junk and
            leave your space clean and clear.
          </motion.li>
        </ul>
      </div>

      <div className="container my-5">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={styles.sectionTitle}
        >
          Local to You in Atlanta
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="lead"
        >
          We proudly serve the Atlanta metro area. Wherever you are, we’ll come
          to you!
        </motion.p>
      </div>
    </>
  );
};

export default Home;
