import React from "react";
import Images from "./Images.jsx"; // Assuming Images component showcases images of services
import "./Profile.css"; // Create a CSS file for styles

const Profile = () => {
  return (
    <>
      <div className="container my-5">
        <h1 className="display-4 text-center mb-4">Our Services</h1>

        <div className="text-center mb-4">
          <p className="lead">
            We provide a range of junk removal services tailored to your needs.
          </p>
        </div>

        <Images className="service-images" />

        <h2 className="my-4">Service Details</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="service-card">
              <h3>Residential Junk Removal</h3>
              <p>
                We help you declutter your home, from old furniture to yard
                waste.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-card">
              <h3>Commercial Junk Removal</h3>
              <p>
                Efficient junk removal services for offices, retail spaces, and
                construction sites.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-card">
              <h3>Eco-Friendly Disposal</h3>
              <p>
                We prioritize recycling and donating items whenever possible to
                reduce waste.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
