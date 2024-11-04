import React, { useRef } from "react";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";
import "../assets/styles/core.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import testi from "../assets/images/testimonial.png";
import "./Testimonial.css";

const Testimonial = () => {
  const splideRef = useRef(null);

  return (
    <section
      className="container-fluid1"
      // style={{
      //   backgroundColor: "rgba(19, 51, 17, 1)",
      //   height: "100vh",
      //   overflow: "inherit",
      //   paddingTop: "2.5em",
      //   backgroundSize: "cover",
      //   backgroundAttachment: "fixed",
      // }}
    >
      <div className="row">
        <div className="col-lg-5 col-sm-12 card-section">
          <div className=" test-card-div">
            <div className="test-card-left mb-2">
              <div className="p-2">
                <p
                  className="fw-bolder fs-4"
                  style={{ color: "rgba(148, 176, 116, 1)" }}
                >
                  TESTIMONIALS
                </p>
                <p
                  className="text-white fw-bolder"
                  style={{ fontFamily: "Oswald", fontSize: "48px" }}
                >
                  What people have to say about Kalasindhu
                </p>
              </div>
              <img
                src={testi}
                className="img-fluid w-100 testimonial-image"
                alt="Testimonial"
              />
            </div>
          </div>
        </div>
        <div className="col-lg-7 col-sm-12">
          <Splide
            options={{
              type: "loop",
              perPage: 3,
              focus: "center",
              autoplay: true,
              interval: 2000,
              breakpoints: {
                1200: { perPage: 2 },
                768: { perPage: 2 },
              },
            }}
            ref={splideRef}
          >
            <SplideSlide className="me-3">
              <div className="text-white test-card p-3 m-5" style={{color:'white'}}>
                <span className="text-white custom-font mb-0 mt-0 display-1">
                  "
                </span>
                <h1 className="mt-0 mb-4">Life skills</h1>
                <p>
                  Aside from teaching dance, I like Mam's emphasis on discipline
                  and life skills. I like how she encourages all children to
                  learn. Every year, we look forward to Navarasa Navaratri and
                  Niranthara Narmada in Kalasindhu. The annual day, which began
                  this year, adds to the appeal of seeing all of the children
                  perform on one stage.
                </p>
                <p className="mt-4">- Veena (Parent)</p>
              </div>
            </SplideSlide>

            <SplideSlide className="me-3">
              <div className="text-white test-card p-3 m-5">
                <span className="text-white custom-font mb-0 mt-0 display-1">
                  "
                </span>
                <h1 className="mt-0 mb-4">Truly meticulous</h1>
                <p>
                  I CONGRATULATE Poornima and her team of friends and colleagues
                  for this Venture , the organisation has been truly meticulous.
                  Every detail being attended to with such devotion, care and
                  efficiency.
                </p>
                <p className="mt-4">- Alarmel Valli (Artist)</p>
              </div>
            </SplideSlide>

            <SplideSlide className="me-3">
              <div className="text-white test-card p-3 m-5">
                <span className="text-white custom-font mb-0 mt-0 display-1">
                  "
                </span>
                <h1 className="mt-0 mb-4">Well crafted</h1>
                <p>
                  Poornima’s students showcased the style with well practiced
                  technique in the production 'Shivotsavam'. The narratives was
                  well crafted with simple aesthetic appeal. All the dancers
                  enacted their roles with wonderful grace executing right
                  proportions of nritta and abhinaya.
                </p>
                <p className="mt-4">- Veena Murthy Vijay (Artist)</p>
              </div>
            </SplideSlide>

            <SplideSlide className="me-3">
              <div className="text-white test-card p-3 m-5">
                <span className="text-white custom-font mb-0 mt-0 display-1">
                  "
                </span>
                <h1 className="mt-0 mb-4">Symmetry of dancers</h1>
                <p>
                  Fresh ideas aplenty in building up the theme, easily
                  comprehensible, coherent verbalization, clear visualization of
                  the concept and neat symmetry of dancers was Guhyam in
                  totality. Poornima Gururaja's ideas connected well with the
                  audience.
                </p>
                <p className="mt-4">- Jyothi Raghuram (Artist)</p>
              </div>
            </SplideSlide>

            <SplideSlide className="me-3">
              <div className="text-white test-card p-3 m-5">
                <span className="text-white custom-font mb-0 mt-0 display-1">
                  "
                </span>
                <h1 className="mt-0 mb-4">Most happiest</h1>
                <p>
                  I am the most happiest to have watched Poornima Gururaja's
                  choreographies on such lesser known poets of our Karnataka. It
                  is an honour to have experienced her art and Direction to her
                  student' s Dance.
                </p>
                <p className="mt-4">
                  - RK Padmanabha (Renowned musician and Guru)
                </p>
              </div>
            </SplideSlide>

            <SplideSlide className="me-3">
              <div className="text-white test-card p-3 m-5">
                <span className="text-white custom-font mb-0 mt-0 display-1">
                  "
                </span>
                <h1 className="mt-0 mb-4">Safe space</h1>
                <p>
                  Everything is made very clear when it is being taught and we
                  gain so much knowledge from learning about the pieces which
                  makes us better dancers. I find Kalasindhu to be a safe space
                  for me,and I'm grateful for the comfort and security this
                  environment provides and that is one of the best experiences
                  I've had here!
                </p>
                <p className="mt-4">- Stuthi Vitta (Student)</p>
              </div>
            </SplideSlide>

            <SplideSlide className="me-3">
              <div className="text-white test-card p-3 m-5">
                <span className="text-white custom-font mb-0 mt-0 display-1">
                  "
                </span>
                <h1 className="mt-0 mb-4">Growth</h1>
                <p>
                  I'm extremely fortunate and blessed to have a Guru like
                  Poornima ma'am who is not just concerned about our growth in
                  dance but even beyond. The workshops organized at class & the
                  opportunities that we receive for performing at various places
                  and competitions is a great exposure for every dancer's
                  growth.
                </p>
                <p className="mt-4">- Anagha (Student)</p>
              </div>
            </SplideSlide>

            <SplideSlide className="me-3">
              <div className="text-white test-card p-3 m-5">
                <span className="text-white custom-font mb-0 mt-0 display-1">
                  "
                </span>
                <h1 className="mt-0 mb-4">Holistic Education</h1>
                <p>
                  Every class is productive and I come back home every single
                  time with something to ponder about with respect to my
                  dancing. The music and Sanskrit classes conducted once a week
                  also help in increasing our connect with the dance form.
                </p>
                <p className="mt-4">- Aarabhi (Student)</p>
              </div>
            </SplideSlide>

            <SplideSlide className="me-3">
              <div className="text-white test-card p-3 m-5">
                <span className="text-white custom-font mb-0 mt-0 display-1">
                  "
                </span>
                <h1 className="mt-0 mb-4">Encouraging</h1>
                <p>
                  Kalasindhu has been like a second home to me. Maam has always
                  pushed us to explore different art forms and has also given us
                  the opportunity to learn from Chandrashekar sir, which is
                  genuinely a unique and rare opportunity for any dancer. The
                  entire faculty has always been encouraging, supportive, and
                  caring.
                </p>
                <p className="mt-4">- Shriya D (Student)</p>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
