import { Link } from "react-router-dom";
import Img from "./new.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="card text-center"           style={{ backgroundColor: "#e1f2ea",}}>
      <div className="card-header">50% Off Discount Limited Time Offer</div>
      <div className="card-body">
        <img
          className="hero"
          src={Img}
          alt="anytime"
          style={{ width: "100%" }}
        />
        <a
          href="tel:(1)(7702120143)"
          className="btn btn-lg"
          style={{ backgroundColor: "#75ba43", width: "auto" }}
          tabindex="-1"
          role="button"
          aria-disabled="true"
        >
          Call Now
        </a>
        <Link
          to="/Contact"
          className="btn btn-lg"
          style={{ backgroundColor: "#75ba43", width: "auto" }}
          tabindex="-1"
          role="button"
          aria-disabled="true"
        >
          Appointment
        </Link>
        <h5 className="card-title">
          Contact Us Anytime & We'll Be There In No Time.
        </h5>
        <p className="card-text">Here is why you should choose us...</p>
      </div>
      <div className="card-footer text-muted">
        We Are Here When You Need Us 24/7.
      </div>
    </div>
  );
};

export default Banner;
