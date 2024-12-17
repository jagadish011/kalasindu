import React, { useEffect } from "react";
import facebook from "../assets/images/Collobaration1.png"; // Importing the Facebook image
import "../assets/styles/core.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles/test.styles.css";

function Support() {
  useEffect(() => {
    const instagramScript = document.createElement("script");
    instagramScript.src = "https://static.elfsight.com/platform/platform.js";
    instagramScript.async = true;
    document.body.appendChild(instagramScript);

    const youtubeScript = document.createElement("script");
    youtubeScript.src = "https://static.elfsight.com/platform/platform.js";
    youtubeScript.async = true;
    document.body.appendChild(youtubeScript);

    return () => {
      document.body.removeChild(instagramScript);
      document.body.removeChild(youtubeScript);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <div className="section-1 box">
          <div className="hero-overlay text-center d-flex flex-column justify-content-center align-items-center text-white">
            <h1
              style={{
                fontWeight: "600",
                fontFamily: "Oswald",
                marginBottom: "10px",
              }}
            >
              Support Us
            </h1>
            <a href="#support-details" className="rounded fw-bold s-button">
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
            <div className="text-start mt-4">
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

            <div className="text-start mt-3">
              <p className="fw-bolder fs-3">By Donating</p>
              <p>
                Contribute to our dance class and festivals through donations.
                Your generosity directly supports our mission of providing
                high-quality dance education and cultural programming.
              </p>
            </div>

            <div className="text-start mt-3">
              <p className="fw-bolder fs-3">By Following us on social media </p>
              <p>
                Stay connected with us on Instagram, Facebook, and YouTube for
                exclusive updates, behind-the-scenes content, aesthetic dance
                videos, and event announcements. Your support helps us reach a
                wider audience and promote the beauty of Indian classical dance.
              </p>
            </div>

            <div className="row justify-content-center">
              <div className="col-md-4 col-sm-6">
                <div className="card text-center">
                  <div className="card-body">
                    <a
                      className="text-decoration-none"
                      href="https://www.facebook.com/kalasindhuacademy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={facebook}
                        alt="Facebook"
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                          borderRadius: "50%",
                          border: "2px solid #007bff",
                          padding: "5px",
                        }}
                      />
                      <p className="mt-2 text-primary">Facebook</p>
                    </a>
                    <a
                      className="btn btn-primary mt-3"
                      href="https://www.facebook.com/kalasindhuacademy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Follow Us on Facebook
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="elfsight-app-6be1bfd9-94f3-43ec-aa7f-e3cd4ef106e1"
                data-elfsight-app-lazy
              ></div>
              <div className="col-md-4 col-sm-6">
                <div className="social-icon text-center text-danger">
                  <a
                    className="text-decoration-none social-icon text-danger"
                    href="https://www.youtube.com/@kalasindhuacademyofdancean1324"
                  >
                    {/* <i className="bi bi-youtube fs-1"></i>
                    <p>YouTube</p> */}
                  </a>
                </div>
              </div>
              <div
                className="elfsight-app-817dc0c9-2251-4808-88b7-7d28766289b4"
                data-elfsight-app-lazy
              ></div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default Support;
