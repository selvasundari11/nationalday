import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Events from "./pages/Events";
import About from "./pages/About";
import Places from "./pages/Places";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} /> {/* Home shows Hero */}
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/places" element={<Places />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />{" "}
          {/* Fixed: removed :eventId */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
