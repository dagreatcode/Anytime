import React from "react";
import "./About.css"; // Assuming you'll create an About.css file for styles

const About = () => {
  return (
    <>
      <div className="container my-5">
        <h1 className="display-4 text-center mb-4">About Us</h1>
        <div className="text-center mb-4">
          <img src="./about-image.jpg" alt="About Us" className="about-image" />
        </div>
        <p className="lead text-justify">
          At Anytime Junk Removal, we pride ourselves on providing fast,
          reliable, and eco-friendly junk removal services. Our team is
          dedicated to helping you reclaim your space, whether it's at home or
          in the office.
        </p>
        <h2 className="my-4">Our Mission</h2>
        <p>
          Our mission is to make junk removal easy and stress-free for our
          customers. We aim to provide top-notch service while maintaining a
          commitment to sustainability by recycling and donating items whenever
          possible.
        </p>

        <h2 className="my-4">Why Choose Us?</h2>
        <ul className="list-unstyled">
          <li>✅ Fast and efficient service</li>
          <li>✅ Eco-friendly disposal methods</li>
          <li>✅ Transparent pricing with no hidden fees</li>
          <li>✅ Friendly and professional team</li>
        </ul>

        <h2 className="my-4">Our History</h2>
        <p>
          "Where does it come from? Contrary to popular belief, Lorem Ipsum is
          not simply random text. It has roots in a piece of classical Latin
          literature from 45 BC, making it over 2000 years old. Richard
          McClintock, a Latin professor at Hampden-Sydney College in Virginia,
          looked up one of the more obscure Latin words, consectetur, from a
          Lorem Ipsum passage, and going through the cites of the word in
          classical literature, discovered the undoubtable source."
        </p>

        <h2 className="my-4">Get in Touch</h2>
        <p>
          If you have any questions or would like to learn more about our
          services, feel free to <a href="/Contact">contact us</a> today!
        </p>
      </div>
    </>
  );
};

export default About;
