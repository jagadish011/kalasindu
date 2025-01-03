import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import colImg2 from "../assets/images/Group 56.png";
import colImg3 from "../assets/images/c1.png";
import art from "../assets/images/art.png";
import { FaCheckCircle } from "react-icons/fa";
import Footer from "../components/Footer";
import "aos/dist/aos.css";
import AOS from "aos";
import "./Collaborate.css";

function Collaborate() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="">
        <Navbar />
      </div>
      <div style={{ backgroundColor: "black", overflow: "hidden" }}>
        {/* do you want to collaborate */}
        <section
          className="hero-wrapper1 position-relative"
          style={{ marginTop: "5.5em" }}
        >
          <div className="hero-overlay1">
            <div className="">
              <div className="hero-content-collaborate">
                <h1 className="" style={{ fontFamily: "Oswald" }}>
                  Do you want to collaborate??
                </h1>
                <p className="" data-aos="fade-up" data-aos-duration="2000">
                  Whether you're a seasoned artist or a budding talent, let's
                  collaborate to showcase your innovative work-in-progress,
                  share thoughts, dance for our productions, and explore endless
                  possibilities in this world of creative arts.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* kalasindhu is looking for */}
        <section
          className="collaborate-s2"
          style={{
            backgroundColor: "#000",
            overflow: "hidden",
          }}
        >
          <h1
            className="text-white fw-bolder"
            style={{
              fontFamily: "Oswald",
              color: "#E8E5E7",
            }}
          >
            Kalasindhu is Looking for ....
          </h1>
          <div className="collaborate-s2-container mx-0">
            <div className="collaborate-s2-img">
              <img src={colImg3} alt="Hero Image" className="img-fluid" />
            </div>
            <div className="collaborate-s2-text">
              <p
                className="text-white"
                style={{ fontFamily: "Open Sans" }}
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                Dancers, musicians, photographers and anyone else who is
                bursting with ideas and who would like to share and contribute
                to the creative space.
              </p>
              <a
                href="https://wa.me/9731098227"
                className="btn btn-lg btn-dark rounded"
              >
                Let's Collaborate
              </a>
            </div>
          </div>
        </section>
        {/* rent the space */}
        <div className=" rent-the-space">
          <div className="">
            <div className="">
              <div className="collaborate-s3">
                <h1
                  className="text-white fw-bolder"
                  style={{
                    fontFamily: "Oswald",
                    color: "#E8E5E7",
                  }}
                >
                  Rent the space
                </h1>
                <div className="collaborate-s3-img-mobile">
                  <img src={colImg2} alt="Hero Image" className="img-fluid" />
                </div>
                <p
                  className="text-white"
                  style={{
                    fontFamily: "Open Sans",
                  }}
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  Rent out our dance studio for your practice sessions,
                  concerts, or gatherings. The space is not just aesthetic but
                  also functional with all the necessary amenities.
                </p>
                <div className="rent-list">
                  <div className="rent-list-items">
                    <div className="col-12 col-md-7 text-white d-flex align-items-center mb-3">
                      <FaCheckCircle
                        className="tick-icon"
                        style={{ color: "#255A31", marginRight: ".5em" }}
                      />
                      <span className="ms-2">
                        Spacious, accommodates 50-60 people
                      </span>
                    </div>
                    <div className="col-12 col-md-5 text-white d-flex align-items-center mb-3">
                      <FaCheckCircle
                        className="fs-3"
                        style={{ color: "#255A31", marginRight: ".5em" }}
                      />
                      <span className="ms-2">Wall mirror</span>
                    </div>
                  </div>
                </div>
                <div className="rent-list">
                  <div className="rent-list-items">
                    <div className="col-12 col-md-7 text-white d-flex align-items-center mb-3">
                      <FaCheckCircle
                        className="fs-3"
                        style={{ color: "#255A31", marginRight: ".5em" }}
                      />
                      <span className="ms-2">Seating arrangement</span>
                    </div>
                    <div className="col-12 col-md-5 text-white d-flex align-items-center mb-3">
                      <FaCheckCircle
                        className="fs-3"
                        style={{ color: "#255A31", marginRight: ".5em" }}
                      />
                      <span className="ms-2">Stage lights</span>
                    </div>
                  </div>
                </div>
                <div className="rent-list">
                  <div className="rent-list-items">
                    <div className="col-12 col-md-7 text-white d-flex align-items-center mb-3">
                      <FaCheckCircle
                        className="fs-3"
                        style={{ color: "#255A31", marginRight: ".5em" }}
                      />
                      <span className="ms-2">2 Bathrooms</span>
                    </div>
                    <div className="col-12 col-md-5 text-white d-flex align-items-center mb-3">
                      <FaCheckCircle
                        className="fs-3"
                        style={{ color: "#255A31", marginRight: ".5em" }}
                      />
                      <span className="ms-2">1 Green room</span>
                    </div>
                  </div>
                </div>
                <a
                  href="https://wa.me/9731098227"
                  className="btn btn-lg btn-dark rounded fw-bold"
                >
                  Book Slot
                </a>
              </div>
            </div>
          </div>
          <div className="collaborate-s3-img">
            <img src={colImg2} alt="Hero Image" className="img-fluid" />
          </div>
        </div>
        {/* showcase your art */}
        <div className="showcase-your-art">
          <div className="image-container">
            <img
              src={art}
              alt="Art"
              className="image"
              style={{ height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="collaborate-s4">
            <div className="">
              <h1
                className="text-dark fw-bold"
                style={{ fontFamily: "Oswald" }}
              >
                Showcase your art
              </h1>
              <div className="image-container-mobile">
                <img
                  src={art}
                  alt="Art"
                  className="image"
                  style={{ height: "100%", objectFit: "cover" }}
                />
              </div>
              <p
                className="text-dark"
                // data-aos="fade-up"
                // data-aos-duration="2000"
                style={{ fontFamily: "Open Sans" }}
              >
                Join us in our creative journey! Whether you're a seasoned
                artist or a budding talent, let's collaborate to showcase your
                innovative work-in-progress, share thoughts, and explore endless
                possibilities in this world of creative arts.
              </p>
              <a
                href="https://wa.me/9731098227"
                className="btn btn-lg btn-dark rounded fw-bold"
              >
                Let's Collaborate
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Collaborate;
