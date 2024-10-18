import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import emailjs from "@emailjs/browser";
import "./Contact.css"; // Create a CSS file for styles

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
    <div className="container my-5">
      <h1 className="display-4 text-center mb-4">Contact Us</h1>
      <form ref={form} onSubmit={handleSubmit} className="jumbotron p-4">
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
    </div>
  );
};

export default Contact;
