import React, { useEffect, useState } from "react";
import "./styles/test3.styles.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Test3 = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const div = document.getElementById("dynamicDiv-1");
      const offsetTop = div.offsetTop;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      // Calculate the distance between the top of the div and the top of the viewport
      const distanceFromTop = offsetTop - scrollTop;
      console.log(offsetTop, scrollTop, distanceFromTop);
      // Check if the div is within a particular range from the top of the viewport
      if (scrollTop >= 0 && scrollTop <= 150) {
        setIsVisible(true); // Display the div if it's within the desired range
      } else {
        setIsVisible(false); // Hide the div if it's outside the desired range
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to run the effect only once

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div className="section-z">
        <h1 className="heading-z" style={{ fontSize: "4em" }}>
          Poornima Gururaja
        </h1>
        <section className="section-3">
          <div
            id="dynamicDiv-1"
            style={isVisible ? { display: "block" } : { display: "none" }}
          >
            <p
              className="text-center text-red"
              data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
              style={{
                color: "white",
                paddingTop: "6em",
                fontSize: "5em",
                fontWeight: 800,
                fontFamily: "Oswald",
              }}
            >
              FOUNDER - DIRECTOR
            </p>
          </div>
        </section>

        <section className="section-3">
          <div>
            <p
              className="text-center"
              data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
              style={{
                paddingTop: "6em",
                color: "white",
                fontSize: "5em",
                fontWeight: 800,
                fontFamily: "Oswald",
              }}
            >
              Teacher
            </p>
          </div>
        </section>
        <section className="section-3">
          <div>
            <p
              className="text-center"
              style={{
                paddingTop: "6em",
                color: "white",
                fontSize: "5em",
                fontWeight: 800,
                fontFamily: "Oswald",
              }}
            >
              Choreographer
            </p>
          </div>
        </section>
        <section className="section-3">
          <div>
            <p
              className="text-center"
              style={{
                paddingTop: "6em",
                color: "white",
                fontSize: "5em",
                fontWeight: 800,
                fontFamily: "Oswald",
              }}
            >
              Nattuvanar
            </p>
          </div>
        </section>

        <section className="section-3">
          <div>
            <p
              className="text-center"
              style={{
                paddingTop: "6em",
                color: "white",
                fontSize: "5em",
                fontWeight: 800,
                fontFamily: "Oswald",
              }}
            >
              Organizer
            </p>
          </div>
        </section>

        <section className="section-3">
          <div>
            <p
              className="text-center"
              style={{
                paddingTop: "6em",
                color: "white",
                fontSize: "5em",
                fontWeight: 800,
                fontFamily: "Oswald",
              }}
            >
              Nattuvanar
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Test3;
