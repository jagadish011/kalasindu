import React, { useState, useEffect } from "react";
import img1 from "../assets/images/Founder.png";
import img2 from "../assets/images/teacher.png";
import img3 from "../assets/images/choreographer.png";
import img4 from "../assets/images/nattuvanar.png";
import img5 from "../assets/images/organizer.png";
import "./SliderComponent.css";

function SliderComponent() {
  const [itemActive, setItemActive] = useState(0);
  const [refreshInterval, setRefreshInterval] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);
    setRefreshInterval(interval);

    return () => clearInterval(interval);
  }, [itemActive]);

  const nextSlide = () => {
    let nextIndex = itemActive + 1;
    if (nextIndex >= items.length) {
      nextIndex = 0;
    }
    setItemActive(nextIndex);
  };

  const prevSlide = () => {
    let prevIndex = itemActive - 1;
    if (prevIndex < 0) {
      prevIndex = items.length - 1;
    }
    setItemActive(prevIndex);
  };

  const handleThumbnailClick = (index) => {
    setItemActive(index);
  };

  const items = [
    {
      img: img1,
      alt: "Slider Image 1",
      heading: "Founder - Director",
      content:
        "Poornima Gururaja is an exponent of the Pandanallur/Tanjore School of dance, a disciple of Guru Smt. Narmada who trained under the legendary Guru Sri Kittappa Pillai of Tanjore.She is the founder and artistic director of the Pallavi School performing arts, based in Boston.She founded the Kalasindhu Academy of Dance and Related Arts in 2009.Poornima Gururaja holds an MBA from Brandeis University, USA and has worked as a marketing professional at Hewlett Packard.",
    },
    {
      img: img2,
      alt: "Slider Image 2",
      heading: "Teacher",
      content:
        "Poornima Gururaja is a beloved teacher and visionary in arts education, renowned for her patience and commitment to cultivating discipline and lifelong appreciation for the arts. She embraces cultural roots, encourages exploration, and empowers students to reach their artistic potential. Poornima's impact extends beyond the classroom, inspiring a love for good art and shaping the lives of her students as lifelong learners.",
    },
    {
      img: img3,
      alt: "Slider Image 3",
      heading: "Choreographer",
      content:
        "Poornima Gururaja's choreographies are renowned for their critical acclaim, authenticity, vibrant colors, and inherent appeal to children. Her productions are based on authentic sources, ensuring a rich and genuine representation of the art form. With her meticulous attention to detail and creative vision, Poornima's choreographies are filled with splendor, capturing the essence of prosperity and captivating the hearts of audiences, especially children.",
    },
    {
      img: img4,
      alt: "Slider Image 4",
      heading: "Nattuvanar",
      content:
        "Poornima Gururaja is a beloved teacher and visionary in arts education, renowned for her patience and commitment to cultivating discipline and lifelong appreciation for the arts. She embraces cultural roots, encourages exploration, and empowers students to reach their artistic potential. Poornima's impact extends beyond the classroom, inspiring a love for good art and shaping the lives of her students as lifelong learners.",
    },
    {
      img: img5,
      alt: "Slider Image 5",
      heading: "Organizer",
      content:
        "Poornima Gururaja, a skilled organizer, has curated prestigious events featuring renowned dancers from India and beyond. Through annual celebrations like Nirantara Narmada and Navarasa Navaratri, along with seminars and workshops, she has fostered connections between aspiring artists and established professionals. With 16 years of festival organizing experience, Poornima has provided valuable opportunities and remunerations for young talents, showcasing her remarkable resourcefulness.",
    },
  ];

  return (
    <div className="slider">
      {/* Slider */}
      <div className="list">
        {items.map((item, index) => (
          <div
            className={`item ${index === itemActive ? "active" : ""}`}
            key={index}
          >
            <img
              src={item.img}
              alt={item.alt}
              style={{ height: "100vh", objectFit: "cover", width: "100%" }}
            />
            <div className="content text-white">
              <p
                style={{
                  fontFamily: "Open Sans",
                  fontWeight: "500",
                  fontSize: "1.3em",
                  marginBottom: "0px",
                  color:"white"
                }}
              >
                Poornima Gururaja
              </p>
              <h2 className="fw-bold py-1 slider-heading">as {item.heading}</h2>
              <p className="slider-para" style={{ color: "white" }}>{item.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      {/* <div className="arrows ">
        <button className="mx-2" id="prev" onClick={prevSlide}>
          &lt;
        </button>
        <button id="next" onClick={nextSlide}>
          &gt;
        </button>
      </div> */}

      {/* Thumbnails */}
      <div className="thumbnail">
        {items.map((item, index) => (
          <div
            style={{ paddingTop: "50px" }}
            className={`item ${index === itemActive ? "active" : ""}`}
            key={index}
            onClick={() => handleThumbnailClick(index)}
          >
            <img src={item.img} alt={`Thumbnail  ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SliderComponent;
