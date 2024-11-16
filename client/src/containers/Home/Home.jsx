import React, { useEffect, useRef, useState } from "react";
import Banner from "./Banner/Banner";
import styles from "./Home.module.css"; // Import the CSS module
import { motion } from "framer-motion";
import Img1 from "./Img/bree1.jpg";
import Img2 from "./Img/bree2.jpg";
import Img3 from "./Img/bree3.jpg";
import Img4 from "./Img/bree4.jpg";
import OverImage from "./Img/mainImage.jpg";
import Img6 from "./Img/bottomImage.jpg";
import Img7 from "./Img/recycling.jpg";
import Img8 from "./Img/dim.jpg";
import Img9 from "./Img/junkcar.jpeg";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const serviceRef = useRef(null);
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [mapUrl, setMapUrl] = useState("");

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once the component is visible
        }
      });
    });

    const currentRef = serviceRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Fetch reviews from multiple APIs
  useEffect(() => {
    const fetchReviews = async () => {
      setIsLoading(true);
      try {
        // Fetch reviews from multiple sources
        const [
          googleReviews,
          yelpReviews,
          trustpilotReviews,
          facebookReviews,
          reviewtrackersReviews,
          bbbReviews,
        ] = await Promise.all([
          fetch(`${process.env.URL}/api/reviews/google`).then((res) =>
            res.json()
          ),
          fetch(`${process.env.URL}/api/reviews/yelp`).then((res) =>
            res.json()
          ),
          fetch(`${process.env.URL}/api/reviews/trustpilot`).then((res) =>
            res.json()
          ),
          fetch(`${process.env.URL}/api/reviews/facebook`).then((res) =>
            res.json()
          ),
          fetch(`${process.env.URL}/api/reviews/reviewtrackers`).then((res) =>
            res.json()
          ),
          fetch(`${process.env.URL}/api/reviews/bbb`).then((res) => res.json()),
        ]);

        // Combine all reviews into one array
        setReviews([
          ...googleReviews,
          ...yelpReviews,
          ...trustpilotReviews,
          ...facebookReviews,
          ...reviewtrackersReviews,
          ...bbbReviews,
        ]);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, []);

  // Fetch Google Maps Embed URL
  useEffect(() => {
    const fetchMapUrl = async () => {
      try {
        const response = await fetch(`${process.env.URL}/api/map`);
        const data = await response.json();
        setMapUrl(data.googleMapsLink); // Set the map iframe URL
      } catch (error) {
        console.error("Error fetching Google Map:", error);
      }
    };

    fetchMapUrl();
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
              all, so you don't have to! Whether it's clearing out your home,
              office, or construction site, we've got you covered.
            </motion.p>
            <p className="lead">
              No job is too big or small for our experienced team. We offer
              eco-friendly disposal, quick and reliable service, and unbeatable
              rates.
            </p>
            <a
              href="/Service"
              style={{ backgroundColor: "#f0522d" }}
              className="btn btn-primary"
            >
              Ready?
            </a>
          </motion.div>
        </div>
      </div>

      {/* Over Image Section */}
      <div className={`${styles.overImageContainer} position-relative`}>
        <img
          src={OverImage}
          alt="Over Im"
          className={`${styles.overImage} w-100`}
        />
        <div
          className={`${styles.overlayContent} position-absolute top-50 start-50 translate-middle`}
        >
          <h2 className="text-white">When are you free to start?</h2>
          <p className="text-white">
            Fast and easy junk removal at affordable prices. We handle the mess,
            you get back to living!
          </p>
          <a href="/Contact" className={`${styles.btn} btn btn-primary`}>
            Contact Us Now
          </a>
        </div>
      </div>

      {/* Services Section */}
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
          {[
            { name: "Residential Junk Removal", image: Img1 },
            { name: "Commercial Junk Removal", image: Img2 },
            { name: "Construction Debris Removal", image: Img3 },
            { name: "Recycling", image: Img7 },
            { name: "Dimolition", image: Img8 },
            { name: "Junk Car Removal", image: Img9 },
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
                    you! We specialize in clearing out homes, offices, and job
                    sites with the utmost care.
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
      </div>

      {/* What We Do Section */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={styles.sectionTitle}
      >
        What We Do
      </motion.h1>
      <div className="container my-5">
        <p>
          At our junk removal service, we pride ourselves on offering a variety
          of solutions tailored to your specific needs. From large estate
          cleanouts to small residential pickups, our team is equipped to handle
          any junk removal job. We understand the importance of clearing out
          space in your life, whether it's to declutter, remodel, or simply get
          rid of old items you no longer need.
        </p>
        <p>
          Our services include:
          <ul>
            <li>
              Home Junk Removal: Declutter your living space quickly and easily.
            </li>
            <li>
              Office Junk Removal: Clear out unwanted office furniture and
              equipment.
            </li>
            <li>
              Construction Debris Removal: We handle heavy debris removal,
              saving you time and hassle.
            </li>
            <li>
              Estate Junk Removal: Respectful and efficient handling of personal
              items from estates.
            </li>
          </ul>
        </p>
        <p>
          We pride ourselves on eco-friendly disposal practices, ensuring that
          as much of the junk we collect is recycled or donated. We aim to
          minimize the environmental impact of our work.
        </p>
      </div>

      {/* Main Image */}
      <div>
        <motion.img
          src={Img6}
          className={`${styles.cardImgTop} card-img-top`}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          alt="Main Junk Removal"
        />
      </div>

      {/* Reviews Section */}
      <div className="container my-5">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={styles.sectionTitle}
        >
          What Our Customers Are Saying
        </motion.h1>
        <div className="row mt-4">
          {isLoading ? (
            <p>Loading reviews...</p>
          ) : reviews.length > 0 ? (
            reviews.map((review, index) => (
              <motion.div
                className="col-md-4 mb-4"
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className={styles.card}>
                  <div className="card-body">
                    <h5 className="card-title">{review.author_name}</h5>
                    <p className="card-text">{review.text}</p>
                    <div className="d-flex justify-content-between">
                      <span>Rating: {review.rating}</span>
                      <span>
                        {new Date(review.time * 1000).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <p>No reviews found.</p>
          )}
        </div>
      </div>

      {/* Google Map Embed */}
      <div className="container my-5">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={styles.sectionTitle}
        >
          Find Us on the Map
        </motion.h1>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            className="embed-responsive-item"
            src={mapUrl}
            allowFullScreen
            title="Google Map of Atlanta"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Home;
