import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import eduImg1 from "../assets/images/edu-1.png";
import eduImg2 from "../assets/images/edu-2.png";
import eduImg3 from "../assets/images/eduction1.png";
import Footer from "../components/Footer";
import "aos/dist/aos.css";
import AOS from "aos";
import "../pages/styles/education.css";
// import "../assets/styles/core.css";

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
        <div className="container">
          <div className="education">
            <div className="education-content">
              <h1 className="education-title">Education at Kalasindhu</h1>
              <p className="education-description">
                At Kalasindhu, a comprehensive and integrated approach to
                education is offered. Music and Sanskrit are taught along with
                dance, so students understand the lyrics and meaning of the
                items they perform.
                <br />
                <br />
                The dedicated space, designed for all ages, sex, and skill,
                fosters creativity in a serene ambiance.
              </p>
              <a href="https://wa.me/9731098227" className="enquire-button">
                Enquire
              </a>
            </div>
            <div className="education-image">
              <img src={eduImg1} alt="Education Hero" className="img-fluid" />
            </div>
          </div>
        </div>

        <div className="curriculum-section">
          <div className="container curriculum-container">
            <div className="curriculum-image">
              <img src={eduImg2} alt="Curriculum Image" className="img-fluid" />
            </div>

            <div className="curriculum-content">
              <h1 className="curriculum-title">Curriculum</h1>
              <ol
                className="curriculum-list"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <li>
                  The curriculum includes meticulous instruction in hand
                  gestures, facial expressions, adavus, and a traditional
                  Bharatanatyam repertoire.
                </li>
                <li>
                  Dance training goes beyond technique, incorporating
                  flexibility and cardio fitness.
                </li>
                <li>
                  Music and Sanskrit are taught from basics along with what is
                  needed for dance.
                </li>
                <li>
                  Advanced training includes rangapravesha, in-depth exploration
                  of Tala and Abhinaya, and opportunities for composing and
                  choreographing dance pieces.
                </li>
              </ol>
              <a href="https://wa.me/9731098227" className="curriculum-button">
                Enquire
              </a>
            </div>
          </div>
        </div>

        <div className="added-benefits-section">
          <div className="container added-benefits-container">
            <div className="added-benefits-content">
              <h1 className="added-benefits-title">Added Benefits</h1>
              <ol
                className="added-benefits-list"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <li>
                  Students are exposed to diverse dance styles and forms,
                  broadening their artistic horizons.
                </li>
                <li>
                  Opportunities for solo or group performances, competitions,
                  and corporate events in and out of state.
                </li>
                <li>
                  Advanced students engage in natuvanga and teach juniors.
                </li>
                <li>
                  Training includes Rangapravesha and state exams at all levels.
                </li>
                <li>
                  Annual workshops with renowned artists enrich the learning
                  experience.
                </li>
                <li>Abundant memories and fun throughout the journey.</li>
              </ol>
              <a
                href="https://wa.me/9731098227"
                className="added-benefits-button"
              >
                Enquire
              </a>
            </div>

            <div className="added-benefits-image">
              <img
                src={eduImg3}
                alt="Added Benefits Image"
                className="img-fluid"
              />
            </div>
          </div>
        </div>

        <div className="w-100" style={{ backgroundColor: "#003D1B" }}>
          <div className="container" style={styles.container}>
            <div className="row mt-5">
              <div className="col-lg-10 col-md-12">
                <h1
                  className="fw-bolder custom-text5"
                  style={{
                    color: "#E8E5E7",
                    fontSize: "60px",
                    fontWeight: "600",
                    fontFamily: "Oswald",
                  }}
                >
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
                  For beginners aged 7 and above, Kalasindhu provides a
                  welcoming entry point. Enrollment is available in May, June,
                  and October.
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
                  Classes are held on Mondays, Wednesdays, from 5:00 to 8 pm
                  COVERING 4 batches each focusing on different levels of
                  learning.
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
