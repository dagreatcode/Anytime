import { Link } from "react-router-dom";
import Img from "./new.png";
import "./Banner.css";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="banner">
      <motion.div
        className="card text-center"
        style={{ backgroundColor: "#e1f2ea" }}
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="card-header">50% Off Discount Limited Time Offer</div>

        <div className="card-body">
          <img
            className="hero"
            src={Img}
            alt="anytime"
            style={{ width: "100%", borderRadius: "10px" }}
          />
          <div className="button-group">
            <a
              href="tel:(1)(7702120143)"
              className="btn btn-lg"
              style={{ backgroundColor: "#75ba43", width: "auto" }}
            >
              Call Now
            </a>
            <Link
              to="/Contact"
              className="btn btn-lg"
              style={{ backgroundColor: "#75ba43", width: "auto" }}
            >
              Appointment
            </Link>
          </div>
          <h5 className="card-title mt-3">
            Contact Us Anytime & We'll Be There In No Time.
          </h5>
          <p className="card-text">Here is why you should choose us...</p>
        </div>

        <div className="card-footer text-muted">
          We Are Here When You Need Us 24/7.
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
