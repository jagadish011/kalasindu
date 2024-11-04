import React from "react";
import "./cards.css";
function Cards() {
  return (
    <div className="container">
      <ul id="cards">
        <li className="card" id="card1">
          <div className="card-body">
            <h2
              style={{
                fontFamily: "Oswald",
                fontSize: "50px",
                color: "white",
                fontWeight: "800",
              }}
            >
              About Kalasindhu
            </h2>
            <p
              style={{
                fontFamily: "Open Sans",
                fontSize: "20px",
                color: "white",
                fontWeight: "600",
                lineHeight: "2",
                marginTop: "20px",
              }}
            >
              Kalasindhu, the esteemed Academy of Dance and Related Arts, is
              passionately committed to the preservation and promotion of Indian
              arts and culture. Nestled in the vibrant city of Banashankari,
              Bangalore, India, this renowned institution serves as a beacon for
              artistic excellence. At Kalasindhu, a comprehensive and integrated
              approach to education is offered, encompassing the rich tapestry
              of classical arts, including dance, music, visual art, and
              Sanskrit. However, it is dance that takes center stage, receiving
              the utmost attention and focus. Within the premises of Kalasindhu,
              a sprawling expanse has been dedicated to cultivating an
              environment that nurtures creativity, catering to individuals of
              all ages, be it children or adults. The space is thoughtfully
              designed, encompassing a serene ambiance that stimulates the
              artistic spirit. Through its unwavering dedication, Kalasindhu
              continues to inspire generations, fostering a deep appreciation
              for Indian arts and culture while instilling a lifelong love for
              dance and its many facets.
            </p>
          </div>
        </li>
        <li className="card" id="card2">
          <div className="card-body">
            <div className="d-flex justify-start flex-wrap gap-5">
              <div>
                <h2 className="text-center">150+</h2>
                <p className="fs-4">Students</p>
              </div>
              <div>
                <h2 className="text-center">300+</h2>
                <p className="fs-4">Performances</p>
              </div>
              <div>
                <h2 className="text-center">30+</h2>
                <p className="fs-4">Arangetrums</p>
              </div>
              <div>
                <h2 className="text-center">20+</h2>
                <p className="fs-4">Productions</p>
              </div>
            </div>
          </div>
        </li>
        <li className="card" id="card3">
          <div className="card-body">
            <h2>Card 3</h2>
          </div>
        </li>
        <li className="card" id="card4">
          <div className="card-body">
            <h2>Card 4</h2>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Cards;
