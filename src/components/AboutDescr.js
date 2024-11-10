import React, { useEffect } from "react";
// import "../assets/styles/core.css";
import abtImg from "../assets/images/abt2.png";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
import "./abouthere.css";

const AboutDescr = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="" style={{ position: "relative" }}>
        <div
          className=" "
          style={{
            backgroundImage: `url(${abtImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
              // justifyContent: "center",
            }}
            className="customized-height"
          >
            <h1
              className="text-center font-weight-bold"
              style={{
                fontFamily: "Oswald",
                color: "white",
              }}
            >
              About Kalasindhu
            </h1>
            <div className="about-container para">
              <p
                className="text-center text-white"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <span>
                  Kalasindhu, the esteemed Academy of Dance and Related Arts, is
                  passionately committed to the preservation and promotion of
                  Indian arts and culture. Nestled in the vibrant city of
                  Banashankari, Bangalore, India, this renowned institution
                  serves as a
                </span>{" "}
                <br />
                <span>beacon for artistic excellence.</span> <br />
                <span>
                  At Kalasindhu, a comprehensive and integrated approach to
                  education is offered, encompassing the rich tapestry of
                  classical arts, including dance, music, visual art, and
                  Sanskrit. However, it is dance that takes center stage,
                  receiving the utmost attention and focus.
                </span>{" "}
                <br />
                <span>
                  Within the premises of Kalasindhu, a sprawling expanse has
                  been dedicated to cultivating an environment that nurtures
                  creativity, catering to individuals of all ages, be it
                  children or adults. The space is thoughtfully designed,
                  encompassing a serene ambiance that stimulates the artistic
                  spirit.
                </span>{" "}
                <br />
                <span>
                  Through its unwavering dedication, Kalasindhu continues to
                  inspire generations, fostering a deep appreciation for Indian
                  arts and culture while instilling a lifelong love for dance
                  and its many facets.
                </span>
              </p>
            </div>
          </div>

          <section
            className="stats-section"
            style={{
              background: "#003D1B",
              borderTopRightRadius: "25px",
              borderTopLeftRadius: "25px",
              padding: "25px",
            }}
          >
            <div className="container">
              <div className="text-white stats-grid fw-semibold">
                <div className="">
                  <div className="stat-item text-center fs-2 text-white">
                    <CountUp end={150} duration={5.5} /> +
                    <p className="fs-3">Students</p>
                  </div>
                </div>
                <div className="">
                  <div className="stat-item text-center fs-2 text-white">
                    <CountUp end={300} duration={5.5} /> +
                    <p className="fs-3">Performances</p>
                  </div>
                </div>
                <div className="">
                  <div className="stat-item text-center fs-2 text-white">
                    <CountUp end={30} duration={5.5} /> +
                    <p className="fs-3">Arangetrums</p>
                  </div>
                </div>
                <div className="">
                  <div className="stat-item text-center fs-2 text-white">
                    <CountUp end={20} duration={3.5} /> +
                    <p className="fs-3">Productions</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div
          className="awards text-center "
          style={{
            background: "#003D1B",
            padding: "1em",
            color: "white",
          }}
        >
          <h1
            className="fw-bolder"
            style={{ fontSize: "48px", fontFamily: "Oswald", color: "white" }}
          >
            Awards
          </h1>
          <p
           style={{color:"white"}}
            data-aos="fade-up"
            data-aos-duration="1700"
            className="mt-4 w-80 mx-2"
          >
            Poornima Gururaja, a highly acclaimed dance artist, has received
            several prestigious awards and recognitions throughout her
            illustrious career. Some of these include the Natya Kala Koushal
            from Sanatana Kalakshetra, Kempegowda Award from Bruhat Bengaluru
            Mahanagara Palike,  Puttashree Award, Nartana Nipuna Award from
            Karnataka Nrutyakala Parishad, and Natya Rathna from Nrutyollasa
            Rochester, among many others. In addition to her accolades, Poornima
            Gururaja holds prominent professional affiliations. She serves as
            the Secretary for Karnataka Nritya Kala Parishad, plays the vital
            role of Festival Coordinator for Delhi INternational arts festival,
            and currently holds the esteemed position of Chairperson of the
            Textbook Committee for dance books in Karnataka. Her involvement in
            these influential roles further underscores her commitment to the
            promotion and preservation of dance.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutDescr;
