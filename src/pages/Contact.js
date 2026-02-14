import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      // await axios.post("http://localhost:8000/api/contact/", formData);
      await axios.post("https://rithaniya.pythonanywhere.com/api/contact/", formData);

      setStatus("✅ Thank you! Your message has been saved.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("❌ Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section">
      <div className="container">
        <h1 className="section-title">Contact Us</h1>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <div className="contact-item">
              <strong>📧 Email:</strong> info@kuwaitnationalday.kw
            </div>
            <div className="contact-item">
              <strong>📱 Phone:</strong> +965 1234 5678
            </div>
            <div className="contact-item">
              <strong>📍 Location:</strong> Kuwait City
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            {status && (
              <div
                className={`status-message ${status.includes("✅") ? "success" : "error"}`}
              >
                {status}
              </div>
            )}

            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={loading}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email *"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={loading}
            />
            <textarea
              name="message"
              placeholder="Your Message *"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              disabled={loading}
            ></textarea>
            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
