import React, { useRef } from "react";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import t1 from "../assets/images/t1.png";
import t2 from "../assets/images/t2.png";
import t3 from "../assets/images/t3.png";
import t4 from "../assets/images/t4.png";
import t5 from "../assets/images/t5.png";
import t6 from "../assets/images/t6.png";
import t7 from "../assets/images/t7.png";
import "./Team.css";

const teamMembers = [
  {
    name: "Uday kumar",
    role: "Assistant faculty",
    image: t2,
    description: `Chi Udaykumar P is a seasoned dance teacher and performer who
                has been an assistant faculty at Kalasindhu Academy for the past
                12 years. He trained under esteemed teachers like Smt Aarthi
                Suresh, Smt Sandhya and Shri Kiran Sumbramanyam, and Shri P
                Praveen Kumar, completing his Rangapravesham in 2017. Currently,
                he continues his training under Guru Chandrashekaran Kittappa
                Pillai and Guru Smt Poornima Gururaja, and he achieved
                distinction in his Bharatnatym Vidwath Exams. Udaykumar has
                performed in numerous solo and group productions, and his
                choreographies have gained acclaim. Recognized with awards like
                Ekalavya and Prathibavardhaka.`,
  },
  {
    name: "Nagalakshmi",
    role: "Sanskrit Teacher",
    image: t1,
    description: `Dr. Nagalakshmi S is a highly accomplished individual with an
                M.A. and Ph.D. in Sanskrit. Currently serving as an assistant
                professor at CHRIST (Deemed to be University), she possesses a
                commendable 16 years of teaching experience. Dr. Nagalakshmi has
                actively participated and presented her work in numerous
                seminars and conferences, showcasing her expertise. Her
                contributions to the field of research are evident through
                publications in national, UGC care, and international journals.
                Recently, she successfully completed an internship from
                Kalasindhu , further enhancing her knowledge and skills in her
                chosen field.`,
  },
  {
    name: "Lavanthi S",
    role: "Assistant faculty",
    image: t3,
    description: `She is a skilled choreographer, performer, and theatre artist
                trained under Poornima Gururaja at Kalasindhu for 16 years. With
                accomplishments including clearing state examswith distinctions
                receiving the CCRT Scholarship, and performing on national
                platforms, she brings with a wealth of experience. As an
                assistant faculty member for 6 years, she teaches Bharatanatyam
                to children, imparting the art's value and knowledge in a fun
                and engaging manner.`,
  },
  {
    name: "Anagha kumar",
    role: "Assistant faculty",
    image: t4,
    description: `Anagha Kumar is currently pursuing a BSc in Yogic Sciences.
                Under the guidance of Guru Poornima Gururaj for 12 years, she
                has honed her skills in Bharatanatyam. Anagha has participated
                in workshops, performed at various venues, and is now a faculty
                member at Kalasindhu. She finds joy in training young children
                and is grateful for Poornima Gururaj's trust and support.`,
  },
  {
    name: "Samvitha",
    role: "Assistant faculty",
    image: t5,
    description: `Samvitha Dev is a dedicated and passionate Bharatanatyam dancer,
                with a journey spanning 10 years. Having completed her
                Rangapravesha in 2022 under the guidance of her Guru, she has
                now embarked on the fulfilling path of teaching dance at
                Kalasindhu. With enthusiasm and anticipation, she looks forward
                to the enriching experiences that lie ahead as she imparts her
                knowledge and love for Bharatanatyam to aspiring students.`,
  },
  {
    name: "Deepthi S",
    role: "Assistant faculty",
    image: t7,
    description: `She is a passionate Bharatanatyam dancer with over 20 years of
                experience. Under the guidance of Guru Smt Poornima Gururaja at
                Kalasindhu Academy, she has mastered the intricate movements and
                expressive storytelling of Bharatanatyam. With a Vidwat
                certification in Bharatanatyam and extensive performance
                experience, she continues to captivate audiences. Additionally,
                as an assistant faculty member at Kalasindhu Academy, she shares
                her knowledge and love for Bharatanatyam with aspiring learners,
                preserving its cultural heritage.`,
  },
  {
    name: "Gowri",
    role: "Music Teacher",
    image: t6,
    description: `Gowri Vishwanath is a highly experienced music faculty with 40
                years of teaching experience. She started learning Carnatic
                music at the age of 4 from her father and went on to study under
                renowned musicians like Narasimha Murthy, Jayashree
                Parthasarathy, and Sukanya Prabhakar. Currently teaching at
                Kalasindhu for the past 15 years, Gowri Vishwanath has expertise
                in various aspects of Carnatic music, including rangageethe,
                gamaka, and Hindustani music. She is also a master in singing
                for dance and passionately propagates this beautiful art form
                through her dedicated teaching.`,
  },
];

const Team = () => {
  const splideRef = useRef(null);

  return (
    <section
      className="teams"
      // style={{
      //   backgroundColor: "rgb(0, 0, 0)",
      //   backgroundSize: "cover",
      //   minHeight: "100vh",
      //   backgroundAttachment: "fixed",
      //   overflow: "hidden",
      // }}
    >
      <div className="container px-3">
        <h2
          className="team"
          style={{
            fontFamily: "Oswald",
          }}
        >
          Meet Our Team
        </h2>
        <Splide
          style={{ padding: "0 20px" }}
          options={{
            type: "loop",
            drag: "free",
            focus: "center",
            perPage: 3,
            rewind: true,
            autoplay: true,
            interval: 3000,
            breakpoints: {
              1200: { perPage: 2, padding: "0 20px" },
              991: { perPage: 2, padding: "0 20px" },
              768: { perPage: 1, padding: "0 20px" },
            },
          }}
          ref={splideRef}
        >
          {teamMembers.map((member, index) => (
            <SplideSlide key={index} className="me-3 mb-4 ml-5">
              <img
                src={member.image}
                alt={`Slide ${index + 1}`}
                style={{ borderRadius: "16px", width: "100%", height: "auto" }}
              />
              <figcaption className="figcaption ml-3">
                <p className="fw-bolder text-bold fs-2">{member.name}</p>
                <p className="mb-0 fs-6">{member.role}</p>
              </figcaption>
              <div
                className="small-desc text-dark mt-0 mb-0 px-4 py-3"
                style={{ transition: "all 1s ease-out" }}
              >
                <h4>{member.name}</h4>
                <p>{member.description}</p>
                <div className="text-center mt-0 mb-0">
                  <a
                    href="#"
                    style={{ cursor: "pointer" }}
                    data-bs-toggle="modal"
                    data-bs-target={`#exampleModal${index + 1}`}
                    className="text-decoration-none text-center text-dark fw-bolder"
                  >
                    Know more
                  </a>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>

      {teamMembers.map((member, index) => (
        <div
          key={index}
          className="modal fade"
          id={`exampleModal${index + 1}`}
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div
              className="modal-content"
              style={{ backgroundColor: "rgba(197, 158, 112, 1)" }}
            >
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Our Team
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <h4>{member.name}</h4>
                <p>{member.description}</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Team;
