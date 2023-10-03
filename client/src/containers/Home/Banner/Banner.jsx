import { Link } from "react-router-dom";
import Img from "./new.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="card text-center">
          <div className="card-header">50% Off Discount Limited Time Offer</div>
          <div className="card-body">
            <img
              classNameName="hero"
              src={Img}
              alt="anytime"
              style={{ width: "100%" }}
            />
            <a
              href="tel:(1)(7702120143)"
              classNameName="btn btn-dark btn-sm"
              tabindex="-1"
              role="button"
              aria-disabled="true"
            >
              Call
            </a>
            <Link
              to="/Contact"
              classNameName="btn btn-dark btn-sm"
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
      </div>
    </div>
  );
};

export default Banner;
