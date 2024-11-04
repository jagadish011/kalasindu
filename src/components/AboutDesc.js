import React from 'react' 
import abt from "../assets/images/abt.png";
import '../assets/styles/core.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import abtImg from '../assets/images/abt2.png'

function AboutDesc() {
    const splideOptions = {
        direction: 'ttb', // Vertical direction
        height: '500px', // Set the height of the slider as required
        wheel: true,
        arrows: false 
      };
      
    return (
        <>

            <Splide options={splideOptions} ref={(splide) => (window.splide = splide)}>
                <SplideSlide>
                    <section className='hero-wrapper position-relative'>
                        <img src={abtImg} className='img-fluid' alt='Hero Image' />
                        <div className='hero-overlay d-flex align-items-center justify-content-center'>
                            <p style={{ fontWeight: 200 }} className='text-center text-white'>Kalasindhu, the esteemed Academy of Dance and Related Arts, is passionately committed to the preservation and promotion of Indian arts and culture. Nestled in the vibrant city of Banashankari, Bangalore, India, this renowned institution serves as a beacon for artistic excellence.
                                At Kalasindhu, a comprehensive and integrated approach to education is offered, encompassing the rich tapestry of classical arts, including dance, music, visual art, and Sanskrit. However, it is dance that takes center stage, receiving the utmost attention and focus.
                                Within the premises of Kalasindhu, a sprawling expanse has been dedicated to cultivating an environment that nurtures creativity, catering to individuals of all ages, be it children or adults. The space is thoughtfully designed, encompassing a serene ambiance that stimulates the artistic spirit.
                                Through its unwavering dedication, Kalasindhu continues to inspire generations, fostering a deep appreciation for Indian arts and culture while instilling a lifelong love for dance and its many facets.
                            </p>
                        </div>
                    </section>
                </SplideSlide>

                <SplideSlide>
                    <section class="stats-section p-5 text-white" style={{ background: 'rgba(19, 51, 17, 1)' }}>
                        <div class="container">
                            <div class="row">
                                <div class="col-md-3" data-aos="zoom-in" data-aos-duration="1000">
                                    <div class="stat-item text-center">
                                        <h3>150+</h3>
                                        <p>Students</p>
                                    </div>
                                </div>
                                <div class="col-md-3" data-aos="zoom-in" data-aos-duration="1400">
                                    <div class="stat-item text-center">
                                        <h3>300+</h3>
                                        <p>Performances</p>
                                    </div>
                                </div>
                                <div class="col-md-3" data-aos="zoom-in" data-aos-duration="1800">
                                    <div class="stat-item text-center">
                                        <h3>30+</h3>
                                        <p>Arangetrums</p>
                                    </div>
                                </div>
                                <div class="col-md-3" data-aos="zoom-in" data-aos-duration="2200">
                                    <div class="stat-item text-center">
                                        <h3>20+</h3>
                                        <p>Productions</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </SplideSlide>

                <SplideSlide>
                    <section>
                        <div class="abt-desc text-center p-5 text-white" style={{ background: 'rgb(98, 82, 62)' }}>
                            <h2 class="fw-bolder" data-aos="fade=left" data-aos-duration="1700">Awards</h2>
                            <p style={{ fontWeight: 200 }} data-aos="fade=left" data-aos-duration="1700">Poornima Gururaja, a highly
                                acclaimed dance artist, has received several
                                prestigious awards and recognitions throughout her illustrious career. Some of these include the
                                Natya Kala Koushal from Sanatana Kalakshetra, Kempegowda Award from Bruhat Bengaluru Mahanagara
                                Palike, Puttashree Award, Nartana Nipuna Award from Karnataka Nrutyakala Parishad, and Natya Rathna
                                from Nrutyollasa Rochester, among many others.
                                In addition to her accolades, Poornima Gururaja holds prominent professional affiliations. She
                                serves as the Secretary for Karnataka Nritya Kala Parishad, plays the vital role of Festival
                                Coordinator for Delhi International arts festival, and currently holds the esteemed position of
                                Chairperson of the Textbook Committee for dance books in Karnataka. Her involvement in these
                                influential roles further underscores her commitment to the promotion and preservation of dance.
                            </p>
                        </div>
                    </section>
                </SplideSlide>
            </Splide>
        </>
    )
}

export default AboutDesc