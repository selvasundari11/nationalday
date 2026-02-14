import React from "react";
import "./Places.css";
import KuwaitTowers from "../assets/places/kuwait-towers.jpg";
import MarinaBeach from "../assets/places/marina-beach.jpg";
import AlShaheedPark from "../assets/places/al-shaheed-park.jpg";
import SoukMubarakiya from "../assets/places/souk-mubarakiya.jpg";
// 👇 NEW IMPORTS - Add these 2 image files
import GrandMosque from "../assets/places/grand-mosque.jpg";
import LiberationTower from "../assets/places/liberation-tower.jpg";

const Places = () => {
  const places = [
    {
      name: "🇰🇼 Kuwait Towers",
      description: "Iconic fireworks displays.",
      image: KuwaitTowers,
    },
    {
      name: "Marina Beach",
      description: "Waterfront family events.",
      image: MarinaBeach,
    },
    {
      name: "Al Shaheed Park",
      description: "Cultural exhibitions.",
      image: AlShaheedPark,
    },
    {
      name: "Souk Al-Mubarakiya",
      description: "Traditional market.",
      image: SoukMubarakiya,
    },
    // 👇 NEW FAMOUS KUWAIT PLACES
    {
      name: "Grand Mosque",
      description: "Spiritual landmark with stunning architecture.",
      image: GrandMosque,
    },
    {
      name: "Liberation Tower",
      description: "Tallest tower celebrating Kuwait's freedom.",
      image: LiberationTower,
    },
  ];

  return (
    <section className="places-section">
      <div className="container">
        <h1 className="section-title">🏛️ Famous Places for National Day (6)</h1>
        <div className="places-grid">
          {places.map((place, index) => (
            <div key={index} className="place-card">
              <img src={place.image} alt={place.name} className="place-image" />
              <div className="place-content">
                <h3>{place.name}</h3>
                <p>{place.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Places;
