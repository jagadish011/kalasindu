import React, { useEffect } from "react";
import facebook from "../assets/images/Collobaration1.png";
// import "../assets/styles/core.css";
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
      <div style={{ backgroundColor: "#E8E5E7" }}>
        <div className="section-1">
          <div className="support-overlay ">
            <h1
              style={{
                fontFamily: "Oswald",
              }}
            >
              Support Us
            </h1>
            <a href="#support-details" className="rounded fw-bold s-button">
              Learn how to support us
            </a>
          </div>
        </div>

        <section className="support-details">
          <div className="support-container">
            <h1 className="">Support us..</h1>
            <div className="support-list">
              <p className="support-list-items">By sponsoring us</p>
              <p className="">
                Support our Indian classical dance class by becoming a sponsor
                of our major festivals, Nirantara Narmada and Navarasa
                Navaratri. Your sponsorship in money and other kind will help
                promote, organize, and execute these cultural events while
                gaining exposure for your brand. Kalasindhu has a provision of
                section 80 G under the Income tax act of India.
              </p>
            </div>

            <div className="support-list">
              <p className="support-list-items">By Donating</p>
              <p>
                Contribute to our dance class and festivals through donations.
                Your generosity directly supports our mission of providing
                high-quality dance education and cultural programming.
              </p>
            </div>

            <div className="support-list">
              <p className="support-list-items">
                By Following us on social media{" "}
              </p>
              <p>
                Stay connected with us on Instagram, Facebook, and YouTube for
                exclusive updates, behind-the-scenes content, aesthetic dance
                videos, and event announcements. Your support helps us reach a
                wider audience and promote the beauty of Indian classical dance.
              </p>
            </div>
          </div>

          <div className="support-social-card">
            <div className="support-f-i">
              <div className="support-facebook">
                <div className="facebook-container">
                  <div className="facebook-body text-center">
                    <a
                      href="https://www.facebook.com/kalasindhuacademy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none"
                    >
                      <img
                        src={facebook}
                        alt="Facebook"
                        className="facebook-image"
                      />
                      <p className="mt-2 text-primary">Facebook</p>
                    </a>
                    <a
                      href="https://www.facebook.com/kalasindhuacademy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary mt-3"
                    >
                      Follow Us on Facebook
                    </a>
                  </div>
                </div>
              </div>
              <div className="support-instagram">
                <div
                  className="elfsight-app-6be1bfd9-94f3-43ec-aa7f-e3cd4ef106e1"
                  data-elfsight-app-lazy
                ></div>
              </div>
            </div>

            <div className="support-youtube">
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
