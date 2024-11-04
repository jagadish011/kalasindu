import React, { useState, useEffect } from "react";
import "../assets/styles/core.css";
import heroImg from "../assets/images/rsc.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Team from "../components/Team";
import Testimonial from "../components/Testimonial";
import bgImg from "../assets/images/why.png";
import Hcard1 from "../assets/images/1686985130886 1.png";
import Hcard2 from "../assets/images/DSC_5311 1.png";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import "aos/dist/aos.css";
import AOS from "aos";
import CountdownCard from "../components/CountdownCard";
import { Link } from "react-router-dom";
import EventsCard from "./EventsCards";

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  const targetDate = "June 20, 2024 06:00:00";
  const [countdown, setCountdown] = useState({
    days: "28",
    hours: "12",
    minutes: "30",
    seconds: "50",
  });
  const [knowAboutUs, setKnowAboutUs] = useState();

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      console.log(windowWidth);

      if (windowWidth < 990) {
        setKnowAboutUs(true);
      } else {
        setKnowAboutUs(false);
      }
    };

    // Run once on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const eventDate = new Date(targetDate).getTime();
      const timeRemaining = eventDate - now;

      const days = String(
        Math.floor(timeRemaining / (1000 * 60 * 60 * 24))
      ).padStart(2, "0");
      const hours = String(
        Math.floor((timeRemaining / (1000 * 60 * 60)) % 24)
      ).padStart(2, "0");
      const minutes = String(
        Math.floor((timeRemaining / 1000 / 60) % 60)
      ).padStart(2, "0");
      const seconds = String(Math.floor((timeRemaining / 1000) % 60)).padStart(
        2,
        "0"
      );

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  function getTimeUntilTargetDate(targetDateString) {
    // Get the current date and time
    var now = new Date();
    console.log(targetDateString);

    // Parse the target date string into a Date object
    var targetDate = new Date(targetDateString);

    // Calculate the difference in milliseconds between the two dates
    var difference = targetDate - now;

    // Convert milliseconds to days, hours, minutes, and seconds
    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  const [timer, setTimer] = useState({
    days: 24,
    hours: 10,
    minutes: 30,
    seconds: 40,
  });

  useEffect(() => {
    let time = getTimeUntilTargetDate("2024-06-20 06:00:00");
    console.log(time);
    setTimer(getTimeUntilTargetDate("2024-06-20 06:00:00"));
  }, []);

  return (
    <>
      <Navbar active={"Home"} />

      <div style={{ overflow: "hidden", backgroundColor: "#E8E5E7" }}>
        <section
          className="hero-wrapper position-relative"
          // style={{ height: "84vh", overflow: "hidden" }}
        >
          <img
            src={heroImg}
            className="img-fluid w-100"
            alt="Hero Image"
            // style={{ height: "80vh", objectFit: "cover" }}
          />

          <div className="hero-overlay">
            <div className="text-white hero-links h-25 fw-bolder icons">
              <a
                href="https://www.facebook.com/kalasindhuacademy"
                className="text-white social-icon"
              >
                <FaFacebook className="homeIcon" />
              </a>
              <a
                href="https://www.instagram.com/kalasindhu_academy/"
                className="social-icon  text-white"
              >
                <RiInstagramFill className="homeIcon " />
              </a>
              <a
                href="https://www.youtube.com/@kalasindhuacademyofdancean1324"
                className=" social-icon text-white"
              >
                <FaYoutube className="homeIcon " />
              </a>
            </div>

            <div className="d-flex flex-column justify-content-end">
              <div className="hero-content d-flex flex-column justify-content-center">
                <p className="main-heading d-block">
                  Parampara is like an umbilical cord that connects dancers to
                  the beginnings of their art form.
                </p>
                <span className="main-heading d-block text-end d-sm-fs-6">
                  - Poornima Gururaja
                </span>
              </div>
            </div>
          </div>
        </section>
        <CountdownCard targetDate="2024-06-22T18:00:00" />

        {/* cards */}
        <section className="section">
          <h1 className="title">What's New?</h1>
          <div className="whats-new-cards">
            <div className="d-flex justify-content-center align-items-center vh-50">
              {/* <p
                className="text-center fw-bold p-3"
                style={{ color: "#fcb541", fontSize: "1.5rem" }}
              >
                No events available at the moment. Stay tuned for upcoming
                events!
              </p> */}
            </div>
            <EventsCard
              eventLink="/events2?event=1"
              imgSrc={Hcard1}
              title="Ekadasha Rudra"
              artist="Artists: 5 Renowned artists"
              date="Saturday, June 22nd, 2024"
              time="6:00 PM"
              location="Chowdiah Memorial Hall, Benguluru"
              price="₹ 500 onwards"
            />
            <EventsCard
              eventLink="/events2?event=2"
              imgSrc={Hcard2}
              title="Rangapravesha"
              artist="Artist: Kum. Aarabhi Anand"
              date="Friday, July 26th, 2024"
              time="6:30 PM"
              location="JSS auditorium, Jayanagar, Bangalore"
              price="FREE"
            />
            {/* Add more EventsCard components here */}
          </div>
        </section>

        {/* <!-- why --> */}
        <section
          className="why-kalasindhu container-fluid"
          style={{
            backgroundImage: `url(${bgImg})`,
          }}
        >
          <div className="drop-down container">
            <div className="why-us-main">
              <div className="why-content col-lg-7 col-md-6 col-sm-12">
                <div>
                  <p
                    className="why-k text-white fw-bold"
                    style={{ fontFamily: "Oswald" }}
                  >
                    Why choose Kalasindhu Academy?
                  </p>
                  {!knowAboutUs && (
                    <div>
                      <Link
                        to="/about"
                        className="why-btn btn btn-lg btn-dark rounded mt-4 "
                        style={{
                          background: "#FCB541",
                          fontFamily: "Open Sans",
                          fontWeight: "bold",
                          color: "black",
                          marginBottom: "2em",
                        }}
                      >
                        Know more about us
                      </Link>
                    </div>
                  )}
                </div>
              </div>

              <div className="col-lg-5 col-md-10  ">
                <div
                  className="accordion font-weight-bold"
                  style={{
                    border: "none",
                    fontFamily: "Open Sans",
                    fontWeight: "600",
                  }}
                  id="accordionExample"
                >
                  <div className="accordion-item" style={{ borderRadius: 20 }}>
                    <h2
                      className="accordion-header"
                      style={{ border: "none" }}
                      id="headingOne"
                    >
                      <button
                        className="accordion-button fw-bold"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <span
                          className="fs-4 me-2"
                          style={{
                            fontFamily: "Inter",
                            fontWeight: 600,
                            color: "rgba(255, 255, 255, 0.71)",
                          }}
                        >
                          01
                        </span>
                        <span
                          style={{
                            marginLeft: "2em",
                            fontFamily: "Open Sans",
                            fontWeight: 600,
                            color: "rgba(232, 229, 231, 1)",
                            fontSize: "1em",
                          }}
                        >
                          Theoretical Knowledge
                        </span>
                      </button>
                    </h2>

                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      style={{ border: "none" }}
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p
                          style={{ fontFamily: "Open Sans", fontSize: ".8em" }}
                        >
                          From a young age,students are taught to embrace the
                          fusion of practical knowledge and theory in dance.they
                          are immersed in studying dance texts, crafting their
                          own narratives, and continuously expanding her
                          understanding of various literary works and texts.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="accordion-item"
                    style={{
                      borderRadius: 20,
                      border: "1px solid white",
                      marginTop: "0.25em",
                    }}
                  >
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed fw-bold"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <span
                          className="fs-4 me-2"
                          style={{
                            fontFamily: "Inter",
                            fontWeight: 600,
                            color: "rgba(255, 255, 255, 0.71)",
                          }}
                        >
                          02
                        </span>
                        <span
                          style={{
                            marginLeft: "2em",
                            fontFamily: "Open Sans",
                            fontWeight: 600,
                            color: "rgba(232, 229, 231, 1)",
                            fontSize: "1cem",
                          }}
                        >
                          Practicals
                        </span>
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p
                          style={{ fontFamily: "Open Sans", fontSize: ".8em" }}
                        >
                          Bharatanatyam, a comprehensive art form, encompasses
                          nritta(pure dance and movement vocabulary), and
                          abhinaya(expressions and enactment of emotions), all
                          intricately taught with meticulousness and ensuring
                          attention to every minute detail.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="accordion-item"
                    style={{
                      borderRadius: 20,
                      border: "1px solid white",
                      marginTop: "0.25em",
                    }}
                  >
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed fw-bold"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        <span
                          className="fs-4 me-2"
                          style={{
                            fontFamily: "Inter",
                            fontWeight: 600,
                            color: "rgba(255, 255, 255, 0.71)",
                          }}
                        >
                          03
                        </span>
                        <span
                          style={{
                            marginLeft: "2em",
                            fontFamily: "Open Sans",
                            fontWeight: 600,
                            color: "rgba(232, 229, 231, 1)",
                            fontSize: "1em",
                          }}
                        >
                          Lifestyle & discipline
                        </span>
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p
                          style={{ fontFamily: "Open Sans", fontSize: ".8em" }}
                        >
                          Kalasindhu instills discipline in students' lives by
                          emphasizing decorum in classNameand practice,
                          fostering a respectful understanding of their bodies
                          through yoga, exercises, and regular guidance
                          counseling. The focus is on promoting personal growth
                          and well-being.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="accordion-item"
                    style={{
                      borderRadius: 20,
                      border: "1px solid white",
                      marginTop: "0.25em",
                    }}
                  >
                    <h2 className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button collapsed fw-bold"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        <span
                          className="fs-4 me-2"
                          style={{
                            fontFamily: "Inter",
                            fontWeight: 600,
                            color: "rgba(255, 255, 255, 0.71)",
                          }}
                        >
                          04
                        </span>
                        <span
                          style={{
                            marginLeft: "2em",
                            fontFamily: "Open Sans",
                            fontWeight: 600,
                            color: "rgba(232, 229, 231, 1)",
                            fontSize: "1em",
                          }}
                        >
                          Music and Sanskrit
                        </span>
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p
                          style={{ fontFamily: "Open Sans", fontSize: ".8em" }}
                        >
                          Kalasindhu nurtures the connection between dance,
                          music, and literature, emphasizing the importance of
                          Sanskrit and musicality in enhancing Nritya. By
                          integrating these elements into the curriculum,
                          students develop a profound understanding of
                          expression and cultivate their ability to showcase it
                          through dance.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="accordion-item"
                    style={{
                      borderRadius: 20,
                      border: "1px solid white",
                      marginTop: "0.25em",
                    }}
                  >
                    <h2 className="accordion-header" id="headingFive">
                      <button
                        className="accordion-button collapsed fw-bold"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        <span
                          className="fs-4 me-2"
                          style={{
                            fontFamily: "Inter",
                            fontWeight: 600,
                            color: "rgba(255, 255, 255, 0.71)",
                          }}
                        >
                          05
                        </span>
                        <span
                          style={{
                            marginLeft: "2em",
                            fontFamily: "Open Sans",
                            fontWeight: 600,
                            color: "rgba(232, 229, 231, 1)",
                            fontSize: "1em",
                          }}
                        >
                          Guru Shishya Parampara
                        </span>
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p
                          style={{ fontFamily: "Open Sans", fontSize: ".8em" }}
                        >
                          Illustrative Tanjavur style of Bharatanatyam is a
                          unifying force in the pedagogy at Kalasindhu. Rooted
                          in the paramparic tradition, we adhere to authentic
                          dance repertoire and training methods, instilling a
                          sense of reverence for our gurus and their lineage.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="accordion-item"
                    style={{
                      borderRadius: 20,
                      border: "1px solid white",
                      marginTop: "0.25em",
                    }}
                  >
                    <h2 className="accordion-header" id="headingsix">
                      <button
                        className="accordion-button collapsed fw-bold"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsesix"
                        aria-expanded="false"
                        aria-controls="collapsesix"
                      >
                        <span
                          className="fs-4 me-2"
                          style={{
                            fontFamily: "Inter",
                            fontWeight: 600,
                            color: "rgba(255, 255, 255, 0.71)",
                          }}
                        >
                          06
                        </span>
                        <span
                          style={{
                            marginLeft: "2em",
                            fontFamily: "Open Sans",
                            fontWeight: 600,
                            color: "rgba(232, 229, 231, 1)",
                            fontSize: "1em",
                          }}
                        >
                          Culture and traditions
                        </span>
                      </button>
                    </h2>
                    <div
                      id="collapsesix"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingsix"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body pb-5">
                        <p
                          style={{ fontFamily: "Open Sans", fontSize: ".8em" }}
                        >
                          At Kalasindhu, the significance of Indian rituals and
                          festivals is celebrated, with an emphasis on
                          explaining the scientific and logical aspects behind
                          our traditions to children. By encouraging their
                          active participation, welcoming questions, and
                          facilitating discussions, these experiences become
                          enjoyable opportunities for learning.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {knowAboutUs && (
              <div>
                <Link
                  to="/about"
                  className="why-btn btn btn-lg btn-dark rounded mt-4 "
                  style={{
                    width: "100%",
                    background: "#FCB541",
                    fontFamily: "Open Sans",
                    fontWeight: "bold",
                    color: "black",
                    marginBottom: "2em",
                  }}
                >
                  Know more about us
                </Link>
              </div>
            )}
          </div>
        </section>

        <Team />
        <Testimonial />

        {/* <!-- video --> */}
        <section
          className="container-fluid d-flex flex-column justify-content-start h-100"
          style={{
            backgroundColor: "rgb(14, 14, 14)",
            paddingTop: "1.5em",
            minHeight: "100%",
            padding: "30px 0",
          }}
        >
          <div className="video container p-3">
            <h2
              className="text-center"
              style={{
                color: "white",
                fontFamily: "Oswald",
                fontWeight: "bold",
              }}
            >
              Glimpse of Kalasindhu
            </h2>
            <div className="d-flex justify-content-center mt-5">
              <iframe
                width="90%"
                height="600px"
                src="https://www.youtube.com/embed/7kHndQCyo-0?si=wqOElZrfyXdZPufo"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </section>

        {/* <!-- contact --> */}
        <section
          style={{
            backgroundColor: "#330A0A",
            paddingTop: "3.5em",
            paddingBottom: "4em",
          }}
        >
          <h1
            className="contact-us text-start mb-4 "
            // style={{
            //   color: "#C59E70",
            //   fontFamily: "Oswald",
            //   fontSize: "4.5em",
            //   marginLeft: "1em",
            // }}
          >
            Pick one way to get in touch..
          </h1>
          <div className="container-fluid p-md-5 p-lg-5 p-xl-5 p-2 map">
            {/* Left side content */}
            <div className="mb-5 mb-lg-0 ">
              <div className="contact-us-details">
                <ul className="list-unstyled display-4">
                  <li>
                    <a
                      href="https://wa.me/9731098227"
                      className="text-white d-flex align-items-center text-decoration-none"
                    >
                      <div className="fs-1 me-lg-3 mb-lg-0 mb-2">
                        <IoCall className="c-icons" /> {/* Icon */}
                      </div>
                      <div className="icons-text">
                        Whatsapp us or call us at <u> +91 9731098227</u>{" "}
                        {/* Content */}
                      </div>
                    </a>
                  </li>

                  <li>
                    <a
                      href="mailto:Kalasindhu@gmail.com"
                      className="text-white  d-flex align-items-center text-decoration-none"
                    >
                      <div className="fs-1 me-lg-3 mb-lg-0 mb-2 py-md-5 py-lg-5 py-2">
                        <IoIosMail className="c-icons" />
                        {/* Icon */}
                      </div>
                      <div className="icons-text ">
                        If you are old school, then email us at
                        <u> Kalasindhu@gmail.com</u> {/* Content */}
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/kalasindhu_academy/ "
                      className="text-white  d-flex align-items-center text-decoration-none"
                    >
                      <div className="fs-1 me-lg-3 mb-lg-0 mb-2">
                        <AiFillInstagram className="c-icons" /> {/* Icon */}
                      </div>
                      <div className="icons-text">
                        Social media lover? Stalk our page and DM us on
                        <u> Instagram</u> {/* Content */}
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right side map */}
            <div className="responsive-iframe-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.610553407524!2d77.55541367472718!3d12.932733715729922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e2615f2180b%3A0x36301a3a3787ae2a!2sKalasindhu%20Academy%20for%20Dance%20and%20Related%20Arts!5e0!3m2!1sen!2sin!4v1690896701490!5m2!1sen!2sin"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className="text-center rounded"
              ></iframe>
              <p className="responsive-text">
                Come visit us at this location. We are open on Mondays,
                Wednesdays, and Fridays from 5 pm to 8 pm and on weekends.
              </p>
            </div>
          </div>

          <div className="container-fluid px-5">
            <div className="container-fluid-card ">
              <div className="mb-lg-2 mt-3">
                <b className="community-title">Kalasindhu Community</b>
                <p className=" community-description">
                  Join our Whatsapp community and never miss any update on our
                  workshops or events
                </p>
              </div>
              <div className="whatsapp-button d-flex align-items-center text-center">
                <a
                  href="https://chat.whatsapp.com/BteZTyeTlnl1UrKNgc1i6g"
                  className="join-button"
                >
                  Join Whatsapp Group
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default Home;
