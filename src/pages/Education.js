import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import eduImg1 from "../assets/images/edu-1.png";
import eduImg2 from "../assets/images/edu-2.png";
import eduImg3 from "../assets/images/eduction1.png";
import Footer from "../components/Footer";
import "aos/dist/aos.css";
import "../assets/styles/core.css";
import AOS from "aos";

function Education() {
  useEffect(() => {
    AOS.init();
  }, []);

  const styles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    content: {
      paddingLeft: "20px",
    },
  };


  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: "#E8E5E7", overflow: "hidden" }}>
        <div className="container" style={styles.container}>
          <div className="row">
            <div className="col-lg-6 col-md-12 eduction-s1 " style={{ ...styles.content, height: "100%" }}>
              <h1
                className="fw-bolder mt-5 custom-text4"
                style={{
                  fontSize: "3em",
                  color: "black",
                  fontFamily: "Oswald",
                }}
              >
                Education at Kalasindhu
              </h1>
              <p
                className="text-dark mt-5"
                style={{ fontSize: "20px", fontFamily: "Open Sans" }}
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                At Kalasindhu, a comprehensive and integrated approach to education is offered. Music and Sanskrit are taught along with dance, so students understand the lyrics and meaning of the items they perform.
                <br />
                <br /> The dedicated space, designed for all ages, sex, skill, fosters creativity in a serene ambiance.
              </p>
              <a
                href="https://wa.me/9731098227"
                className="btn btn-lg btn-dark rounded mt-5"
                style={{
                  width: "198px",
                  background: "#0E0E0E",
                  fontFamily: "Open Sans",
                  fontWeight: "bold",
                  color: "#FCB541",
                }}
              >
                Enquire
              </a>
            </div>
            <div className="col-lg-6 col-md-12 mt-5 d-flex justify-content-center">
              <img src={eduImg1} alt="Hero Image" className="img-fluid" />
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: "#080808", color: "#E8E5E7", overflow: "hidden" }}>
          <div className="container">
            <div className="row mt-5 mb-4 " style={styles.container}>
              <div className="col-lg-6 col-md-12 text-center">
                <img
                  src={eduImg2}
                  alt="Hero Image"
                  className="img-fluid w-100"
                  style={{ height: "35em", objectFit: "contain" }}
                />
              </div>
              <div className="col-lg-6 col-md-12">
                <h1 className="text-white fw-bolder custom-text5" style={{ fontSize: "4rem", fontFamily: "Oswald" }}>
                  Curriculum
                </h1>
                <ol
                  className="text-white"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                  style={{
                    fontSize: "18px",
                    marginTop: "2em",
                    fontFamily: "Open Sans",
                  }}
                >
                  <li>
                    The curriculum includes meticulous instruction in hand gestures, facial expressions, adavus, and a traditional Bharatanatyam repertoire.
                  </li>
                  <li className="mt-3">
                    Dance training goes beyond technique, incorporating flexibility and cardio fitness.
                  </li>
                  <li className="mt-3">
                    Music and Sanskrit are taught from basics along with what is needed for dance.
                  </li>
                  <li className="mt-3">
                    Advanced training includes rangapravesha, in-depth exploration of Tala and Abhinaya, and opportunities for composing and choreographing dance pieces.
                  </li>
                </ol>
                <a
                  href="https://wa.me/9731098227"
                  className="btn btn-lg btn-dark rounded mt-5"
                  style={{
                    width: "198px",
                    background: "#FCB541",
                    fontFamily: "Open Sans",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  Enquire
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container" style={styles.container}>
          <div className="row mt-5 mb-4">
            <div className="col-lg-6 col-md-12">
              <h1 className="fw-bolder mt-5 custom-text5" style={{ fontSize: "60px", color: "black", fontFamily: "Oswald" }}>
                Added benefits
              </h1>
              <ol
                className="mt-4"
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  fontFamily: "Open Sans",
                }}
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <li>Students are exposed to diverse dance styles and forms, broadening their artistic horizons.</li>
                <li className="mt-3">Opportunities for solo or group performances, competitions, and corporate events in and out of state.</li>
                <li className="mt-3">Advanced students engage in natuvanga and teach juniors.</li>
                <li className="mt-3">Training includes Rangapravesha and state exams at all levels.</li>
                <li className="mt-3">Annual workshops with renowned artists enrich the learning experience.</li>
                <li className="mt-3">Abundant memories and fun throughout the journey.</li>
              </ol>
              <a
                href="https://wa.me/9731098227"
                className="btn btn-lg btn-dark rounded mt-4"
                style={{
                  width: "198px",
                  background: "#0E0E0E",
                  fontFamily: "Open Sans",
                  fontWeight: "bold",
                  color: "#FCB541",
                }}
              >
                Enquire
              </a>
            </div>
            <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center mt-5">
              <img
                src={eduImg3}
                alt="Hero Image"
                className="img-fluid"
                style={{ height: "30em", objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
        <div className="w-100" style={{ backgroundColor: "#003D1B" }}>
          <div className="container" style={styles.container}>
            <div className="row mt-5">
              <div className="col-lg-10 col-md-12">
                <h1 className="fw-bolder custom-text5" style={{ color: "#E8E5E7", fontSize: "60px", fontWeight: "600", fontFamily: "Oswald" }}>
                  Admissions and schedule
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                  className="text-white mt-5 custom-text3"
                  style={{
                    fontSize: "22px",
                    fontWeight: "500",
                    fontFamily: "Open Sans",
                  }}
                >
                  For beginners aged 7 and above, Kalasindhu provides a welcoming entry point. Enrollment is available in May, June, and October.
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                  className=" text-white mt-3 custom-text3"
                  style={{
                    fontSize: "22px",
                    fontWeight: "500",
                    fontFamily: "Open Sans",
                  }}
                >
                  Classes are held on Mondays, Wednesdays, from 5:00 to 8 pm COVERING 4 batches each focusing on different levels of learning.
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                  className=" text-white mt-3 custom-text3"
                  style={{
                    fontSize: "22px",
                    fontWeight: "500",
                    fontFamily: "Open Sans",
                  }}
                >
                  New beginners batches will be conducted on the weekends.
                </p>
                <a
                  href="https://wa.me/9731098227"
                  className="btn btn-lg btn-dark rounded mt-5"
                  style={{
                    width: "198px",
                    background: "#FCB541",
                    fontFamily: "Open Sans",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  Enquire
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Education;
