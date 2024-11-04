import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { HashLink as Link } from "react-router-hash-link";
import './Gallery.css'; 

function Gallery() {
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [hovered4, setHovered4] = useState(false);

  return (
    <>
      <Navbar />
      <div className="gallery-container">
        <div className="gallery-row">
          <div
            className="gallery-item"
            onMouseEnter={() => setHovered1(true)}
            onMouseLeave={() => setHovered1(false)}
          >
            <Link smooth to="/rangarpane">
              <div style={{ color: hovered1 ? "#FCB541" : "white" }}>
                Rangarpane
              </div>
              <img
                src={require("../assets/images/GM1.png")}
                alt="Image 1"
                style={{ transform: hovered1 ? "scale(1.1)" : "scale(1)" }}
              />
            </Link>
          </div>

          <div
            className="gallery-item"
            onMouseEnter={() => setHovered2(true)}
            onMouseLeave={() => setHovered2(false)}
          >
            <Link smooth to="/festivals">
              <div style={{ color: hovered2 ? "#FCB541" : "white" }}>
                Festivals
              </div>
              <img
                src={require("../assets/images/GM2.png")}
                alt="Image 2"
                style={{ transform: hovered2 ? "scale(1.1)" : "scale(1)" }}
              />
            </Link>
          </div>

          <div
            className="gallery-item"
            onMouseEnter={() => setHovered3(true)}
            onMouseLeave={() => setHovered3(false)}
          >
            <Link smooth to="/performance">
              <div style={{ color: hovered3 ? "#FCB541" : "white" }}>
                Performance
              </div>
              <img
                src={require("../assets/images/GM3.png")}
                alt="Image 3"
                style={{ transform: hovered3 ? "scale(1.1)" : "scale(1)" }}
              />
            </Link>
          </div>

          <div
            className="gallery-item"
            onMouseEnter={() => setHovered4(true)}
            onMouseLeave={() => setHovered4(false)}
          >
            <Link smooth to="/eventsGallery">
              <div style={{ color: hovered4 ? "#FCB541" : "white" }}>
                Events
              </div>
              <img
                src={require("../assets/images/GM4.png")}
                alt="Image 4"
                style={{ transform: hovered4 ? "scale(1.1)" : "scale(1)" }}
              />
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Gallery;
