import React, { useEffect } from "react";
import EventsG1 from "../assets/images/eventsImage1.png";
import eveImg1 from "../assets/images/2008.png";
import eveImg2 from "../assets/images/2009.png";
import eveImg3 from "../assets/images/2010.png";
import eveImg40 from "../assets/images/2011.png";
import eveImg5 from "../assets/images/2012.png";
import eveImg6 from "../assets/images/2013.png";
import eveImg7 from "../assets/images/2014.png";
import eveImg8 from "../assets/images/2015.png";
import eveImg9 from "../assets/images/2016.png";
import eveImg10 from "../assets/images/2017.png";
import eveImg11 from "../assets/images/2018.png";
import eveImg12 from "../assets/images/2019.png";
import eveImg13 from "../assets/images/2020.png";
import eveImg14 from "../assets/images/2021.png";
import eveImg15 from "../assets/images/2022.png";
import eveImg16 from "../assets/images/2023.png";
import eveImg17 from "../assets/images/2024.png";
import EventsG2 from "../assets/images/EventsImg2.png";
import eveImg4 from "../assets/images/workshop.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Test2 from "./Test2";
import "./styles/event.styles.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Events2 = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const imagePaths = [
    eveImg1,
    eveImg2,
    eveImg3,
    eveImg40,
    eveImg5,
    eveImg6,
    eveImg7,
    eveImg8,
    eveImg9,
    eveImg10,
    eveImg11,
    eveImg12,
    eveImg13,
    eveImg14,
    eveImg15,
    eveImg16,
    eveImg17,
  ];
  const doubledImages = [...imagePaths, ...imagePaths];
  return (
    <div>
      <Navbar />
      <Test2 />

      <div className="section-2-1 box">
        <div className="content-box">
          <h1 className="custom-events2">
            Festivals of Kalasindhu
          </h1>
          <p
            className="custom-events display-1"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Kalasindhu has also been widely recognised for the festivals it
            organizes. These one of a kind festivals are a dancer’s dream, from
            upholding the Guru-Shishya Parampara to providing an exclusive stage
            for chamber concerts, we have covered it all
          </p>
        </div>
      </div>

      <div
        className="container-fluid section-navaratri"
        style={{ background: "#003D1B", overflow: "hidden" }}
      >
        <div
          className="navarasa-navaratri"
        >
          {/* Marquee section - Hidden on mobile */}
          <div className="d-none d-md-block">
            <div className="marquee-text">
              <marquee loop="infinite" className="marquee">
                Navaratri <span>Navarasa</span> Navaratri <span>Navarasa</span>{" "}
                Navaratri <span>Navarasa</span> Navaratri <span>Navarasa</span>{" "}
                Navaratri <span>Navarasa</span> <span>Navarasa</span> Navaratri{" "}
                <span>Navarasa</span> Navaratri <span>Navarasa</span> Navaratri{" "}
                <span>Navarasa</span> Navaratri
              </marquee>
            </div>
          </div>

          {/* Text section */}
          <div className="text-light text-section">
            <div className="text-content">
              <h3>Why we celebrate ?</h3>
              <p data-aos="fade-up" data-aos-duration="2000">
                Dasara, or Navaratri, stands as one of India's most revered
                festivals. At Kalasindhu, where we foster an environment
                cultivating arts and a sense of divinity in all our students, we
                enthusiastically immerse ourselves in celebrating this
                auspicious occasion through various artistic expressions.
              </p>
            </div>
            <div className="text-content">
              <h3>How we celebrate ?</h3>
              <p data-aos="fade-up" data-aos-duration="2000">
                At Kalasindhu, we believe in nurturing young talent by providing
                them with a platform to showcase their skills in intimate
                chamber concert settings. Every day there is a young and
                emerging artist performing and carrying out their Kala seva.
              </p>
            </div>
            <div className="text-content">
              <h3>When we celebrate ?</h3>
              <p data-aos="fade-up" data-aos-duration="2000">
                The festival is conducted every year during the Dasara festival
                time, concluding with a grand Vijayadashami celebration
                commencing a new beginning to the students art journey.
              </p>
            </div>
          </div>

          {/* Image section */}
          <div className="image-section">
            <h1 className="image-title">Navarasa Navaratri</h1>
            <img src={EventsG1} className="event-image" />
          </div>
        </div>
      </div>

      <div
        className="section-3"
        style={{
          background: "#003D1B",
          overflow: "hidden",
          paddingTop: "50px",
        }}
      >
        <div className="section-3-2">
          {/* Hide on mobile */}
          <div className="section-3-2-image">
            <img src={EventsG2} />
          </div>
          <div className="section-3-2-text">
            <h1>Nirantara Narmada</h1>

            <p className="navarasa-navaratri-text"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="2000"
            >
              One of the most popular festivals here at Kalasindhu is NIRANTARA
              NARMADA organized by Guru Poornima Gururaja in the loving memory
              of her dear Guru Narmada, in the first half of every year. This
              festival has staged nationally and internationally renowned
              artists such as Narthaki Natraj, Manju Bhargavi, Dominique Delorme
              and the list just goes on. Through this festival Guru Poornima
              Gururaja tries to inculcate and uphold “Guru-Shishya Parampara” in
              every dancer.
            </p>
          </div>
          {/* <section
            style={{ position: "relative", width: "20%", overflow: "hidden" }}
          >
            <div className="scroll text1">
              <div
                style={{
                  color: "#FCB541",
                  fontSize: "5em",
                  background: "#003D1B",
                  whiteSpace: "nowrap",
                  fontWeight: "900",
                  animation: "animate 40s linear infinite",
                  width: "250px",
                  height: "600px",
                }}
              >
                <marquee
                  loop="infinite"
                  style={{
                    height: "700px",
                    width: "700px",
                    transform:
                      "rotate(90deg) translateY(450px) translateX(-10px)",
                  }}
                >
                  Navaratri <span>Navarasa</span> Navaratri{" "}
                  <span>Navarasa</span> Navaratri <span>Navarasa</span>{" "}
                  Navaratri <span>Navarasa</span> Navaratri{" "}
                  <span>Navarasa</span> <span>Navarasa</span> Navaratri{" "}
                  <span>Navarasa</span> Navaratri
                </marquee>
              </div>
            </div>
          </section> */}
        </div>

        {/* Marquee for laptop view */}
        <marquee
          className="d-none d-md-none d-lg-flex"
          loop="infinite"
          style={{
            height: "13.5rem",
            width: "100%",
            marginTop: "3em",

            transform: "rotate(0deg) translateY(15px) translateX(2x)",
          }}
        >
          {doubledImages.map((image, index) => (
            <img key={index} src={image} style={{ height: "12.5rem" }} />
          ))}
        </marquee>
      </div>

      <section className="section-4">
        <div>
          <div className="container">
            <div className="row">
              <div className="section-4-1 col-lg-6" >
                <h1
                  className="text-white"
                  
                >
                  Workshops & other events
                </h1>
                <p 
                  className="text-white mt-3"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  At Kalasindhu, we encourage students to learn from a diverse
                  array of artists, thereby enhancing their knowledge of various
                  aspects of dance and other performing arts fields. From
                  traditional nattuvanars to Rajasthani folk dance masters,
                  Kalasindhu delights in hosting numerous artists who are
                  experts in their respective fields.
                </p>
                <div className="button-image">
                <a
                  href=" https://chat.whatsapp.com/BteZTyeTlnl1UrKNgc1i6g"
                  className="btn btn-lg  rounded py-3 px-3"

                >
                  Join Whatsapp group for updates
                </a>
                <div className="section-4-img col-lg-6 d-flex justify-content-center align-items-center mt-5 mt-lg-0">
                <img
                  src={eveImg4}
                  className="img-fluid"
                  alt="Hero Image"
                  // style={{ width: "80%" }}
                />
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Events2;
