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
    <section className="testimonial-section">
        <p className="mobile-testimonial">Testimonial</p>
      <div className="testimonial-container">
        <div className="testimonial-left-panel">
          <div className="testimonial-card-div">
            <div className="testimonial-heading-box">
              <div className="testimonial-heading-content">
                <p className="testimonial-subtitle">TESTIMONIALS</p>
                <p className="testimonial-title">
                  What people have to say about Kalasindhu
                </p>
              </div>
              <img
                src={testi}
                className="testimonial-image"
                alt="Testimonial"
              />
            </div>
          </div>
        </div>
        <div className="testimonial-right-panel">
          <Splide
            options={{
              type: "loop",
              perPage: 3,
              focus: "center",
              autoplay: true,
              interval: 2000,
              breakpoints: {
                1200: { perPage: 2 },
                320: { perPage: 1 },
                990: { perPage: 3 },
              },
            }}
            ref={splideRef}
          >
            <SplideSlide>
              <div className="testimonial-card">
                <span className="testimonial-quote">"</span>
                <h1 className="testimonial-card-title">Life skills</h1>
                <p>
                  Aside from teaching dance, I like Mam's emphasis on discipline
                  and life skills. I like how she encourages all children to
                  learn. Every year, we look forward to Navarasa Navaratri and
                  Niranthara Narmada in Kalasindhu. The annual day, which began
                  this year, adds to the appeal of seeing all of the children
                  perform on one stage.
                </p>
                <p className="testimonial-author">- Veena (Parent)</p>
              </div>
            </SplideSlide>

            <SplideSlide>
              <div className="testimonial-card">
                <span className="testimonial-quote">"</span>
                <h1 className="testimonial-card-title">Truly meticulous</h1>
                <p>
                  I CONGRATULATE Poornima and her team of friends and colleagues
                  for this Venture , the organisation has been truly meticulous.
                  Every detail being attended to with such devotion, care and
                  efficiency.
                </p>
                <p className="testimonial-author">- Alarmel Valli (Artist)</p>
              </div>
            </SplideSlide>

            <SplideSlide>
              <div className="testimonial-card">
                <span className="testimonial-quote">"</span>
                <h1 className="testimonial-card-title">Well crafted</h1>
                <p>
                  Poornima's students showcased the style with well practiced
                  technique in the production 'Shivotsavam'. The narratives was
                  well crafted with simple aesthetic appeal. All the dancers
                  enacted their roles with wonderful grace executing right
                  proportions of nritta and abhinaya.
                </p>
                <p className="testimonial-author">- Veena Murthy Vijay (Artist)</p>
              </div>
            </SplideSlide>

            <SplideSlide>
              <div className="testimonial-card">
                <span className="testimonial-quote">"</span>
                <h1 className="testimonial-card-title">Symmetry of dancers</h1>
                <p>
                  Fresh ideas aplenty in building up the theme, easily
                  comprehensible, coherent verbalization, clear visualization of
                  the concept and neat symmetry of dancers was Guhyam in
                  totality. Poornima Gururaja's ideas connected well with the
                  audience.
                </p>
                <p className="testimonial-author">- Jyothi Raghuram (Artist)</p>
              </div>
            </SplideSlide>

            <SplideSlide>
              <div className="testimonial-card">
                <span className="testimonial-quote">"</span>
                <h1 className="testimonial-card-title">Most happiest</h1>
                <p>
                  I am the most happiest to have watched Poornima Gururaja's
                  choreographies on such lesser known poets of our Karnataka. It
                  is an honour to have experienced her art and Direction to her
                  student' s Dance.
                </p>
                <p className="testimonial-author">
                  - RK Padmanabha (Renowned musician and Guru)
                </p>
              </div>
            </SplideSlide>

            <SplideSlide>
              <div className="testimonial-card">
                <span className="testimonial-quote">"</span>
                <h1 className="testimonial-card-title">Safe space</h1>
                <p>
                  Everything is made very clear when it is being taught and we
                  gain so much knowledge from learning about the pieces which
                  makes us better dancers. I find Kalasindhu to be a safe space
                  for me,and I'm grateful for the comfort and security this
                  environment provides and that is one of the best experiences
                  I've had here!
                </p>
                <p className="testimonial-author">- Stuthi Vitta (Student)</p>
              </div>
            </SplideSlide>

            <SplideSlide>
              <div className="testimonial-card">
                <span className="testimonial-quote">"</span>
                <h1 className="testimonial-card-title">Growth</h1>
                <p>
                  I'm extremely fortunate and blessed to have a Guru like
                  Poornima ma'am who is not just concerned about our growth in
                  dance but even beyond. The workshops organized at class & the
                  opportunities that we receive for performing at various places
                  and competitions is a great exposure for every dancer's
                  growth.
                </p>
                <p className="testimonial-author">- Anagha (Student)</p>
              </div>
            </SplideSlide>

            <SplideSlide>
              <div className="testimonial-card">
                <span className="testimonial-quote">"</span>
                <h1 className="testimonial-card-title">Holistic Education</h1>
                <p>
                  Every class is productive and I come back home every single
                  time with something to ponder about with respect to my
                  dancing. The music and Sanskrit classes conducted once a week
                  also help in increasing our connect with the dance form.
                </p>
                <p className="testimonial-author">- Aarabhi (Student)</p>
              </div>
            </SplideSlide>

            <SplideSlide>
              <div className="testimonial-card">
                <span className="testimonial-quote">"</span>
                <h1 className="testimonial-card-title">Encouraging</h1>
                <p>
                  Kalasindhu has been like a second home to me. Maam has always
                  pushed us to explore different art forms and has also given us
                  the opportunity to learn from Chandrashekar sir, which is
                  genuinely a unique and rare opportunity for any dancer. The
                  entire faculty has always been encouraging, supportive, and
                  caring.
                </p>
                <p className="testimonial-author">- Shriya D (Student)</p>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;