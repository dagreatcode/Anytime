import React from "react";
import Images from "./Images.jsx"; // Assuming Images component showcases images of services
import "./Profile.css"; // Create a CSS file for styles

const Profile = () => {
  return (
    <>
      <div className="container my-5">
        {/* Page Title */}
        <h1 className="display-4 text-center mb-4 section-title">Our Services</h1>

        {/* Introductory Paragraph */}
        <div className="text-center mb-4">
          <p className="lead">
            We provide a range of junk removal services tailored to your needs. From residential decluttering to eco-friendly commercial solutions, we've got you covered!
          </p>
        </div>

        {/* Images Section */}
        <Images className="service-images mb-5" />

        {/* Service Details Section */}
        <h2 className="section-subtitle my-4">Service Details</h2>
        <div className="row">
          {/* Service Card 1 */}
          <div className="col-md-4">
            <div className="service-card">
              <h3>Residential Junk Removal</h3>
              <p>
                We help you declutter your home, from old furniture to yard waste. Our services are fast, friendly, and affordable.
              </p>
            </div>
          </div>

          {/* Service Card 2 */}
          <div className="col-md-4">
            <div className="service-card">
              <h3>Commercial Junk Removal</h3>
              <p>
                Efficient junk removal services for offices, retail spaces, and construction sites. We ensure minimal disruption to your business operations.
              </p>
            </div>
          </div>

          {/* Service Card 3 */}
          <div className="col-md-4">
            <div className="service-card">
              <h3>Eco-Friendly Disposal</h3>
              <p>
                We prioritize recycling and donating items whenever possible to reduce waste and help the community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
