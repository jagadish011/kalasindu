import React, { useEffect } from 'react'
import './styles/test.styles.css'
import Footer from '../components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Test = () => {

  useEffect(() => {
    AOS.init();
}, []);

  return (
    <div
    >
        <div className='section-1 box'
        >
            <div className='hero-overlay text-center d-flex flex-column justify-content-center align-items-center text-white'>
                <h1>Support Us</h1>
          <a
                className="btn btn-lg  rounded "
                style={{
                  
                  background: "#FCB541",
                  color: "black",
                  fontWeight:'600'
                }}
              >
              Learn how to support us
              </a>
        </div>
        </div>
     
        <section className='p-4 ' style={{fontFamily:'Open Sans'}}>
        <div className="container p-4 mt-5 shadow-sm mb-5">
          <div className="text-center mt-3" data-aos="fade-up" data-aos-duration="1000">
            <h3 className="fw-bolder">By sponsoring us</h3>
            <p className="text-center text-black">Poornima Gururaja is an exponent of the Pandanallur/Tanjore School of dance, a disciple of Guru Smt. Narmada who trained under the legendary Guru Sri Kittappa Pillai of Tanjore.She is the founder and artistic director of the Pallavi School performing arts, based in Boston.She founded the Kalasindhu Academy of Dance and Related Arts in 2009.Poornima Gururaja holds an MBA from Brandeis University, USA and has worked as a marketing professional at Hewlett Packard.
            </p>
          </div>

          <div className="text-center mt-3" data-aos="fade-up" data-aos-duration="1000">
            <h3 className="fw-bolder">By Donating</h3>
            <p>Poornima Gururaja is an exponent of the Pandanallur/Tanjore School of dance, a disciple of Guru Smt. Narmada who trained under the legendary Guru Sri Kittappa Pillai of Tanjore.She is the founder and artistic director of the Pallavi School performing arts, based in Boston.She founded the Kalasindhu Academy of Dance and Related Arts in 2009.Poornima Gururaja holds an MBA from Brandeis University, USA and has worked as a marketing professional at Hewlett Packard.
            </p>
          </div>

          <div className="text-center mt-3" data-aos="fade-up" data-aos-duration="1000">
            <h3 className="fw-bolder">By Following us on social media </h3>
            <p>Poornima Gururaja is an exponent of the Pandanallur/Tanjore School of dance, a disciple of Guru Smt. Narmada who trained under the legendary Guru Sri Kittappa Pillai of Tanjore.She is the founder and artistic director of the Pallavi School performing arts, based in Boston.She founded the Kalasindhu Academy of Dance and Related Arts in 2009.Poornima Gururaja holds an MBA from Brandeis University, USA and has worked as a marketing professional at Hewlett Packard.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-4 col-sm-6">
              <div className="social-icon text-center" data-aos="zoom-in" data-aos-duration="1000">
                <i className="bi bi-facebook fs-1 text-primary"></i>
                <p>Facebook</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="social-icon  text-center" data-aos="zoom-in" data-aos-duration="1400">
                <i className="bi bi-instagram fs-1"></i>
                <p>Instagram</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="social-icon  text-center text-danger" data-aos="zoom-in" data-aos-duration="1800">
                <i className="bi bi-youtube fs-1"></i>
                <p>YouTube</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    
       
        <Footer />
        
    </div>
  )
}

export default Test