import { Link } from "react-router-dom";
import Img from "./new.png";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <div class="card text-center">
        <div class="card-header">50% Off Discount Limited Time Offer</div>
        <div class="card-body">
          <img
            className="hero"
            src={Img}
            alt="anytime"
            style={{ width: "100%" }}
          />
          <a
            href="tel:(1)(7702120143)"
            className="btn btn-dark btn-sm"
            tabindex="-1"
            role="button"
            aria-disabled="true"
          >
            Call
          </a>
          <Link
            to="/Contact"
            className="btn btn-dark btn-sm"
            tabindex="-1"
            role="button"
            aria-disabled="true"
          >
            Appointment
          </Link>
          <h5 class="card-title">Contact Us Anytime & We'll Be There In No Time.</h5>
          <p class="card-text">
            Here is why you should choose us...
          </p>
        </div>
        <div class="card-footer text-muted">We Are Here When You Need Us 24/7.</div>
      </div>
    </>
  );
};

export default Banner;
