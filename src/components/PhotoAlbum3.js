// src/PhotoAlbum.js
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import events1 from "../assets/Gallery_images/e1.jpg";
import events2 from "../assets/Gallery_images/p4.jpg";
import events3 from "../assets/Gallery_images/p3.jpg";
import events4 from "../assets/Gallery_images/e4.jpg";
import events5 from "../assets/Gallery_images/e5.jpg";
import events6 from "../assets/Gallery_images/e6.jpg";
import events7 from "../assets/Gallery_images/e7.jpg";
import events8 from "../assets/Gallery_images/e8.jpg";
import events9 from "../assets/Gallery_images/e9.jpg";
import events10 from "../assets/Gallery_images/e10.jpg";
import events11 from "../assets/Gallery_images/e11.jpg";
import events12 from "../assets/Gallery_images/e12.jpg";
import events13 from "../assets/Gallery_images/1686984727336.jpg";
import events14 from "../assets/Gallery_images/1686984727352.jpg";
import events15 from "../assets/Gallery_images/1686984727386.jpg";
import events16 from "../assets/Gallery_images/1686984727406.jpg";
import events17 from "../assets/Gallery_images/1686984727480.jpg";
import events18 from "../assets/Gallery_images/1686984727507.jpg";
import events19 from "../assets/Gallery_images/1686984727535.jpg";
import events20 from "../assets/Gallery_images/1686984727568.jpg";
import events21 from "../assets/Gallery_images/1686984727655.jpg";
import events22 from "../assets/Gallery_images/1686985026850.jpg";
import events23 from "../assets/Gallery_images/1690370652756.jpg";
import events24 from "../assets/Gallery_images/1690370653719.jpg";
import events25 from "../assets/Gallery_images/1690483164737.jpg";
import events26 from "../assets/Gallery_images/IMG_20191008_151759.dng";
import events27 from "../assets/Gallery_images/IMG_20191008_155540.dng";
import events28 from "../assets/Gallery_images/IMG_20230512_181409.jpg";
import { FaChevronRight, FaArrowUp } from "react-icons/fa";
const photos3 = [
  events1,
  events2,
  events3,
  events4,
  events5,
  events6,
  events7,
  events8,
  events9,
  events10,
  events11,
  events12,
  events13,
  events14,
  events15,
  events16,
  events17,
  events18,
  events19,
  events20,
  events21,
  events22,
  events23,
  events24,
  events25,
  events26,
  events27,
  events28,
];

const PhotoAlbum3 = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handelScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handelScroll);
    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Container>
      <Breadcrumb className="text-white pt-5">
        <Breadcrumb.Item className="mt-1">
          <Link to="/gallery" className="text-decoration-none text-white">
            Gallery
          </Link>
        </Breadcrumb.Item>{" "}
        <p className="text-white mx-2">
          <FaChevronRight />
        </p>
        <Breadcrumb.Item active className="text-warning mt-1">
          Events
        </Breadcrumb.Item>
      </Breadcrumb>
      <h2 style={{ fontFamily: "Oswald", marginBottom: "40px" }}>Events</h2>
      <p style={{ fontFamily: "Open Sans", marginBottom: "40px" }}>
        Kalasindhu hosts engaging webinars, seminars, and workshops, showcasing
        renowned artists and scholars, fostering cultural appreciation and
        unity. Take a look at some of these educating events conducted at
        Kalasindhu ever since its establishment in 2009.
      </p>
      <Row>
        {photos3.map((photo, index) => (
          <Col key={index} md={4} className="mb-4">
            <img src={photo} alt={`Photo ${index + 1}`} className="img-fluid" />
          </Col>
        ))}
      </Row>
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "40px",
            right: "20px",
            backgroundColor: "white",
            border: "none",
            borderRadius: "50%",
            padding: "10px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            cursor: "pointer",
            zIndex: 1000,
          }}
        >
          <FaArrowUp size={20} color="black" />
        </button>
      )}
    </Container>
  );
};

export default PhotoAlbum3;
