import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Booking.css";

const Booking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tickets: 1,
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Get event data from Events page
  const event = location.state?.event;

  useEffect(() => {
    if (!event) {
      navigate("/events");
    }
  }, [event, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post("http://localhost:8000/api/book/", {
        event: event.id,
        event_title: event.title,
        full_name: formData.name, // ✅ CHANGED: name → full_name
        email: formData.email,
        phone: formData.phone,
        tickets: parseInt(formData.tickets),
      });

      console.log("✅ SUCCESS:", response.data);
      setSuccess(true);
    } catch (err) {
      console.error("❌ FULL ERROR:", err.response?.data);
      setError("Booking failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleBookAnother = () => {
    setSuccess(false);
    setFormData({ name: "", email: "", phone: "", tickets: 1 });
  };

  const handleGoToEvents = () => {
    navigate("/events");
  };

  if (success) {
    return (
      <div className="booking-container">
        <div className="success-message">
          <h1>🎉 Booking Confirmed!</h1>
          <p>
            Thank you <strong>{formData.name}</strong>!
          </p>
          <p>
            Your booking for <strong>{event?.title}</strong> is confirmed.
          </p>
          <p>
            Tickets: <strong>{formData.tickets}</strong>
          </p>
          <div className="success-animation">✅</div>
          <div className="success-buttons">
            <button className="book-again-btn" onClick={handleBookAnother}>
              📝 Book Another Event
            </button>
            <button className="events-btn" onClick={handleGoToEvents}>
              👀 View Events
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="booking-container">
      <h1>Book {event?.title}</h1>
      <div className="event-details">
        <h3>{event?.title}</h3>
        <p>
          {event?.date} | {event?.location}
        </p>
        <p>Price: {event?.price || "Free"}</p>
      </div>

      <form onSubmit={handleSubmit} className="booking-form">
        {error && <div className="error">{error}</div>}

        <input
          type="text"
          name="name"
          placeholder="Full Name *"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email *"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number *"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="tickets"
          placeholder="Number of Tickets"
          value={formData.tickets}
          onChange={handleChange}
          min="1"
          max="10"
          required
        />
        <button type="submit" disabled={loading} className="submit-btn">
          {loading ? "Booking..." : "Confirm Booking"}
        </button>
      </form>
    </div>
  );
};

export default Booking;
