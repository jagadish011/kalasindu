import React, { useEffect, useState } from "react";
import "./styles/test3.styles.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Test3 = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isVisibleTeacher, setIsVisibleTeacher] = useState(true);
  const [isVisibleChoreographer, setIsVisibleChoreographer] = useState(true);
  const [isVisibleNattuvanar, setIsVisibleNattuvanar] = useState(true);
  const [isVisibleOrganizer, setIsVisibleOrganizer] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const div = document.getElementById("dynamicDiv-1");
      const offsetTop = div.offsetTop;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      // Calculate the distance between the top of the div and the top of the viewport
      const distanceFromTop = offsetTop - scrollTop;
      console.log(offsetTop, scrollTop, distanceFromTop);
      // Check if the div is within a particular range from the top of the viewport
      if (scrollTop >= 0 && scrollTop <= 105) {
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
    const handleScrollTeacher = () => {
      const div = document.getElementById("dynamicDiv-2");
      const offsetTop1 = div.offsetTop1;
      const scrollTop1 = window.scrollY || document.documentElement.scrollTop1;

      // Calculate the distance between the top of the div and the top of the viewport
      const distanceFromTop1 = offsetTop1 - scrollTop1;
      console.log(offsetTop1, scrollTop1, distanceFromTop1);
      // Check if the div is within a particular range from the top of the viewport
      if (scrollTop1 >= 0 && scrollTop1 <= 420) {
        setIsVisibleTeacher(true); // Display the div if it's within the desired range
      } else {
        setIsVisibleTeacher(false); // Hide the div if it's outside the desired range
      }
    };
    window.addEventListener("scroll", handleScrollTeacher);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScrollTeacher);
    };
  }, []);

  useEffect(() => {
    const handleScrollChoreographer = () => {
      const div = document.getElementById("dynamicDiv-3");
      const offsetTop2 = div.offsetTop2;
      const scrollTop2 = window.scrollY || document.documentElement.scrollTop2;
      const distanceFromTop2 = offsetTop2 - scrollTop2;
      console.log(offsetTop2, scrollTop2, distanceFromTop2);
      if (scrollTop2 >= 0 && scrollTop2 <= 945) {
        setIsVisibleChoreographer(true);
      } else {
        setIsVisibleChoreographer(false);
      }
    };
    window.addEventListener("scroll", handleScrollChoreographer);
    return () => {
      window.removeEventListener("scroll", handleScrollChoreographer);
    };
  });

  useEffect(() => {
    const handleScrollNattuvanar = () => {
      const div = document.getElementById("dynamicDiv-4");
      const offsetTop3 = div.offsetTop3;
      const scrollTop3 = window.scrollY || document.documentElement.scrollTop3;
      const distanceFromTop3 = offsetTop3 - scrollTop3;
      console.log(offsetTop3, scrollTop3, distanceFromTop3);
      if (scrollTop3 >= 0 && scrollTop3 <= 1470) {
        setIsVisibleNattuvanar(true);
      } else {
        setIsVisibleNattuvanar(false);
      }
    };
    window.addEventListener("scroll", handleScrollNattuvanar);
    return () => {
      window.removeEventListener("scroll", handleScrollNattuvanar);
    };
  });

  useEffect(() => {
    const handleScrollOrganizer = () => {
      const div = document.getElementById("dynamicDiv-5");
      const offsetTop4 = div.offsetTop4;
      const scrollTop4 = window.scrollY || document.documentElement.scrollTop4;
      const distanceFromTop4 = offsetTop4 - scrollTop4;
      console.log(offsetTop4, scrollTop4, distanceFromTop4);
      if (scrollTop4 >= 0 && scrollTop4 <= 3500) {
        setIsVisibleOrganizer(true);
      } else {
        setIsVisibleOrganizer(false);
      }
    };
    window.addEventListener("scroll", handleScrollOrganizer);
    return () => {
      window.removeEventListener("scroll", handleScrollOrganizer);
    };
  });

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
              className="text-center"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
              style={{
                color: "white",
                paddingTop: "4.8em",
                fontSize: "5em",
                fontWeight: 800,
                fontFamily: "Oswald",
              }}
            >
              FOUNDER - DIRECTOR
            </p>
            <p
              className=" text-black "
              style={{ paddingTop: "4em", position: "fixed" }}
            >
              Poornima Gururaja is an exponent of the Pandanallur/Tanjore School
              of dance, a disciple of Guru Smt. Narmada who trained under the
              legendary Guru Sri Kittappa Pillai of Tanjore.She is the founder
              and artistic director of the Pallavi School performing arts, based
              in Boston.She founded the Kalasindhu Academy of Dance and Related
              Arts in 2009.Poornima Gururaja holds an MBA from Brandeis
              University, USA and has worked as a marketing professional at
              Hewlett Packard.
            </p>
          </div>
        </section>

        <section className="section-3">
          <div
            id="dynamicDiv-2"
            style={
              isVisibleTeacher ? { display: "block" } : { display: "none" }
            }
          >
            <p
              className="text-center"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
              style={{
                paddingTop: "2em",
                color: "white",
                fontSize: "5em",
                fontWeight: 800,
                fontFamily: "Oswald",
              }}
            >
              Teacher
            </p>
            <p className=" text-black " style={{ paddingTop: "10em" }}>
              Poornima Gururaja is a beloved teacher and visionary in arts
              education, renowned for her patience and commitment to cultivating
              discipline and lifelong appreciation for the arts. She embraces
              cultural roots, encourages exploration, and empowers students to
              reach their artistic potential. Poornima's impact extends beyond
              the classroom, inspiring a love for good art and shaping the lives
              of her students as lifelong learners.
            </p>
          </div>
        </section>

        <section className="section-3">
          <div
            id="dynamicDiv-3"
            style={
              isVisibleChoreographer
                ? { display: "block" }
                : { display: "none" }
            }
          >
            <p
              className="text-center"
              style={{
                paddingTop: "1.3em",
                color: "white",
                fontSize: "5em",
                fontWeight: 800,
                fontFamily: "Oswald",
              }}
            >
              Choreographer
            </p>
            <p className=" text-black " style={{ paddingTop: "12em" }}>
              Poornima Gururaja's choreographies are renowned for their critical
              acclaim, authenticity, vibrant colors, and inherent appeal to
              children. Her productions are based on authentic sources, ensuring
              a rich and genuine representation of the art form. With her
              meticulous attention to detail and creative vision, Poornima's
              choreographies are filled with splendor, capturing the essence of
              prosperity and captivating the hearts of audiences, especially
              children.
            </p>
          </div>
        </section>

        <section className="section-3">
          <div
            id="dynamicDiv-4"
            style={
              isVisibleNattuvanar ? { display: "block" } : { display: "none" }
            }
          >
            <p
              className="text-center"
              style={{
                paddingTop: "1em",
                color: "white",
                fontSize: "5em",
                fontWeight: 800,
                fontFamily: "Oswald",
              }}
            >
              Nattuvanar
            </p>
            <p className=" text-black " style={{ paddingTop: "12em" }}>
              Poornima Gururaja is a beloved teacher and visionary in arts
              education, renowned for her patience and commitment to cultivating
              discipline and lifelong appreciation for the arts. She embraces
              cultural roots, encourages exploration, and empowers students to
              reach their artistic potential. Poornima's impact extends beyond
              the classroom, inspiring a love for good art and shaping the lives
              of her students as lifelong learners.
            </p>
          </div>
        </section>

        <section className="section-3">
          <div
            id="dynamicDiv-5"
            style={
              isVisibleOrganizer ? { display: "block" } : { display: "none" }
            }
          >
            <p
              className="text-center"
              style={{
                paddingTop: "1.7em",
                color: "white",
                fontSize: "5em",
                fontWeight: 800,
                fontFamily: "Oswald",
              }}
            >
              Organizer
            </p>
            <p className=" text-black " style={{ paddingTop: "6em" }}>
              Poornima Gururaja, a skilled organizer, has curated prestigious
              events featuring renowned dancers from India and beyond. Through
              annual celebrations like Nirantara Narmada and Navarasa Navaratri,
              along with seminars and workshops, she has fostered connections
              between aspiring artists and established professionals. With 16
              years of festival organizing experience, Poornima has provided
              valuable opportunities and remunerations for young talents,
              showcasing her remarkable resourcefulness.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Test3;
