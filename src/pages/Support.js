import React, { useEffect } from "react";
import { FaFacebook } from "react-icons/fa";
import "../assets/styles/core.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles/test.styles.css";

function Support() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />

      <div>
        <div className="section-1 box">
          <div className="hero-overlay  text-center d-flex flex-column justify-content-center align-items-center text-white">
            <h1
              style={{
                fontWeight: "600",
                fontFamily: "Oswald",
                marginBottom: "40px",
              }}
            >
              Support Us
            </h1>
            <a href="#support-details" className=" rounded fw-bold support-btn">
              Learn how to support us
            </a>
          </div>
        </div>

        <section
          id="support-details"
          className="p-4"
          style={{ backgroundColor: "#E8E5E7" }}
        >
          <div className="container p-4 mt-5 mb-5">
            <p className="fs-1 fw-bolder">Support us..</p>
            <div
              className="text-start mt-4"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <p className="fw-bolder fs-3">By sponsoring us</p>
              <p className="text-start text-black">
                Support our Indian classical dance class by becoming a sponsor
                of our major festivals, Nirantara Narmada and Navarasa
                Navaratri. Your sponsorship in money and other kind will help
                promote, organize, and execute these cultural events while
                gaining exposure for your brand. Kalasindhu has a provision of
                section 80 G under the Income tax act of India.
              </p>
            </div>

            <div
              className="text-start mt-3"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <p className="fw-bolder fs-3">By Donating</p>
              <p>
                Contribute to our dance class and festivals through donations.
                Your generosity directly supports our mission of providing
                high-quality dance education and cultural programming.
              </p>
            </div>

            <div
              className="text-start mt-3"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <p className="fw-bolder fs-3">By Following us on social media </p>
              <p>
                Stay connected with us on Instagram, Facebook and Youtube for
                exclusive updates, behind-the-scenes content, Aesthetic dance
                videos and event announcements. Your support helps us reach a
                wider audience and promote the beauty of Indian classical dance.
              </p>
            </div>

            <div className="row justify-content-center">
              <div className="col-md-4 col-sm-6">
                <div className=" text-center text-primary">
                  <a
                    className="text-decoration-none social-icon"
                    href="https://www.facebook.com/kalasindhuacademy"
                  >
                    <FaFacebook className="fs-1 my-2 " />
                    <p>Facebook</p>
                  </a>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="social-icon text-center">
                  <a
                    className="text-decoration-none social-icon text-secondary"
                    href="https://www.instagram.com/kalasindhu_academy/"
                  >
                    <i className="bi bi-instagram fs-1"></i>
                    <p>Instagram</p>
                  </a>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="social-icon text-center text-danger">
                  <a
                    className="text-decoration-none social-icon text-danger"
                    href="https://www.youtube.com/@kalasindhuacademyofdancean1324"
                  >
                    <i className="bi bi-youtube fs-1"></i>
                    <p>YouTube</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default Support;
