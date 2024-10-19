import { Link } from "react-router-dom";
import Img from "./new.png";
import styles from "./Banner.module.css"; // Use CSS modules for scoped styles
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <motion.div
        className={`card text-center ${styles.card}`}
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.cardHeader}>
          50% Off Discount Limited Time Offer
        </div>

        <div className={styles.cardBody}>
          <img
            className={styles.hero}
            src={Img}
            alt="anytime"
            style={{ width: "100%", borderRadius: "10px" }}
          />
          <div className={styles.buttonGroup}>
            <a
              href="tel:(1)(7702120143)"
              className={`btn btn-lg ${styles.btn}`}
            >
              Call Now
            </a>
            <Link to="/Contact" className={`btn btn-lg ${styles.btn}`}>
              Appointment
            </Link>
          </div>
          <h5 className={styles.cardTitle}>
            Contact Us Anytime & We'll Be There In No Time.
          </h5>
          <p className={styles.cardText}>Here is why you should choose us...</p>
        </div>

        <div className={styles.cardFooter}>
          We Are Here When You Need Us 24/7.
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
