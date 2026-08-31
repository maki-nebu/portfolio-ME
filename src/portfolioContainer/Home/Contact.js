import React, { useState } from 'react';
import './Contact.css';
import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaCopy, FaCheckCircle, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const myEmail = "makdanebyu@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(myEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
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
        alert("Something went wrong. Please try again or email directly.");
      }
    } catch (error) {
      alert("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      {/* Section Title */}
      <div className="section-title-container">
        <span className="section-subtitle">GET IN TOUCH</span>
        <h2 className="section-main-title">Let's Connect</h2>
      </div>

      <div className="contact-container-grid">
        {/* Contact Information Side */}
        <div className="contact-info-card animate-fade-in">
          <div>
            <h3 className="contact-info-title">Let's collaborate on your next project!</h3>
            <p className="contact-info-text">
              Whether you have a web application to build, a software engineering opportunity, or a creative modeling campaign, I'd love to connect with you.
            </p>

            <div className="contact-detail-item">
              <div className="contact-detail-icon">
                <FaEnvelope />
              </div>
              <div>
                <div className="contact-detail-label">Email Address</div>
                <div className="contact-detail-value" style={{ display: 'flex', alignItems: 'center' }}>
                  {myEmail}
                  <button 
                    className="copy-email-btn"
                    onClick={handleCopyEmail}
                    title="Copy Email"
                  >
                    {copied ? <FaCheckCircle style={{ color: '#10b981' }} /> : <FaCopy />}
                    {copied ? ' Copied!' : ' Copy'}
                  </button>
                </div>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="contact-detail-icon" style={{ color: '#ec4899' }}>
                <FaMapMarkerAlt />
              </div>
              <div>
                <div className="contact-detail-label">Location</div>
                <div className="contact-detail-value">Ethiopia</div>
              </div>
            </div>
          </div>

          <div>
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '12px', fontSize: '14px' }}>
              Connect on Social Networks:
            </h4>
            <div className="social-icons-bar" style={{ marginBottom: 0 }}>
              <a
                href="https://github.com/maki-nebu"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-circle"
                title="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/makda-nebyu-0452742b7/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-circle"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/maki_nebu332/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-circle"
                title="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form Side */}
        <div className="contact-form-card animate-fade-in">
          {submitted ? (
            <div className="success-banner">
              <FaCheckCircle style={{ fontSize: '24px' }} />
              <div>
                <div>Thank you! Your message has been sent successfully.</div>
                <small style={{ fontWeight: 'normal', color: 'var(--text-secondary)' }}>
                  I will reply to your email as soon as possible.
                </small>
              </div>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="form-input"
                  placeholder="e.g. Alex Johnson" 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="form-input"
                  placeholder="e.g. alex@example.com" 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4" 
                  className="form-textarea"
                  placeholder="Tell me about your project, idea, or message..." 
                  required 
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={loading}
                style={{ width: '100%', marginTop: '10px' }}
              >
                {loading ? 'Sending Message...' : <><FaPaperPlane /> Send Message</>}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
