import React from "react";
import Banner from "./Banner/Banner";
import "./Home.css";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="jumbotron" style={{ textAlign: "center" }}>
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

        <div className="row mt-4">
          {[
            "Residential Junk Removal",
            "Commercial Junk Removal",
            "Construction Debris Removal",
          ].map((service, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <motion.div
                className="card"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={`path/to/${service
                    .toLowerCase()
                    .replace(/ /g, "-")}.jpg`}
                  className="card-img-top"
                  alt={service}
                />
                <div className="card-body">
                  <h5 className="card-title">{service}</h5>
                  <p className="card-text">
                    Detailed description of {service} to inform potential
                    customers about the service.
                  </p>
                  <a href="/" className="btn btn-primary">
                    Learn More
                  </a>
                </div>
              </motion.div>
            </div>
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
