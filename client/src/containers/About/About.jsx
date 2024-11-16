import React from "react";
import "./About.css"; // Assuming you'll create an About.css file for styles
import Img4 from "./Img/bree4.jpg"; // Image for about section
import { FaCheckCircle } from "react-icons/fa"; // Icon for the "Why Choose Us?" section

const About = () => {
  return (
    <div className="about-container">
      <div className="container my-5">
        {/* About Header */}
        <h1 className="display-4 text-center mb-4">About Us</h1>
        
        {/* About Image */}
        <div className="text-center mb-4">
          <img src={Img4} alt="About Us" className="about-image" />
        </div>
        
        {/* Intro Text */}
        <p className="lead text-justify">
          At Anytime Junk Removal, we pride ourselves on providing fast, reliable, and eco-friendly junk removal services. Our team is dedicated to helping you reclaim your space, whether it's at home or in the office.
        </p>
        
        {/* Our Mission Section */}
        <section>
          <h2 className="section-title">Our Mission</h2>
          <p>
            Our mission is to make junk removal easy and stress-free for our customers. We aim to provide top-notch service while maintaining a commitment to sustainability by recycling and donating items whenever possible.
          </p>
        </section>

        {/* Why Choose Us Section */}
        <section>
          <h2 className="section-title">Why Choose Us?</h2>
          <ul className="list-unstyled">
            <li><FaCheckCircle className="check-icon" /> Fast and efficient service</li>
            <li><FaCheckCircle className="check-icon" /> Eco-friendly disposal methods</li>
            <li><FaCheckCircle className="check-icon" /> Transparent pricing with no hidden fees</li>
            <li><FaCheckCircle className="check-icon" /> Friendly and professional team</li>
          </ul>
        </section>

        {/* Our History Section */}
        <section>
          <h2 className="section-title">Our History</h2>
          <p>
            "Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
          </p>
        </section>

        {/* Get in Touch Section */}
        <section>
          <h2 className="section-title">Get in Touch</h2>
          <p>
            If you have any questions or would like to learn more about our services, feel free to <a href="/Contact">contact us</a> today!
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
