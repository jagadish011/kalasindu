import React, { useEffect, useState } from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaChevronRight, FaArrowUp } from "react-icons/fa";
import r1 from "../assets/Gallery_images/r1.jpg";
import r2 from "../assets/Gallery_images/r5.jpg";
import r3 from "../assets/Gallery_images/r8.jpg";
import r4 from "../assets/Gallery_images/r6.jpg";
import r6 from "../assets/Gallery_images/r9.jpg";
import r7 from "../assets/Gallery_images/r7.jpg";
import r8 from "../assets/Gallery_images/r13.jpg";
import r9 from "../assets/Gallery_images/r4.jpg";
import r10 from "../assets/Gallery_images/r10.jpg";
import r11 from "../assets/Gallery_images/r11.jpg";
import r12 from "../assets/Gallery_images/r12.jpg";
import r13 from "../assets/Gallery_images/Anil.webp";
import r14 from "../assets/Gallery_images/Apoorva .jpg";
import r15 from "../assets/Gallery_images/Apoorva(1).jpg";
import r56 from "../assets/images/apoorva 1.jpg";
import r57 from "../assets/images/apoorva 3 .webp";
import r16 from "../assets/Gallery_images/Deepthi.jpg";
import r17 from "../assets/Gallery_images/Deepthi(1).jpg";
import r58 from "../assets/Gallery_images/Deepthi 3.jpg";
import r18 from "../assets/Gallery_images/Divya.jpg";
import r20 from "../assets/Gallery_images/Divya(1).jpg";
import r21 from "../assets/Gallery_images/Divya(2).jpg";
import r22 from "../assets/Gallery_images/Divya(3).jpg";
import r23 from "../assets/Gallery_images/Hitha .jpg";
import r24 from "../assets/Gallery_images/Hitha (1).jpg";
import r25 from "../assets/Gallery_images/Hitha.jpg";
import r26 from "../assets/Gallery_images/Kavya.jpg";
import r27 from "../assets/Gallery_images/Kavya.webp";
import r59 from "../assets/Gallery_images/Kavya 1.jpg";
import r28 from "../assets/Gallery_images/Lavanthi.jpg";
import r29 from "../assets/Gallery_images/Mrudula.jpg";
import r31 from "../assets/Gallery_images/Nishitha.jpg";
import r32 from "../assets/Gallery_images/Mrunalini.jpg";
import r33 from "../assets/Gallery_images/Nishitha(1).jpg";
import r34 from "../assets/Gallery_images/Nishitha(2).jpg";
import r35 from "../assets/Gallery_images/Nishitha(3).jpg";
import r36 from "../assets/Gallery_images/Priya .webp";
import r37 from "../assets/Gallery_images/Priya-1.webp";
import r38 from "../assets/Gallery_images/Priyanka.jpg";
import r39 from "../assets/Gallery_images/Priyanka(1).jpg";
import r40 from "../assets/Gallery_images/Sakshi-1.webp";
import r41 from "../assets/Gallery_images/Sakshi-2.webp";
import r42 from "../assets/Gallery_images/Sakshi.jpg";
import r43 from "../assets/Gallery_images/Samvitha .jpg";
import r44 from "../assets/Gallery_images/Samvitha.jpg";
import r45 from "../assets/Gallery_images/Soumya.jpg";
import r46 from "../assets/Gallery_images/Soundarya .jpg";
import r47 from "../assets/Gallery_images/Sowmya-1.webp";
import r48 from "../assets/Gallery_images/Sowrabhi-1.webp";
import r49 from "../assets/Gallery_images/Supriya-1.webp";
import r50 from "../assets/Gallery_images/Supriya.webp";
import r51 from "../assets/Gallery_images/Swathi .jpg";
// import r52 from "../assets/Gallery_images/Supriya.webp";
import r53 from "../assets/Gallery_images/Swathi K-1.webp";
import r54 from "../assets/Gallery_images/Swathi K.webp";
import r55 from "../assets/Gallery_images/Anil 2.webp";
import r60 from "../assets/Gallery_images/Lavanthi 2.jpg";
import r61 from "../assets/Gallery_images/Lavanthi 3.jpg";
import r62 from "../assets/Gallery_images/Mrudula 2.jpg";
import r63 from "../assets/Gallery_images/Mrudula 4.jpg";
import r64 from "../assets/Gallery_images/Mrunalini 3.jpg";
import r65 from "../assets/Gallery_images/Nishitha 2.jpg";
import r66 from "../assets/Gallery_images/Priya 1.webp";
import r67 from "../assets/Gallery_images/Priya 4.webp";
import r68 from "../assets/Gallery_images/Priyanka 2.webp";
import r69 from "../assets/Gallery_images/Soundarya 1.webp";
import r70 from "../assets/Gallery_images/Soundarya 3.webp";
import r71 from "../assets/Gallery_images/Sowmya 3.webp";
import r72 from "../assets/Gallery_images/Sowmya 4.webp";
import r73 from "../assets/Gallery_images/Sowrabhi 1.webp";
import r74 from "../assets/Gallery_images/Sowrabhi 2.jpg";
import r75 from "../assets/Gallery_images/Sowrabhi 3.jpg";
import r76 from "../assets/Gallery_images/Supriya 2.jpg";
const photos = [
  r1,
  r2,
  r3,
  r4,
  r6,
  r7,
  r8,
  r9,
  r10,
  r11,
  r12,
  r13,
  r14,
  r15,
  r16,
  r17,
  r18,
  r20,
  r21,
  r22,
  r23,
  r24,
  r25,
  r26,
  r27,
  r28,
  r29,
  r31,
  r32,
  r33,
  r34,
  r35,
  r36,
  r37,
  r38,
  r39,
  r40,
  r41,
  r42,
  r43,
  r44,
  r45,
  r46,
  r47,
  r48,
  r49,
  r50,
  r51,
  r53,
  r54,
  r55,
  r56,
  r57,
  r58,
  r59,
  r60,
  r61,
  r62,
  r63,
  r64,
  r65,
  r66,
  r67,
  r68,
  r69,
  r70,
  r71,
  r72,
  r73,
  r74,
  r75,
  r76,
];

const PhotoAlbum = () => {
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
  }

  return (
    <Container>
      <Breadcrumb className="text-white pt-5 text-decoration-none">
        <Breadcrumb.Item
          className="text-decoration-none text-white mt-1 "
          style={{ textDecoration: "none" }}
        >
          <Link to="/gallery" className="text-decoration-none text-white ">
            Gallery
          </Link>
        </Breadcrumb.Item>{" "}
        <p className="text-white mx-2">
          {" "}
          <FaChevronRight />
        </p>
        <Breadcrumb.Item active className="text-warning mt-1">
          Rangarpane
        </Breadcrumb.Item>
      </Breadcrumb>
      <h2
        style={{ fontFamily: "Oswald", marginBottom: "40px" }}
        className="mt-2"
      >
        Rangarpane
      </h2>
      <p style={{ fontFamily: "Open Sans", marginBottom: "40px" }}>
        A first stepping stone for a student of Dance. Rangarpane at Kalasindhu
        is more about the entire processof training a students Body and mind
        with atmost focus and dedication and a time to build a rapport with
        their Guru . It is an offering and a commitment to the stage and the Art
        that they are going perform for the rest of their lives . Guru Poornima
        Gururaja Choreographs a new Mārgam for every student preparing for a
        Rangārpane and customises for every student for them to feel more
        innately connected .
      </p>
      <Row>
        {photos.map((photo, index) => (
          <Col key={index} md={4} className="mb-4">
            <img src={photo} alt={`Photo ${index + 1}`} className="img-fluid" />
          </Col>
        ))}
      </Row>
      {showScrollButton && (
        <button onClick={scrollToTop} style={{
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
        }}>
          <FaArrowUp size={20} color="black"/>
        </button>
      )}
    </Container>
  );
};

export default PhotoAlbum;
