import React, { useEffect, useState } from "react";
import "./styles/test2.styles.css";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  FaArrowRightLong,
  FaIndianRupeeSign,
  FaRegClock,
} from "react-icons/fa6";
import AboutR from "../assets/images/events1 (1).png";
import A2 from "../assets/images/events2.png";
import { SlCalender } from "react-icons/sl";
import { IoLocationOutline } from "react-icons/io5";
import CountdownCard from "../components/CountdownCard";
import { useLocation } from "react-router-dom";

const Test2 = () => {
  const [event, setEvent] = useState(1);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedEvent = searchParams.get("event");

  useEffect(() => {
    if (selectedEvent) {
      setEvent(selectedEvent);
    }
  }, []);

  function getTimeUntilTargetDate(targetDateString) {
    const now = new Date().getTime();
    const targetDate = new Date(targetDateString).getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      return null;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  const targetDate = "2023-11-19T18:00:00"; // June 22nd, 2024, 6:00 PM

  const [timer, setTimer] = useState(getTimeUntilTargetDate(targetDate));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer(getTimeUntilTargetDate(targetDate));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timer]);

  const eventsData = [
    {
      imgUrl: AboutR,
      eventDate: "Saturday, June 22nd, 2024",
      eDate: "2024-09-24 20:00:00",
      time: "6:00 PM",
      location: "Chowdiah Memorial Hall, Benguluru",
      price: "500 onwards",
      desc: "In this concept, 11 embodiments of Lord Shiva is represented through 5 different classical dance styles- Bharatanatyam, Kathak, Mohiniyattam, Kuchipudi and Samudranatanam. Its a dance extravaganza with over 50 acclaimed dancers from across India. Come watch the concept production directed by Smt. Poornima Gururaja.",
    },
    {
      imgUrl: A2,
      eventDate: "Friday, July 26th, 2024",
      eDate: "2024-12-20 12:00:00",
      time: "6:30 PM",
      location: "JSS auditorium, Jayanagar, Bangalore",
      price: "Free",
      desc: "Aarabhi, with her dedication and grace, prepares for her upcoming Bharatnatyam rangapravesha. Her performance promises to mesmerize, blending tradition with innovation, inviting the audience on a captivating journey through the art form's rich heritage.",
    },
  ];

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      style={{
        background: "#0E0E0E",
      }}
    >
      <div className="sticky-container">
        <div className="left-1">
          <div className="mt-5">
            <h1
              style={{
                fontFamily: "Oswald",
                color: "#E7E7E7",
              }}
              className="font-weight-bold"
            >
              Upcoming Events
            </h1>
            <div
              className="d-flex flex-column mt-5"
              style={{ fontFamily: "Open Sans" }}
            >
              <div className="d-flex events-details">
                <div
                  style={
                    event == 1
                      ? {
                          color: "#FCB541",
                        }
                      : {
                          color: "white",
                        }
                  }
                >
                  <p className="events-details-p"
                    style={{
                      fontFamily: "Open Sans",
                    }}
                  >
                    22
                  </p>
                  <p className="events-details-d"
                    style={{
                      fontFamily: "Open Sans",
                    }}
                  >
                    Jun
                  </p>
                </div>

                <h4
                  className="ms-5 mt-3"
                  onClick={() => setEvent(1)}
                  style={
                    event == 1
                      ? { fontWeight: 700, color: "#FCB541", cursor: "pointer" }
                      : { fontWeight: 500, color: "#F5F5F5", cursor: "pointer" }
                  }
                >
                  Ekadasha Rudra <FaArrowRightLong className="ms-3" />
                </h4>
              </div>
              <div className="d-flex mt-5">
                <div
                  style={
                    event == 2
                      ? {
                          color: "#FCB541",
                        }
                      : {
                          color: "white",
                        }
                  }
                >
                  <p className="events-details-p"
                    style={{
                      fontFamily: "Open Sans",
                    }}
                  >
                    26
                  </p>
                  <p className="events-details-d"
                    style={{
                      fontFamily: "Open Sans",
                    }}
                  >
                    July
                  </p>
                </div>
                <h4
                  className="ms-5 mt-3"
                  style={
                    event == 2
                      ? { fontWeight: 700, color: "#FCB541", cursor: "pointer" }
                      : { fontWeight: 500, color: "#F5F5F5", cursor: "pointer" }
                  }
                  onClick={() => setEvent(2)}
                >
                  Rangapravesha <FaArrowRightLong className="ms-3" />
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="right-1">
          <div style={{}}>
            <div className="d-flex justify-content-center">
              <img
                src={eventsData[event - 1].imgUrl}
                style={{ height: "60vh" }}
              />
            </div>
            <div
              className="timer"
            >
              {timer ? (
                <div
                  className="timer-card"
                >
                  <div>
                    <p className="timer-card-time"
                      style={{
                        fontFamily: "Open Sans",
                      }}
                    >
                      {timer.days}
                    </p>
                    <p className="timer-card-d"
                      style={{
                        fontFamily: "Open Sans",
                      }}
                    >
                      Days
                    </p>
                  </div>
                  <div>
                    <p className="timer-card-time"
                      style={{
                        fontFamily: "Open Sans",
                      }}
                    >
                      {timer.hours}
                    </p>
                    <p className="timer-card-d"
                      style={{
                        fontFamily: "Open Sans",
                      }}
                    >
                      Hours
                    </p>
                  </div>
                  <div>
                    <p className="timer-card-time"
                      style={{
                        fontFamily: "Open Sans",
                      }}
                    >
                      {timer.minutes}
                    </p>
                    <p className="timer-card-d"
                      style={{
                        fontFamily: "Open Sans",
                      }}
                    >
                      Min
                    </p>
                  </div>
                  <div>
                    <p className="timer-card-time"
                      style={{
                        fontFamily: "Open Sans",
                      }}
                    >
                      {timer.seconds}
                    </p>
                    <p className="timer-card-d"
                      style={{
                        fontFamily: "Open Sans",
                      }}
                    >
                      Sec
                    </p>
                  </div>
                </div>
              ) : (
                <div
                  className="time-end"
                >
                  <div
                    className="time-end-card"
                  >
                    <p
                      style={{
                        fontFamily: "Open Sans",
                        fontWeight: 700,
                        fontSize: "1.5em",
                        margin: 0,
                      }}
                    >
                      Events are completed !
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div
              className="d-flex justify-content-center"
              style={{ marginBottom: "10em" }}
            >
              <div
                className="p-5"
                style={{
                  width: "100%",
                  maxWidth: "620px",
                  height: "auto",
                  color: "white",
                }}
              >
                <h3 className="d-flex justify-content-center align-items-center mt-4 mb-5">
                  Events Details
                </h3>
                <div className="d-flex-column justify-content-center align-items-center mt-3">
                  <div className="d-flex justify-content-start ">
                    <SlCalender className="mt-1" />{" "}
                    <p className="ms-2">{eventsData[event - 1].eventDate}</p>
                  </div>

                  <div className="d-flex justify-content-start ">
                    <FaRegClock className="mt-1" />{" "}
                    <p className="ms-2">{eventsData[event - 1].time}</p>
                  </div>

                  <div className="d-flex justify-content-start ">
                    <IoLocationOutline
                      className="mt-1"
                      style={{ fontSize: "22px" }}
                    />{" "}
                    <p className="ms-2">{eventsData[event - 1].location}</p>
                  </div>

                  <div className="d-flex justify-content-start ">
                    <FaIndianRupeeSign className="mt-1" />{" "}
                    <p className="ms-2">{eventsData[event - 1].price}</p>
                  </div>
                </div>
                <p>{eventsData[event - 1].desc}</p>
                <a
                  href=" https://chat.whatsapp.com/BteZTyeTlnl1UrKNgc1i6g"
                  className="btn btn-lg  rounded mt-5 py-3 px-3"
                  style={{
                    width: "auto",
                    background: "#FCB541",
                    fontFamily: "Open Sans",
                    fontWeight: "700",
                    color: "black",
                  }}
                >
                  Join Whatsapp group for updates
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test2;
