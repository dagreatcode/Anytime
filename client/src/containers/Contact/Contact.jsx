import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css"; // Import the CSS module
import bree5 from "./Img/bree5.png"

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log("Message sent successfully:", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("Failed to send message:", error.text);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerImage}>
        <h1 className={styles.title}>Contact Us</h1>
        <img 
          src={bree5} // Use the path to your truck image
          alt="Truck" 
          className={styles.truck} 
        />
      </div>
      <p className="lead text-center mb-4">
        We’re here to help with all your junk removal needs. Whether you have
        questions, need a quote, or want to schedule a pickup, feel free to
        reach out to us!
      </p>
      <form ref={form} onSubmit={handleSubmit} className={`${styles.jumbotron} p-4`}>
        <div className="mb-3">
          <label htmlFor="user_name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="user_name"
            className="form-control"
            id="user_name"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="user_email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="user_email"
            className="form-control"
            id="user_email"
            placeholder="name@example.com"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            name="message"
            className="form-control"
            id="message"
            rows="4"
            placeholder="Let us know what you need."
            required
          ></textarea>
        </div>
        <Button type="submit" className="btn btn-primary w-100">
          Send
        </Button>
      </form>
      <p className="text-center mt-4">
        Thank you for considering us for your junk removal needs. We look
        forward to assisting you!
      </p>
    </div>
  );
};

export default Contact;
