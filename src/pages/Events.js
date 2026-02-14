import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Events.css";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      // .get("http://localhost:8000/api/events/")
      .get("https://rithaniya.pythonanywhere.com/api/events/")
      .then((response) => {
        console.log("✅ API Response:", response.data);
        setEvents(response.data);
      })
      .catch((error) => {
        console.error("❌ API Error:", error);
        setEvents([
          {
            id: 1,
            title: "Kuwait National Day Fireworks",
            date: "Feb 25, 2026",
            location: "Kuwait City Marina",
            description: "Spectacular fireworks display",
            price: "25 KWD",
            image: "events/fireworks.jpg",
          },
        ]);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleBookNow = (event) => {
    navigate("/booking", { state: { event } });
  };

  if (loading) {
    return (
      <div className="events-container">
        <div className="loading-spinner">
          Loading Kuwait National Day Events...
        </div>
      </div>
    );
  }

  return (
    <div className="events-container">
      <div className="events-header">
        <h1>Events ({events.length})</h1>
      </div>

      <div className="events-list">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            {event.image && (
              <div className="event-image-container">
                <img
                  // src={`http://localhost:8000${event.image}`}
src={`https://rithaniya.pythonanywhere.com${event.image}`}
                  alt={event.title}
                  className="event-image"
                  onError={(e) => {
                    console.log("Image failed to load:", event.image);
                    e.target.style.display = "none";
                  }}
                />
              </div>
            )}

            <div className="event-badge">Featured</div>

            <h3>{event.title || "No Title"}</h3>
            <div className="event-meta">
              <span className="date">
                📅 {event.date || event.event_date || "No Date"}
              </span>
              <span className="location">
                📍 {event.location || event.venue || "No Location"}
              </span>
            </div>
            <p className="event-description">
              {event.description || "No Description"}
            </p>

            {/* ✅ SHARE BUTTON REMOVED - ONLY BOOK NOW */}
            <div className="event-actions">
              <button className="book-btn" onClick={() => handleBookNow(event)}>
                Book Now - {event.price || "Free"}
              </button>
            </div>
          </div>
        ))}

        {events.length === 0 && (
          <div className="no-events">
            <h3>No Events Yet</h3>
            <p>
              Add events in Django Admin at{" "}
              <strong>http://localhost:8000/admin/</strong>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
