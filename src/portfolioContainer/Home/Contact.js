import React, { useState } from "react";
import "./Contact.css";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mpwljpel", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Failed to send. Try again later.");
    }
  };

  return (
    <div className="contact-page">
      <h2 className="contact-title">Let's Connect</h2>
      <p className="contact-subtitle">I'd love to hear from you!</p>

      {submitted ? (
        <p className="success-message">✅ Your message has been sent successfully!</p>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="4" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      )}

      <div className="social-links">
        <a
          href="https://www.instagram.com/maki_nebu332/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaInstagram />
        </a>
        <a
          href="https://github.com/maki-nebu"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/makda-nebyu-0452742b7/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Contact;
